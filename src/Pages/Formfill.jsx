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
    <div className=" form min-h-screen flex items-center justify-center  px-4">
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl text-center text-blue-400 mb-6">
          Contact Me ✨
        </h2>

        {submitted && (
          <div className="mb-4 text-green-400 text-center">
            Message saved successfully ✅
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
            className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
          ></textarea>

          <button
            type="submit"
            className="py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold tracking-wide transition transform hover:scale-105"
          >
            Send Message 
          </button>
        </form>
      </div>
    </div>
  )
}

export default Formfill
