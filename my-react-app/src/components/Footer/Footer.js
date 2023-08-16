import React from "react";
import "../Footer/Footer.css";
import logo from "../../assets/images/logo.png"
function Footer() {
  return (
    <div>
      <footer>
        <img src={logo} alt="Ariel's beauty logo" />
        <p>Beverly Hills ca,00321 | 244-321-555</p>
      </footer>
    </div>
  );
}
export default Footer