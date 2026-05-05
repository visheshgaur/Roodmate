'use client'
import { useEffect, useState } from 'react'
import { InnerBanner } from '@/components/shared/InnerBanner'
import Footer from '@/components/shared/Footer'

interface Plan {
  name: string
  description: string
  price: number
  meals: string[]
}

interface Subscription {
  status: string
  startsAt: string
  endsAt: string
  razorpayPaymentId: string
  planId: Plan
}
interface Address {
  line1: string
  line2: string
  city: string
  state: string
  pincode: string
}

export default function Dashboard() {
  const [subscription, setSubscription] = useState<Subscription | null>(null)
  const [loading, setLoading] = useState(true)
  const [address, setAddress] = useState<Address | null>(null)

  useEffect(() => {
    fetch('/api/my-subscription')
      .then(res => res.json())
      .then(data => {
        setSubscription(data.subscription)
        setAddress(data.address)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  function daysRemaining(endsAt: string) {
    const diff = new Date(endsAt).getTime() - new Date().getTime()
    return Math.ceil(diff / (1000 * 60 * 60 * 24))
  }

  return (
    <>
      <InnerBanner heading="My Plans" />

      <section className="py-16 px-6 bg-gray-50 ">
        <div className="max-w-3xl mx-auto">

          {/* Loading */}
          {loading && (
            <div className="text-center text-gray-500 py-20">
              Loading your plan...
            </div>
          )}

          {/* No active subscription */}
          {!loading && !subscription && (
            <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
              <div className="text-5xl mb-4">🍽️</div>
              <h2 className="text-2xl font-bold text-[#1a3a2a] mb-2">
                No Active Plan
              </h2>
              <p className="text-gray-500 mb-6">
                You don't have an active subscription yet.
              </p>
              
               <a href="/subscription-plan"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-200"
              >
                Browse Plans
              </a>
            </div>
          )}

          {/* Active subscription */}
          {!loading && subscription && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

              {/* Top green header */}
              <div className="bg-[#1a3a2a] px-8 py-6 flex items-center justify-between">
                <div>
                  <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-1">
                    Active Plan
                  </p>
                  <h2 className="text-white text-2xl font-bold">
                    {subscription.planId.name}
                  </h2>
                  <p className="text-gray-300 text-sm mt-1">
                    {subscription.planId.description}
                  </p>
                </div>
                <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  ✓ Active
                </div>
              </div>

              {/* Details */}
              <div className="px-8 py-6 grid grid-cols-2 gap-6">

                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                    Amount Paid
                  </p>
                  <p className="text-gray-900 font-bold text-xl">
                    ₹{(subscription.planId.price / 100).toLocaleString('en-IN')}
                  </p>
                </div>

                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                    Meals Included
                  </p>
                  <div className="flex gap-2 flex-wrap mt-1">
                    {subscription.planId.meals.map(meal => (
                      <span
                        key={meal}
                        className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full"
                      >
                        {meal}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                    Start Date
                  </p>
                  <p className="text-gray-900 font-semibold">
                    {formatDate(subscription.startsAt)}
                  </p>
                </div>

                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                    End Date
                  </p>
                  <p className="text-gray-900 font-semibold">
                    {formatDate(subscription.endsAt)}
                  </p>
                </div>

              </div>

              {/* Days remaining bar */}
              <div className="px-8 pb-8">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-500">Days remaining</span>
                  <span className="font-bold text-[#1a3a2a]">
                    {daysRemaining(subscription.endsAt)} days
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="bg-amber-500 h-2 rounded-full transition-all duration-500"
                    style={{
                      width: `${Math.min(
                        (daysRemaining(subscription.endsAt) / 30) * 100,
                        100
                      )}%`,
                    }}
                  />
                </div>
              </div>
{address && (
  <div className="px-8 pb-6 border-t border-gray-100 pt-4">
    <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">
      Delivery Address
    </p>
    {/* <p className="text-gray-700 text-sm">
      {address.line1}{address.line2 ? `, ${address.line2}` : ''}<br />
      {address.city}, {address.state} - {address.pincode}
    </p> */}
    <p className="text-gray-700 text-sm">
      {address.line1}{address.line2 ? `, ${address.line2}` : ''}<br />
      {address.city}, {address.state} - {address.pincode}
    </p>
  </div>
)}
              {/* Payment ID */}
              <div className="px-8 pb-6 border-t border-gray-100 pt-4">
                <p className="text-gray-400 text-xs">
                  Payment ID: {subscription.razorpayPaymentId}
                </p>
              </div>

            </div>
          )}

        </div>
        {/* Delivery Address */}

       
      </section>
      <Footer/>
    </>
  )
}