class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header>
    <a href="neon-cinema/" class="logo">
    <img src="logo/neon cinema.png" width="200px" />
    </a>
    
    <!-- More button -->
    <div class="bx bx-menu" id="menu-icon"></div>
    
    <!-- Menu -->
    <ul class="navbar">
    <li ><a href="neon-cinema/#home">Home</a></li>
    <li><a href="neon-cinema/#movies">What's On</a></li>
    <li><a href="neon-cinema/#coming">Coming soon</a></li>
    <li><a href="#about">About</a></li>
    </ul>
    <a href="#" class="btn" id="signInBtn">Sign in</a>
    <div class="form-popup" id="loginForm">
    <form id="signInForm" class="form-container">
    <h2 style="color: purple;">Sign In</h2>
    <label for="username"><b>Username</b></label>
    <input type="text" id="username" placeholder="Enter Username" required>
    <label for="email"><b>E-mail</b></label>
    <input type="email" id="email" placeholder="Enter your E-mail" required>
    <label for="password"><b>Password</b></label>
    <input type="password" id="password" placeholder="Enter Password" required>
    
    <button  class="login-btn">Login</button>
                <button  class="close-btn" id="closeForm">Close</button>
            </form>
            </div>
            <span id="userIcon" class="user-icon"></span>
            
            </header>
            `;

    document.addEventListener("DOMContentLoaded", function () {
      const signInBtn = document.querySelector("#signInBtn");
      const loginForm = document.querySelector("#loginForm");
      const closeFormBtn = document.querySelector("#closeForm");
      const signInForm = document.querySelector("#signInForm");
      const userIcon = document.querySelector("#userIcon");

      // Check if username is stored in sessionStorage
      const savedUsername = sessionStorage.getItem("username");

      if (savedUsername) {
        signInBtn.style.display = "none";
        userIcon.textContent = savedUsername.charAt(0).toUpperCase();
        userIcon.style.display = "inline-block";
      }

      // Show login form when clicking sign in
      signInBtn.addEventListener("click", function (event) {
        event.preventDefault();
        loginForm.style.display = "block";
      });

      // Close login form
      closeFormBtn.addEventListener("click", function () {
        loginForm.style.display = "none";
      });

      // Handle form submission
      signInForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();

        if (username !== "") {
          sessionStorage.setItem("username", username); // Store username in sessionStorage
          signInBtn.style.display = "none";
          userIcon.textContent = username.charAt(0).toUpperCase();
          userIcon.style.display = "inline-block";
          loginForm.style.display = "none";
        }
      });
    });
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
            <li><a href="about.html">About Us</a></li>
            <li><a href="ourservices.html">Our Services</a></li>
            <li><a href="privacypolicy.html">Privacy Policy</a></li>
            <li><a href="termsandconditions.html">Terms and Conditions</a></li>
            </ul>
            </div>
            <div class="footer-col">
            <h4>Exploring Our Site</h4>
            <ul>
            <li><a href="neon-cinema/#movies">What's On</a></li>
            <li><a href="neon-cinema/#coming">Coming Soon</a></li>
            <li><a href="FoodDrinks.html">Food &amp; Drinks</a></li>
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

customElements.define("special-header", SpecialHeader);
customElements.define("special-footer", SpecialFooter);

//header shadow
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});
