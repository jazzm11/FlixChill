import { Link } from "react-router-dom";
import "/src/views/footer.css";

function Footer() {
  return (
    <footer>
      <div class="footer-container">
        <div class="footer-section">
          <h3>About Us</h3>
          <p>
            We provide the best streaming experience with a vast collection of
            movies and shows.
          </p>
        </div>
        <div class="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/moviepage">Movies</Link>
            </li>
            <li>
              <Link to="/seriespage">Tv Shows</Link>
            </li>
            <li>
              <a href="#">Contact jazzunciano1@gmail.com</a>
            </li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Follow Us</h3>
          <div class="social-icons">
            <a href="#">
              <img src="/facebook-icon.png" alt="Facebook" />
            </a>
            <a href="#">
              <img src="/twitter-icon.png" alt="Twitter" />
            </a>
            <a href="#">
              <img src="/instagram-icon.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <p class="footer-bottom">&copy; 2025 FlixChill | All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
