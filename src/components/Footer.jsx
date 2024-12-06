import "../css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";


function Footer() {
  return (
    <footer>
      <div className="container footer_container">
        <div className="footer_1">
          <a href="index.html" className="footer_logo">
            <h4>AZİİ ACADEMY</h4>
          </a>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quam eveniet aut?</p>
        </div>

        <div className="footer_2">
          <h4>Bağlantılar</h4>
          <ul className="permalinks">
            <li><a href="index.html">Akademiya</a></li>
            <li><a href="about.html">Haqqımızda</a></li>
            <li><a href="courses.html">Tədris sahələri</a></li>
            <li><a href="contact.html">Bizimlə əlaqə</a></li>
          </ul>
        </div>

        <div className="footer_3">
          <h4>Məxfilik</h4>
          <ul className="privacy">
            <li><a href="#">Gizlilik Siyasəti</a></li>
            <li><a href="#">Şərtlər və Qaydalar</a></li>
          </ul>
        </div>

        <div className="footer_4">
          <h4>Bizimlə əlaqə</h4>
          <div>
            <p>+994 378 37 38</p>
            <p>aziiacademy@gmail.com</p>
          </div>

          <ul className="footer_socials">
            <li>
              <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            </li>
            <li>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
            <li>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            </li>
            <li>
              <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            </li>
          </ul>
        </div>

        <div className="footer_copyright">
          <small>Copyright 2024</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
