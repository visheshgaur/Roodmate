'use client'
import { useState } from 'react'

export default function TestPayment() {
  const [loading, setLoading] = useState(false)

  async function handlePayment() {
    setLoading(true)
    try {
      // Step 1: Create order
      const res = await fetch('/api/pay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planId: '69d2311a4503513a0e6232e9' }),
      })

      const data = await res.json()
      console.log('Order created:', data)

      if (!data.success) {
        alert(data.error)
        return
      }

      // Step 2: Open Razorpay checkout
      const options = {
        key:         process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount:      data.amount,
        currency:    data.currency,
        name:        'Food App',
        description: data.planName,
        order_id:    data.orderId,
        handler: function (response: any) {
          console.log('Payment success:', response)
          alert('Payment successful! Check your terminal for webhook.')
        },
        prefill: {
          email: 'test@example.com',
        },
        theme: { color: '#F97316' },
      }

      const razorpay = new (window as any).Razorpay(options)
      razorpay.open()

    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <button
        onClick={handlePayment}
        disabled={loading}
        className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg"
      >
        {loading ? 'Loading...' : 'Test Payment ₹2,999'}
      </button>
    </main>
  )
}