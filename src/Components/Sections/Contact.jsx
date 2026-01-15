import React, { useState } from 'react'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id='contact' className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4'>
        
        {/* Top Section - Title and Contact Info */}
        <div className='flex flex-col lg:flex-row gap-12 mb-16'>
          
          {/* Left - Title */}
          <div className='flex-1'>
            <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
              We're Ready to Work with You. Get in Touch
            </h1>
          </div>

          {/* Right - Contact Info */}
          <div className='flex-1 flex flex-col md:flex-row gap-12'>
            
            {/* Main Office */}
            <div className='flex-1'>
              <h3 className='text-teal-600 font-semibold pb-2 border-b-2 border-teal-600 w-max mb-4'>
                Main Office
              </h3>
              <div className='space-y-3 text-gray-700'>
                <p className='flex items-start gap-2'>
                  <MapPin size={18} className='mt-1 flex-shrink-0' />
                  <span>40 Park Ave, Brooklyn, New York</span>
                </p>
                <p className='flex items-center gap-2'>
                  <Phone size={18} />
                  <span>1-800-111-2222</span>
                </p>
                <p className='flex items-center gap-2'>
                  <Mail size={18} />
                  <span>contact@example.com</span>
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className='flex-1'>
              <h3 className='text-teal-600 font-semibold pb-2 border-b-2 border-teal-600 w-max mb-4'>
                Social
              </h3>
              <div className='space-y-3'>
                <a href='#' className='text-teal-600 hover:text-teal-700 flex items-center gap-2'>
                  <Facebook size={18} />
                  <span>Facebook</span>
                </a>
                <a href='#' className='text-teal-600 hover:text-teal-700 flex items-center gap-2'>
                  <Twitter size={18} />
                  <span>Twitter</span>
                </a>
                <a href='#' className='text-teal-600 hover:text-teal-700 flex items-center gap-2'>
                  <Instagram size={18} />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Section - Map and Form */}
        <div className='flex flex-col lg:flex-row gap-12'>
          
          {/* Left - Map */}
          <div className='flex-1'>
            <div className='bg-gray-200 rounded-lg overflow-hidden h-96 flex items-center justify-center'>
              <iframe 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy" 
                allowFullScreen="" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-73.9857!3d40.6501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316ec6d8e9%3A0x1234567890!2s40%20Park%20Ave%2C%20Brooklyn%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890"
              ></iframe>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className='flex-1'>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <input 
                  type='text'
                  name='name'
                  placeholder='Name'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600'
                  required
                />
              </div>

              <div>
                <input 
                  type='email'
                  name='email'
                  placeholder='Email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600'
                  required
                />
              </div>

              <div>
                <input 
                  type='tel'
                  name='phone'
                  placeholder='Phone'
                  value={formData.phone}
                  onChange={handleChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600'
                />
              </div>

              <div>
                <textarea 
                  name='message'
                  placeholder='Message'
                  value={formData.message}
                  onChange={handleChange}
                  rows='5'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600 resize-none'
                  required
                ></textarea>
              </div>

              <button 
                type='submit'
                className='px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition'
              >
                Send message
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact