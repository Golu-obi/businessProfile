import React, { useState } from 'react';
import Footer from './Footer'; 
import Navbar from './Navbar';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    email: '',
    phone: '',
    country: '',
    productInterest: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('http://localhost:4001/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);
      alert('Form submitted successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        jobTitle: '',
        email: '',
        phone: '',
        country: '',
        productInterest: ''
      });
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while submitting the form.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Navbar />
      <div className="max-w-screen-lg mx-auto p-6 bg-white rounded-md shadow-md mt-16 dark:bg-slate-900 dark:text-white">
        <h1 className="text-3xl font-bold mb-6 text-center">How would you like to contact us?</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Request a Call Form */}
          <div className="p-4 border rounded-md shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Request a call</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex space-x-4">
                <div className="w-full">
                  <label htmlFor="firstName" className="sr-only">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="lastName" className="sr-only">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="jobTitle" className="sr-only">Job Title</label>
                <input
                  id="jobTitle"
                  type="text"
                  name="jobTitle"
                  placeholder="Job Title"
                  className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                  value={formData.jobTitle}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone</label>
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="country" className="sr-only">Country/Region</label>
                <select
                  id="country"
                  name="country"
                  className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="">Country/Region</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="Russia">Russia</option>
                  <option value="UK">UK</option>
                  <option value="China">China</option>
                  <option value="Dubai">Dubai</option>
                  <option value="France">France</option>
                  <option value="Germany">Germany</option>
                </select>
              </div>
              <div>
                <label htmlFor="productInterest" className="sr-only">Product Interest</label>
                <input
                  id="productInterest"
                  type="text"
                  name="productInterest"
                  placeholder="Product Interest"
                  className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                  value={formData.productInterest}
                  onChange={handleChange}
                />
              </div>
              <button 
                type="submit" 
                className={`w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Contact Me'}
              </button>
              {error && <p className="text-red-500">{error}</p>}
            </form>
          </div>

          {/* Additional Contact Options */}
          <div className="space-y-6">
            <div className="p-4 border rounded-md shadow-sm">
              <h2 className="text-2xl font-semibold mb-2">Give us a call.</h2>
              <p>+91-9810093106</p>
              <p><a href="https://www.google.co.in/maps/place/OM+BABA+INDUSTRIES/@28.1847904,76.8655218,16.75z/data=!4m6!3m5!1s0x390d3761a1e11e6f:0x838c2528e715a9c2!8m2!3d28.1847866!4d76.8680689!16s%2Fg%2F11ry5j00mt?entry=ttu" target='_blank' rel="noopener noreferrer" className="text-blue-500">Find Main Branch</a></p>
              <p><a href="#" className="text-blue-500">Billing and tech support</a></p>
            </div>
            
            <div className="p-4 border rounded-md shadow-sm">
              <h2 className="text-2xl font-semibold mb-2">Chat with us.</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Let's Chat</button>
            </div>
            
            <div className="p-4 border rounded-md shadow-sm">
              <h2 className="text-2xl font-semibold mb-2">Leave us some feedback.</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Send Feedback</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
