import "./footer.css";
import React from "react";
function Footer() {
  return (
    <footer className="cols">
      <div className="rows">
        <span>&copy; 2020 DeePLUG gadgets.</span>
        <a href="https://hitmee.herokuapp.com">Hitmee</a>
        <a href="https://oneunivers.herokuapp.com">Univers</a>
        <a href="https://teambod.herokuapp.com">Teambod</a>
        {/* <a href="#status">Status</a> */}
        <a href="https://github.com">Contact Github</a>
        {/* <a href="#pricing">Pricing</a>
        <a href="#api">API</a>
        <a href="#training">Training</a>
        <a href="#blog">Blog</a>
        <a href="#about">About</a> */}
      </div>
      <div className="rows" style={{ marginTop: "1.5rem" }}>
        <span>Developed By</span>
        <a href="/">Temiloluwa Ogunbanjo</a>
      </div>
    </footer>
  );
}

export default Footer;
