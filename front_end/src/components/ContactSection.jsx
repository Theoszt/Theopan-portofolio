import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { useState } from "react";
function ContactSection(){
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      const res = await fetch("https://theopan-portofolio.vercel.app/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      alert(data.message);
    };

    return(
        <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600">
              Let's discuss opportunities and collaborations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <FaEnvelope className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <p className="text-gray-600">
                        gerardnainggolan906@gemail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <FaPhone className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Phone</p>
                      <p className="text-gray-600">+62 857 4683 1096</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <FaMapMarkerAlt className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Location</p>
                      <p className="text-gray-600">Karawang, Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/theopan-gerard" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer"><FaLinkedin className="text-white w-5 h-5" /></a>
                  <a href="https://github.com/Theoszt" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-900 transition-colors cursor-pointer"><FaGithub className="text-white w-5 h-5" /></a>
                  <a href="https://twitter.com/TheopanXi" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer"><FaTwitter className="text-white w-5 h-5" /></a>
                  <a href="https://instagram.com/the_opan_n" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer"><FaInstagram className="text-white w-5 h-5" /></a>
                </div>

              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Send Message
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input type="text" id="name" value={formData.name} onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 text-sm" />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input type="email" id="email" value={formData.email} onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 text-sm" />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <input type="text" id="subject" value={formData.subject} onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 text-sm" />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea id="message" rows={5} value={formData.message} onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 text-sm resize-none"></textarea>
                    </div>

                    <button type="submit"
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded font-medium hover:bg-blue-700 transition-colors">
                      <i className="fas fa-paper-plane mr-2"></i>Send Message
                    </button>
                  </form>
            </div>
          </div>
        </div>
      </section>
    )
}
export default ContactSection;