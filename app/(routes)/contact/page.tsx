"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "@/components/shared/Footer";
import { InnerBanner } from "@/components/shared/InnerBanner";
import { toast } from "sonner";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', msg: string } | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (form.current) {
      // Replace these with your actual EmailJS credentials
      emailjs.sendForm(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, 
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, 
  form.current, 
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
)
      .then((result) => {
          setStatus({ type: 'success', msg: "Message sent successfully!" });
          form.current?.reset();
          toast.success("Form Submitted Succesfully")
      }, (error) => {
          setStatus({ type: 'error', msg: "Something went wrong. Please try again." });
          toast.error("Something went Wrong");
      })
      .finally(() => {
          setIsSubmitting(false);
      });
    }
  };

  return (
    <>
      <InnerBanner heading="Contact Us" />

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          
          {status && (
            <div className={`mb-6 p-4 rounded-lg text-sm ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {status.msg}
            </div>
          )}

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input type="text" name="from_name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" name="user_email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel" name="user_phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input type="text" name="subject" required className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea name="message" rows={5} required className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 resize-none"></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 hover:bg-green-700 cursor-pointer disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition shadow-md"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}