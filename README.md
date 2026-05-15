# 🍱 RoodMates — Food Subscription App

RoodMates is a full-stack food subscription platform built for students and working professionals. Users can sign up, browse meal plans, pay securely, and get instant subscription access — while the owner receives real-time WhatsApp notifications for every successful subscription.

---

## 💡 About The Project

RoodMates was built to simplify affordable daily meal subscriptions for students and working professionals. The platform streamlines subscription management, secure online payments, delivery information handling, and real-time notifications into a seamless user experience.

---

## 🚀 Live Demo

> https://roodmates.com/

---

## ✨ Features

- 🔐 **Authentication** — Secure sign up and sign in using Clerk
- 🍽️ **Meal Plans** — Weekly and Monthly subscription plans
- 💳 **Payments** — Razorpay payment gateway integration
- ✅ **Instant Activation** — Automatic subscription activation after successful payment
- 📍 **Delivery Address Management** — User address collection and storage
- 📲 **Real-Time Notifications** — Instant Email notifications on every new subscription
- 📊 **Dashboard** — Subscription tracking with active plan and expiry details
- 🔄 **Billing Toggle** — Switch between Weekly and Monthly pricing

---

## 🛠️ Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Authentication | Clerk |
| Database | MongoDB Atlas |
| ODM | Mongoose |
| Payments | Razorpay |
| Notifications | Resend |
| Hosting | Vercel |

---

## 📁 Project Structure

## 📁 Project Structure

```bash
food-app/
├── app/
│   ├── about/                          # About page
│   ├── contact/                        # Contact page
│   ├── dashboard/                      # User dashboard
│   ├── menu/                           # Weekly meal menu page
│   ├── subscription-plan/              # Subscription plans page
│   │
│   ├── api/
│   │   ├── plans/
│   │   │   └── route.ts                # Fetch all active subscription plans
│   │   │
│   │   ├── pay/
│   │   │   └── route.ts                # Create Razorpay order
│   │   │
│   │   ├── my-subscription/
│   │   │   └── route.ts                # Get logged-in user's subscription
│   │   │
│   │   ├── user/
│   │   │   └── address/
│   │   │       └── route.ts            # Save and fetch user delivery address
│   │   │
│   │   └── webhooks/
│   │       ├── clerk/
│   │       │   └── route.ts            # Sync Clerk users with MongoDB
│   │       │
│   │       └── razorpay/
│   │           └── route.ts            # Verify Razorpay payment webhook
│   │
│   ├── sign-in/[[...sign-in]]/         # Clerk sign-in route
│   ├── sign-up/[[...sign-up]]/         # Clerk sign-up route
│   │
│   ├── layout.tsx                      # Root layout component
│   ├── not-found.tsx                   # Custom 404 page
│   └── page.tsx                        # Home page
│
├── components/
│   ├── home/
│   │   ├── Hero.tsx                    # Landing page hero section
│   │   ├── PlansSection.tsx            # Subscription plans UI
│   │   └── ...                         # Additional home page components
│   │
│   ├── shared/
│   │   ├── Header.tsx                  # Global navbar/header
│   │   ├── Footer.tsx                  # Global footer
│   │   └── InnerBanner.tsx             # Reusable page banner
│   │
│   └── AddressModal.tsx                # Delivery address modal
│
├── lib/
│   ├── mongodb.ts                      # MongoDB connection utility
│   └── notify.ts                       # Notification utility (WhatsApp/Email)
│
├── models/
│   ├── User.ts                         # User schema
│   ├── Plan.ts                         # Subscription plan schema
│   └── Subscription.ts                 # User subscription schema
│
├── public/                             # Static assets
├── middleware.ts                       # Clerk authentication middleware
├── package.json                        # Project dependencies and scripts
├── tsconfig.json                       # TypeScript configuration
├── tailwind.config.ts                  # Tailwind CSS configuration
├── next.config.ts                      # Next.js configuration
└── README.md                           # Project documentation
```

---

## 🔄 Application Flow

```txt
User Authentication
        ↓
Browse Subscription Plans
        ↓
Enter Delivery Address
        ↓
Create Razorpay Order
        ↓
Secure Payment Processing
        ↓
Webhook Verification
        ↓
Subscription Activation
        ↓
Real-Time Owner Notification
```

---

## 🚫 Usage & Access

This repository contains proprietary client work and is shared publicly for portfolio and demonstration purposes only.

Reproduction, redistribution, modification, or commercial use of this codebase or its assets without explicit permission is prohibited.

---

## 👨‍💻 Author

Built by **Vishesh Gaur**

---

## 📬 Let's Connect

If you'd like to discuss this project, collaborate, or work together, feel free to connect through my portfolio.

🔗 Portfolio: https://devishesh.vercel.app/

---

## 📄 License

All rights reserved.

This project is private client work and is not open source.