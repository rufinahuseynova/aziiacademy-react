import "../css/contactus.css";
import  { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Mesajınız uğurla göndərildi!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact">
      <div className="container contact_container">
        <aside className="contact_aside">
          <div className="aside_image">
            <img
              src="https://d15yx0mnc9teae.cloudfront.net/sites/default/files/2021-10/contact-us-showcase.png"
              alt="Bizimlə əlaqə"
            />
          </div>
          <h2>Bizimlə əlaqə</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet fuga
            quae accusantium tenetur sint omnis!
          </p>
          <ul className="contact_details">
            <li>
              <i className="fa-solid fa-phone"></i>
              <h5>+994 378 37 38</h5>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <h5>aziiacademy@gmail.com</h5>
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <h5>Bakı, 28 May</h5>
            </li>
          </ul>
          <ul className="contact_socials">
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </aside>

        <form className="contact_form" onSubmit={handleSubmit}>
          <div className="form_name">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Adınız"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Soyadınız"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Elektron poçt ünvanınız"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="7"
            placeholder="Mesajınızı yazın"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Göndər
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
