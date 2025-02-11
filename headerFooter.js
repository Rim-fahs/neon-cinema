class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header>
        <a href="/" class="logo">
            <img src="logo/neon cinema.png" width="200px" />
        </a>

        <!-- More button -->
        <div class="bx bx-menu" id="menu-icon"></div>

        <!-- Menu -->
        <ul class="navbar">
            <li ><a href="/#home">Home</a></li>
            <li><a href="/#movies">What's On</a></li>
            <li><a href="/#coming">Coming soon</a></li>
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

    const signInBtn = this.querySelector("#signInBtn");
    const loginForm = this.querySelector("#loginForm");
    const closeFormBtn = this.querySelector("#closeForm");
    const signInForm = this.querySelector("#signInForm");
    const userIcon = this.querySelector("#userIcon");

    
    signInBtn.addEventListener("click", function (event) {
      event.preventDefault(); 
      loginForm.style.display = "block";
    });

   
    closeFormBtn.addEventListener("click", function () {
      loginForm.style.display = "none";
    });
     signInForm.addEventListener("submit", function (event) {
      event.preventDefault(); 

      
      const username = document.getElementById("username").value;

      if (username.trim() !== "") {
      
        signInBtn.style.display = "none"; 
        userIcon.textContent = username.charAt(0).toUpperCase(); 
        userIcon.style.display = "inline-block";
        loginForm.style.display = "none"; 
      }
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
    <li><a href="/#movies">What's On</a></li>
    <li><a href="/#coming">Coming Soon</a></li>
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

customElements.define("special-footer", SpecialFooter);
customElements.define("special-header", SpecialHeader);

//header shadow
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});
