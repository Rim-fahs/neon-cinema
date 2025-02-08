
class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header>
    <a href="#" class="logo">
    <img src="logo/neon cinema.png" width="200px" />
    </a>
    
    <!--more botton-->
    <div class="bx bx-menu" id="menu-icon"></div>
    
    <!--menu-->
    <ul class="navbar">
    <li ><a href="#home" >Home</a></li>
    <li><a href="#movies">What's On</a></li>
    <li><a href="#coming">Coming soon</a></li>
    <li><a href="#about">About</a></li>
    </ul>
    <a href="#" class="btn">Sign in</a>
    </header>
    `;
  }
}


class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="footer" id="about">
    <div class="about-container">
    <div class="footer-row">
    <div class="footer-col">
    <h4>About</h4>
    <ul>
    <li><a href="#">About Us</a></li>
    <li><a href="#">Our Services</a></li>
    <li><a href="#">Privacy Policy</a></li>
    <li><a href="#">Terms and Conditions</a></li>
    </ul>
    </div>
    <div class="footer-col">
    <h4>Exploring Our Site</h4>
    <ul>
    <li><a href="#movies">What's On</a></li>
    <li><a href="#coming">Coming Soon</a></li>
    <li><a href="#">Food &amp; Drinks</a></li>
    </ul>
    </div>
    <div class="footer-col">
    <h4>STAY IN TOUCH</h4>
    <div class="social-links">
    <a href="#"><i class="fab fa-facebook-f"></i></a>
    <a href="#"><i class="fab fa-instagram"></i></a>
    <a href="#"><i class="fab fa-twitter"></i></a>
    </div>
    </div>
    </div>
    <br />
    <br />
    <div class="copyright">
    <p>&copy; 2025 Neon Cinema All rights reserved.</p>
    </div>
    </div>
    </footer>
    `;
  }
}

customElements.define("special-footer", SpecialFooter);
customElements.define("special-header", SpecialHeader);