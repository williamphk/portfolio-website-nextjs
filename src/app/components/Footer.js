import "./Footer.css";
// import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer>
      <a href="#about" title="Link to About section">
        {/* <img src={logo} alt="Company Logo" /> */}
      </a>
      <div>
        <div>Projects</div>
        <a
          href="https://williamphk.github.io/Odin-Book-frontend/"
          target="_blank"
        >
          Odin-book
        </a>
        <a
          href="https://github.com/williamphk/Passion_Project/"
          target="_blank"
        >
          Hikouki Anime
        </a>
        <a href="https://williamphk.github.io/odin_Battleship/" target="_blank">
          Battleship
        </a>
        <a target="_blank" href="https://github.com/williamphk/DiscountDish/">
          Ingredient Mixer
        </a>
        <a
          target="_blank"
          href="https://github.com/williamphk/portfolio-laravel-API/"
        >
          Easy Portofolio
        </a>
        <a
          target="_blank"
          href="https://github.com/williamphk/portfolio-website/"
        >
          Portfolio Website
        </a>
      </div>
      <div>
        <div>Contact</div>
        <a href="https://www.linkedin.com/in/williamphk/">LinkedIn</a>
        <a href="https://github.com/williamphk">GitHub</a>
        <a href="mailto:willphk@outlook.com">Email</a>
      </div>
      <div>
        <div>Attribution</div>
        <a href="https://www.freepik.com/free-vector/network-mesh-wire-digital-technology-background_10136775.htm#query=website%20background&position=0&from_view=keyword&track=ais">
          Image by starline
        </a>
        <a href="https://www.freepik.com/free-vector/blurred-background-with-light-colors_959252.htm#query=grey%20blur%20background&position=17&from_view=search&track=ais">
          Image by rocketpixel
        </a>
      </div>
    </footer>
  );
}
