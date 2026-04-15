import React, { useState } from 'react'

const Formfill = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('contactForm', JSON.stringify(formData))
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div id="form" className="form min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl sm:max-w-xl md:max-w-3xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl text-center text-blue-400 mb-4 sm:mb-6">
          Contact Me ✨
        </h2>

        {submitted && (
          <div role="status" aria-live="polite" className="mb-4 text-green-400 text-center">
            Message saved successfully ✅
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
          <label className="sr-only" htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            aria-required="true"
            className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition w-full"
          />

          <label className="sr-only" htmlFor="email">Your Email</label>
          <input
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            aria-required="true"
            className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition w-full"
          />

          <label className="sr-only" htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
            aria-required="true"
            className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none w-full"
          ></textarea>

          <button
            type="submit"
            className="py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold tracking-wide transition transform hover:scale-105 w-full sm:w-auto"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Formfill
