'use client'
import { useState, useEffect } from 'react'
import { toast } from 'sonner'

interface Address {
  line1: string
  line2: string
  city: string
  state: string
  pincode: string
}

interface Props {
  isOpen: boolean
  onClose: () => void
  onConfirm: (address: Address) => void
}

export default function AddressModal({ isOpen, onClose, onConfirm }: Props) {
  const [loading, setLoading] = useState(false)
  const [fetching, setFetching] = useState(true)
  const [address, setAddress] = useState<Address>({
    line1: '',
    line2: '',
    city: '',
    state: '',
    pincode: '',
  })

  // Fetch existing address if any
  useEffect(() => {
    if (!isOpen) return
    fetch('/api/user/address')
      .then(res => res.json())
      .then(data => {
        if (data.address) setAddress(data.address)
        setFetching(false)
      })
      .catch(() => setFetching(false))
  }, [isOpen])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setAddress({ ...address, [e.target.name]: e.target.value })
  }

  async function handleConfirm() {
    if (!address.line1 || !address.city || !address.state || !address.pincode) {
      toast.error('Please fill all required fields')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/user/address', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(address),
      })
      const data = await res.json()
      if (!data.success) {
        toast.error('Failed to save address')
        return
      }
      onConfirm(address)
    } catch {
      toast.error('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  const inputClass = `
    w-full px-4 py-3 rounded-xl border border-gray-200
    bg-gray-50 text-gray-900 text-sm
    focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent
    placeholder:text-gray-400 transition-all duration-200
  `

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-[#1a3a2a]">
              Delivery Address
            </h2>
            <p className="text-gray-500 text-sm mt-0.5">
              Where should we deliver your meals?
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl font-light"
          >
            ✕
          </button>
        </div>

        {fetching ? (
          <div className="text-center py-8 text-gray-400 text-sm">
            Loading your address...
          </div>
        ) : (
          <div className="space-y-4">

            {/* Line 1 */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">
                Address Line 1 <span className="text-amber-600">*</span>
              </label>
              <input
                type="text"
                name="line1"
                value={address.line1||""}
                onChange={handleChange}
                placeholder="House no, Street name"
                className={inputClass}
              />
            </div>

            {/* Line 2 */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">
                Address Line 2
                <span className="text-gray-400 font-normal ml-1">(optional)</span>
              </label>
              <input
                type="text"
                name="line2"
                value={address.line2||""}
                onChange={handleChange}
                placeholder="Landmark, Area"
                className={inputClass}
              />
            </div>

            {/* City + State */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">
                  City <span className="text-amber-600">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={address.city||""}
                  onChange={handleChange}
                  placeholder="Meerut"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">
                  State <span className="text-amber-600">*</span>
                </label>
                <input
                  type="text"
                  name="state"
                  value={address.state||""}
                  onChange={handleChange}
                  placeholder="Uttar Pradesh"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Pincode */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">
                Pincode <span className="text-amber-600">*</span>
              </label>
              <input
                type="text"
                name="pincode"
                value={address.pincode||""}
                onChange={handleChange}
                placeholder="250001"
                maxLength={6}
                className={inputClass}
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={onClose}
                className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                disabled={loading}
                className={`flex-1 py-3 rounded-xl text-white font-bold text-sm transition-all duration-200 ${
                  loading
                    ? 'bg-amber-400 cursor-not-allowed'
                    : 'bg-amber-600 hover:bg-amber-700 active:scale-95'
                }`}
              >
                {loading ? 'Saving...' : 'Confirm & Pay →'}
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  )
}