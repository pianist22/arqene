// app/contact/page.jsx
"use client";

import Button from "@/components/navbar/AnimatedButton";

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="w-5 h-5 fill-current"
      aria-hidden="true"
    >
      <path d="M16 3C9.935 3 5 7.935 5 14c0 2.447.78 4.715 2.121 6.58L5 27l6.585-2.09A10.93 10.93 0 0 0 16 25c6.065 0 11-4.935 11-11S22.065 3 16 3zm0 2c4.971 0 9 4.029 9 9s-4.029 9-9 9a8.9 8.9 0 0 1-4.563-1.27l-.327-.196-3.909 1.243 1.27-3.82-.212-.338A8.9 8.9 0 0 1 7 14c0-4.971 4.029-9 9-9zm4.23 5.883c-.23-.512-.472-.523-.691-.533-.179-.008-.384-.007-.59-.007s-.538.077-.82.383-.1.94-.1.94.294.9.635 1.432c.31.482.662.924 1.152 1.314.566.452 1.011.594 1.36.675.447.107.853.092 1.175.056.358-.041.877-.359 1.001-.707.124-.349.124-.648.087-.711-.036-.064-.133-.102-.279-.179s-.877-.432-1.013-.481c-.136-.05-.235-.075-.336.075-.1.149-.386.481-.473.579-.087.099-.173.111-.321.036-.149-.075-.629-.232-1.198-.741-.443-.396-.742-.885-.829-1.034-.087-.149-.01-.23.065-.305.067-.067.149-.173.224-.26.075-.087.1-.149.149-.249.05-.1.025-.19-.013-.267-.038-.075-.337-.83-.462-1.137z" />
    </svg>
  );
}

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    const email = data.get("email");
    const phone = data.get("phone");
    const message = data.get("message");

    const text = `Hello, I would like a quote.%0A%0AName: ${firstName} ${lastName}%0AEmail: ${email}%0APhone: ${phone}%0A%0AMessage:%0A${message}`;
    const phoneNumber = "YOUR_WHATSAPP_NUMBER_WITH_COUNTRY_CODE"; // e.g. 919876543210

    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#d6d9db] py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* heading */}
        <div className="text-center mb-10">
          <p className="text-sm text-slate-600 mb-2">
            Tell us about your project
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black">
            Get a Quote
          </h1>
        </div>

        {/* card */}
        <div className="bg-[#f8f8f4] rounded-3xl shadow-sm px-4 sm:px-8 lg:px-10 py-8 sm:py-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* first / last name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-2">
                  First name*
                </label>
                <input
                  name="firstName"
                  required
                  className="w-full rounded-md border border-slate-200 bg-[#f3f4f0] px-3 py-2 text-sm outline-none focus:border-slate-400"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-2">
                  Last name*
                </label>
                <input
                  name="lastName"
                  required
                  className="w-full rounded-md border border-slate-200 bg-[#f3f4f0] px-3 py-2 text-sm outline-none focus:border-slate-400"
                />
              </div>
            </div>

            {/* email */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-2">
                Work email*
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-md border border-slate-200 bg-[#f3f4f0] px-3 py-2 text-sm outline-none focus:border-slate-400"
              />
            </div>

            {/* phone */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-2">
                Phone number*
              </label>
              <input
                name="phone"
                required
                className="w-full rounded-md border border-slate-200 bg-[#f3f4f0] px-3 py-2 text-sm outline-none focus:border-slate-400"
              />
            </div>

            {/* message */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-2">
                Project details*
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full rounded-md border border-slate-200 bg-[#f3f4f0] px-3 py-2 text-sm outline-none focus:border-slate-400 resize-none"
              />
            </div>

            {/* button row */}
            <div className="flex justify-end pt-4">
              <Button
                type="submit"
                label="Chat on WhatsApp"
                variant="dark"
                icon={<WhatsAppIcon />}
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
