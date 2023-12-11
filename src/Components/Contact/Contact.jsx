
const Contact = () => {
  return (
    <div className="container mx-auto px-8 pb-24 ">
      <h2 className="text-3xl font-semibold mb-4">Contact Information</h2>

      <div className="contact-info bg-white p-6 rounded-md shadow-md mb-4">
        <h3 className="text-xl font-semibold mb-2">Address</h3>
        <p>Comilla, Bangladesh</p>
      </div>

      <div className="contact-info bg-white p-6 rounded-md shadow-md mb-4">
        <h3 className="text-xl font-semibold mb-2">Phone Number</h3>
        <p>+8801775627458</p>
      </div>

      <div className="contact-info bg-white p-6 rounded-md shadow-md mb-4">
        <h3 className="text-xl font-semibold mb-2">Email</h3>
        <p>rashedulhoqueceo@gmail.com</p>
      </div>

      <div className="contact-info bg-white p-6 rounded-md shadow-md">
        <h3 className="text-xl font-semibold mb-2">Social Media</h3>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
            <img src="facebook-icon.png" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <img src="linkedin-icon.png" alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <img src="twitter-icon.png" alt="Twitter" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact
