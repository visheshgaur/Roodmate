'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@clerk/nextjs'
import { error } from 'console'
import { toast } from 'sonner'

interface Plan {
  _id: string
  name: string
  description: string
  price: number
  durationDays: number
  meals: string[]
  isActive: boolean
  billing: 'weekly' | 'monthly'
}

export default function PlansSection() {
  const [billing, setBilling] = useState<'weekly' | 'monthly'>('weekly')
  const [allPlans, setAllPlans] = useState<Plan[]>([])
  const [loadingId, setLoadingId] = useState<string | null>(null)
  const router = useRouter()
  const { isSignedIn } = useUser()

  // Fetch all 6 plans from API once
  useEffect(() => {
    fetch('/api/plans')
      .then(res => res.json())
      .then(data => {
        if (data.plans && data.plans.length > 0) {
          setAllPlans(data.plans)
        }
      })
      .catch((err)=>{
        toast.error("Something went wrong");
      })
  }, [])

  // Filter plans by selected billing type
  const displayPlans = allPlans.filter(p => p.billing === billing)

  function formatPrice(paise: number): string {
    return `₹${(paise / 100).toLocaleString('en-IN')}`
  }

  async function handleSubscribe(plan: Plan) {
    if (!isSignedIn) {
      router.push('/sign-in')
      return
    }

    setLoadingId(plan._id)

    try {
      const res = await fetch('/api/pay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planId: plan._id }),
      })

      const data = await res.json()

      if (!data.success) {
        toast.error(data.error)
        return
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        name: 'RoodMates',
        description: `${plan.name} - ${plan.billing}`,
        order_id: data.orderId,
        handler: function () {
          router.push('/dashboard')
        },
        prefill: {},
        theme: { color: '#E07B00' },
        modal: {
          ondismiss: function () {
            setLoadingId(null)
          },
        },
      }

      const razorpay = new (window as any).Razorpay(options)
      razorpay.open()
    } catch (error) {
      console.error(error)
      toast.error('Something went wrong. Please try again.')
    } finally {
      setLoadingId(null)
    }
  }

  return (
    <section className="py-20 px-6 bg-white text-center">

      {/* Header */}
      <p className="text-sm font-semibold tracking-widest uppercase text-amber-600 mb-2">
        Plan
      </p>
      <h2 className="text-4xl md:text-5xl font-bold text-[#1a3a2a] mb-3">
        Our Subscription Plan<span className="text-amber-600">.</span>
      </h2>
      <p className="text-gray-500 text-base mb-8">
        Perfect for Students &amp; Working Professionals
      </p>

      {/* Weekly / Monthly toggle */}
      <div className="inline-flex bg-gray-100 rounded-full p-1 mb-12 gap-1">
        <button
          onClick={() => setBilling('weekly')}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
            billing === 'weekly'
              ? 'bg-[#1a3a2a] text-white'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Weekly
        </button>
        <button
          onClick={() => setBilling('monthly')}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
            billing === 'monthly'
              ? 'bg-[#1a3a2a] text-white'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Monthly
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full transition-all ${
            billing === 'monthly'
              ? 'bg-amber-500 text-white'
              : 'bg-amber-100 text-amber-700'
          }`}>
            Save more
          </span>
        </button>
      </div>

      {/* Loading state */}
      {allPlans.length === 0 && (
        <div className="text-gray-400 text-sm py-12">Loading plans...</div>
      )}

      {/* Plan cards */}
      {allPlans.length > 0 && (
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {displayPlans.map((plan, index) => {
            const isHighlighted = index === 1
            const isLoading = loadingId === plan._id

            return (
              <div
                key={plan._id}
                className={`rounded-2xl p-9 w-72 flex flex-col items-center gap-3 transition-all duration-200 ${
                  isHighlighted
                    ? 'bg-[#1a3a2a] border-2 border-[#1a3a2a] scale-105 shadow-2xl'
                    : 'bg-gray-50 border border-gray-200 hover:shadow-md'
                }`}
              >
                {/* Plan name */}
                <h3
                  className={`text-xl font-bold ${
                    isHighlighted ? 'text-yellow-400' : 'text-amber-600'
                  }`}
                >
                  {plan.name}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm ${
                    isHighlighted ? 'text-gray-300' : 'text-gray-500'
                  }`}
                >
                  {plan.description}
                </p>

                {/* Price */}
                <p
                  className={`text-4xl font-extrabold mt-2 ${
                    isHighlighted ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {formatPrice(plan.price)}
                  <span
                    className={`text-base font-normal ml-1 ${
                      isHighlighted ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    / {billing === 'weekly' ? 'Week' : 'Month'}
                  </span>
                </p>

                {/* Meal tags */}
                <div className="flex flex-wrap gap-2 justify-center my-2">
                  {plan.meals.map(meal => (
                    <span
                      key={meal}
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        isHighlighted
                          ? 'bg-white/20 text-white'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {meal}
                    </span>
                  ))}
                </div>

                {/* Subscribe button */}
                <button
                  onClick={() => handleSubscribe(plan)}
                  disabled={isLoading}
                  className={`mt-2 w-full py-3 px-6 rounded-full text-sm font-bold text-white transition-all duration-200 ${
                    isLoading
                      ? 'bg-amber-400 cursor-not-allowed'
                      : 'bg-amber-600 hover:bg-amber-700 active:scale-95'
                  }`}
                >
                  {isLoading ? 'Processing...' : 'Get A Subscription'}
                </button>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}
