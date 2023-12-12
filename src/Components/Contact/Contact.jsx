import { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import facebook from '../../assets/icons/facebook.png'
import linkedin from '../../assets/icons/linkedin.png'
import twitter from '../../assets/icons/twitter.png'
import github from '../../assets/icons/github-sign.png'
import { IoIosSend } from "react-icons/io";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  console.log(formData)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const templateParams = {
        from_email: formData.email,
        to_email: 'rashedulhoqueceo@gmail.com',  
        subject: formData.subject,
        message_html: formData.message,

      };

      await emailjs.send(
        'service_a5mfykl', 
        'template_qr481in',
        templateParams,
        'yILT2cnIxXB6Xxb0G' 
      );

      console.log('Email sent successfully');
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Message send successfully",
        showConfirmButton: false,
        timer: 1500
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };


  return (
    <section className="container mx-auto px-8 pb-24" id='contact'>
      <h2 className="text-3xl font-bold text-center font-oswald mb-1">Contact Me</h2>
            <h6 className='text-center mb-8 font-semibold font-roboto'>---Let’s Talk---</h6>
      <div className="flex flex-col lg:flex-row items-center justify-center p-8">
        <div className="lg:w-1/2">
          <p className='text-xl font-roboto'><span className='font-bold'>Address:</span> Comilla, Bangladesh</p>
          <p className='text-xl font-roboto my-2'><span className='font-bold'>Email:</span> rashedulhoqueceo@gmail.com</p>
          <p className='text-xl font-roboto'><span className='font-bold'>Phone:</span> +8801775627458</p>
          <div className="mt-2">
            <div className="contact-info rounded-md">
              <h3 className="text-xl font-bold font-roboto mb-4">Social Media:</h3>
              <div className="flex space-x-6">
                <a
                  href="https://www.facebook.com/RashedulHoque23/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebook} alt="Facebook" className="w-10 h-10" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rashedul-hoque-rashed/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="LinkedIn" className="w-10 h-10" />
                </a>
                <a
                  href="https://twitter.com/Rashedul2Hoque"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitter} alt="Twitter" className="w-10 h-10" />
                </a>
                <a
                  href="https://github.com/Rashedul-Hoque-Rashed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="Twitter" className="w-10 h-10" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="name" className='font-oswald p-2'>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder='Your name'
              className="mb-2 p-2 border rounded"
              required
            />

            <label htmlFor="email" className='font-oswald p-2'>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='Your email'
              className="mb-2 p-2 border rounded"
              required
            />

            <label htmlFor="subject" className='font-oswald p-2'>Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder='Type subject'
              className="mb-2 p-2 border rounded"
              required
            />

            <label htmlFor="message" className='font-oswald p-2'>Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder='Type your message'
              className="mb-2 p-2 border rounded"
              required
            />

            <button type="submit" className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-2 rounded mt-2 font-roboto font-semibold flex items-center gap-4 justify-center hover:from-teal-500 hover:to-blue-500">
              Send Message
              <IoIosSend className='w-6 h-6' />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
