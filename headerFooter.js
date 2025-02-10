class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header>
        <a href="#" class="logo">
            <img src="logo/neon cinema.png" width="200px" />
        </a>

        <!-- More button -->
        <div class="bx bx-menu" id="menu-icon"></div>

        <!-- Menu -->
        <ul class="navbar">
            <li ><a href="#home" >Home</a></li>
            <li><a href="#movies">What's On</a></li>
            <li><a href="#coming">Coming soon</a></li>
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
        <style>
.user-icon {
    font-size: 30px;
    font-weight: bold;
    color: white;
    background: linear-gradient(to right, #e9ebf3, #e478de);
    width: 50px;
    height: 50px;
    text-align: center;
    border-radius: 50%;
    display: none; 
}
 
#loginForm {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.9);
  padding: 20px 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  text-align: center;
  display: none;
}


#loginForm input {
  width: 100%;
  padding: 10px;
  margin: 10px 0px;
  border: 1px solid #ccc;
  border-radius: 500px;
  background-color: #f9f9f9;
  color: #333;
}


.login-btn {
  background-color: purple;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-right: 10px;
}

.login-btn:hover {
  background-color: rgb(42, 192, 180);
  transform: scale(1.05);
}


.close-btn {
  background-color:purple;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.close-btn:hover {
  background-color: rgb(42, 192, 180);
  transform: scale(1.05);
}
</style>
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

customElements.define("special-header", SpecialHeader);
customElements.define("special-footer", SpecialFooter);

