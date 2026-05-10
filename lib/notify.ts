export async function notifyOwner(sub: any) {
  const user = sub.userId;
  const plan = sub.planId;

  await sendEmail(user, plan, sub);

  // Call the custom save function we passed
  if (typeof sub.save === "function") {
    await sub.save();
  }

  console.log("Owner notified via email!");
}

async function sendEmail(user: any, plan: any, sub: any) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "RoodMates <onboarding@resend.dev>",
      to: process.env.OWNER_EMAIL,
      subject: "🍱 New Subscription — RoodMates",
      html: `
        <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; padding: 24px;">
          
          <div style="background: #1a3a2a; padding: 24px; border-radius: 12px; text-align: center; margin-bottom: 24px;">
            <h1 style="color: #F5C842; margin: 0; font-size: 24px;">🍱 RoodMates</h1>
            <p style="color: #d1d5db; margin: 8px 0 0;">New Subscription Alert</p>
          </div>

          <div style="background: #f9fafb; border-radius: 12px; padding: 24px; margin-bottom: 16px;">
            <h2 style="color: #1a3a2a; margin: 0 0 16px; font-size: 18px;">Customer Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Name</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 600; font-size: 14px;">${user.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Email</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 600; font-size: 14px;">${user.email}</td>
              </tr>
              ${
                user.address
                  ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Address</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 600; font-size: 14px;">
                  ${user.address.line1}${user.address.line2 ? ", " + user.address.line2 : ""}<br/>
                  ${user.address.city}, ${user.address.state} - ${user.address.pincode}
                </td>
              </tr>
              `
                  : ""
              }
            </table>
          </div>

          <div style="background: #f9fafb; border-radius: 12px; padding: 24px; margin-bottom: 16px;">
            <h2 style="color: #1a3a2a; margin: 0 0 16px; font-size: 18px;">Subscription Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Plan</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 600; font-size: 14px;">${plan.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Meals</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 600; font-size: 14px;">${plan.meals.join(" + ")}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Billing</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 600; font-size: 14px; text-transform: capitalize;">${plan.billing}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Amount</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 600; font-size: 14px;">₹${plan.price / 100}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Valid From</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 600; font-size: 14px;">${new Date(sub.startsAt).toDateString()}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Valid Until</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 600; font-size: 14px;">${new Date(sub.endsAt).toDateString()}</td>
              </tr>
            </table>
          </div>

          <div style="text-align: center; padding: 16px; background: #dcfce7; border-radius: 12px;">
            <p style="color: #166534; font-weight: 700; margin: 0; font-size: 16px;">
              ✅ Subscription is now ACTIVE
            </p>
          </div>

          <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 24px;">
            RoodMates — Fresh meals delivered to your door
          </p>
        </div>
      `,
    }),
  });

  const data = await response.json();
  // console.log('Email response:', data)
}
