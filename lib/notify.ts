export async function notifyOwner(sub: any) {
  const user = sub.userId
  const plan = sub.planId

  const message = `🍱 New Subscription!\n\nName: ${user.name}\nEmail: ${user.email}\nPlan: ${plan.name}\nAmount: ₹${plan.price / 100}\nValid until: ${sub.endsAt.toDateString()}`

  await sendWhatsApp(message)

  sub.notifiedAt = new Date()
  await sub.save()

  console.log('Owner notified on WhatsApp!')
}

async function sendWhatsApp(message: string) {
  const response = await fetch(
    `https://graph.facebook.com/v19.0/${process.env.WHATSAPP_PHONE_ID}/messages`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.WHATSAPP_TOKEN}`,
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to:   process.env.OWNER_WHATSAPP_NUMBER,
        type: 'text',
        text: { body: message },
      }),
    }
  )

  const data = await response.json()
  console.log('WhatsApp response:', data)
}