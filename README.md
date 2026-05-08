# 🍱 RoodMates — Food Subscription App

RoodMates is a full-stack food subscription platform built for students and working professionals. Users can sign up, browse meal plans, pay securely, and get instant subscription access — while the owner receives a real-time WhatsApp notification on every new subscription.

---

## 💡 Why RoodMates?

RoodMates was built to simplify affordable meal subscriptions for students and working professionals who struggle with daily meal management. The platform automates subscriptions, payments, and owner notifications in real time.

---

## 🚀 Live Demo

> Coming soon after deployment

---

## ✨ Features

- 🔐 **Authentication** — Sign up / Sign in via Clerk (Email + Google OAuth)
- 🍽️ **Meal Plans** — Weekly and Monthly plans (Basic, Standard, Premium)
- 💳 **Payments** — Secure Razorpay integration with webhook verification
- ✅ **Instant Activation** — Subscription activates immediately after payment
- 📍 **Delivery Address** — Collected before checkout and stored per user
- 📲 **WhatsApp Notifications** — Owner notified instantly on every new subscription
- 📊 **Dashboard** — Users can view their active plan, expiry date, and delivery address
- 🔄 **Billing Toggle** — Switch between Weekly and Monthly pricing

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Authentication | Clerk |
| Database | MongoDB Atlas |
| ODM | Mongoose |
| Payments | Razorpay |
| Notifications | WhatsApp (Meta Cloud API) |
| Toasts | Sonner |
| Hosting | Vercel |

---

## 📁 Project Structure

```
food-app/
├── app/
│   ├── api/
│   │   ├── plans/route.ts               # Fetch all active plans
│   │   ├── pay/route.ts                 # Create Razorpay order
│   │   ├── my-subscription/route.ts     # Fetch user's active subscription
│   │   ├── user/
│   │   │   └── address/route.ts         # Get & save delivery address
│   │   └── webhooks/
│   │       ├── clerk/route.ts           # Sync Clerk user to MongoDB
│   │       └── razorpay/route.ts        # Verify payment & activate subscription
│   ├── sign-in/[[...sign-in]]/
│   ├── sign-up/[[...sign-up]]/
│   ├── dashboard/
│   ├── subscription-plan/
│   ├── contact/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── PlansSection.tsx
│   │   └── ...
│   ├── shared/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── InnerBanner.tsx
│   └── AddressModal.tsx
├── lib/
│   ├── mongodb.ts                        # MongoDB connection utility
│   └── notify.ts                         # WhatsApp notification
├── models/
│   ├── User.ts                           # User schema
│   ├── Plan.ts                           # Plan schema
│   └── Subscription.ts                   # Subscription schema
├── middleware.ts                          # Clerk route protection
└── .env.local                            # Environment variables
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/roodmates.git
cd roodmates
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root:

```env
# MongoDB
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/...

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
CLERK_WEBHOOK_SECRET=...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/...
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/...
# Razorpay
RAZORPAY_KEY_ID=rzp_test_...
RAZORPAY_KEY_SECRET=...
RAZORPAY_WEBHOOK_SECRET=...
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_...

# WhatsApp (Meta Cloud API)
WHATSAPP_PHONE_ID=...
WHATSAPP_TOKEN=...
OWNER_WHATSAPP_NUMBER=91XXXXXXXXXX
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🗄️ Database Setup

### MongoDB Plans (insert in MongoDB Compass)

**Weekly Plans:**
```json
{ "name": "Basic Plan", "description": "Lunch Only", "price": 55000, "durationDays": 7, "meals": ["Lunch"], "isActive": true, "billing": "weekly" }
{ "name": "Standard Plan", "description": "Dinner Only", "price": 55000, "durationDays": 7, "meals": ["Dinner"], "isActive": true, "billing": "weekly" }
{ "name": "Premium Plan", "description": "Lunch + Dinner", "price": 105000, "durationDays": 7, "meals": ["Lunch", "Dinner"], "isActive": true, "billing": "weekly" }
```

**Monthly Plans:**
```json
{ "name": "Basic Plan", "description": "Lunch Only", "price": 220000, "durationDays": 30, "meals": ["Lunch"], "isActive": true, "billing": "monthly" }
{ "name": "Standard Plan", "description": "Dinner Only", "price": 220000, "durationDays": 30, "meals": ["Dinner"], "isActive": true, "billing": "monthly" }
{ "name": "Premium Plan", "description": "Lunch + Dinner", "price": 420000, "durationDays": 30, "meals": ["Lunch", "Dinner"], "isActive": true, "billing": "monthly" }
```
Note-: All Plans are in paise for razorpay compatibility ...
---

## 🔄 Application Flow

```
User signs up (Clerk)
      ↓
Clerk webhook → User saved to MongoDB
      ↓
User browses plans (GET /api/plans)
      ↓
User selects a plan → Address modal opens
      ↓
User enters delivery address → Saved to MongoDB
      ↓
POST /api/pay → Razorpay order created → Pending subscription saved
      ↓
Razorpay checkout opens → User pays
      ↓
Razorpay webhook → Signature verified → Subscription activated
      ↓
WhatsApp notification sent to owner
      ↓
User redirected to dashboard
```


## 🚀 Deployment

### Deploy to Vercel

```bash
# Push to GitHub first
git add .
git commit -m "initial commit"
git push

# Then import to Vercel at vercel.com
# Add all environment variables in Vercel dashboard
```

### After deployment update:
1. **Clerk webhook URL** → `https://yourapp.vercel.app/api/webhooks/clerk`
2. **Razorpay webhook URL** → `https://yourapp.vercel.app/api/webhooks/razorpay`
3. **Switch Razorpay to live mode** → replace `rzp_test_` keys with `rzp_live_` keys

---

## 📋 Pre-launch Checklist

- [ ] Deploy to Vercel
- [ ] Update Clerk webhook URL
- [ ] Update Razorpay webhook URL  
- [ ] Switch to Razorpay live keys
- [ ] Set up WhatsApp Meta Cloud API
- [ ] Delete test data from MongoDB
- [ ] Remove test payment page
- [ ] Add subscription expiry cron job
- [ ] Test full flow end to end in production

---

## 👨‍💻 Author

Built by **Vishesh Gaur**

---

## 📄 License

This project is private and not open source.

---

## 📬 Let's Connect

If you'd like to discuss this project, collaborate, or need any help, feel free to reach out through my portfolio.

🔗 Portfolio: https://devishesh.vercel.app/

```




