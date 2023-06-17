import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Vconnect from "../../img/VConnect.png";
import Ecommerce from "../../img/eCommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import whiteBoard from "../../img/whiteBoard.png";
import iMovie from "../../img/iMovie.jpg.webp";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent</span>
      <span>Projects</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://github.com/SonuSingh791/Social-Media-App" target="_blank" rel="noopener noreferrer">
            <h3>VConnect</h3>
            <img src={Vconnect} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://github.com/SonuSingh791/eCommerceApp" target="_blank" rel="noopener noreferrer">
            <h3>iMart</h3>
            <img src={Ecommerce} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="http://imovie-react-app.netlify.app" target="_blank" rel="noopener noreferrer">
            <h3>iMovie</h3>
            <img src={iMovie} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://github.com/SonuSingh791/Open-Board" target="_blank" rel="noopener noreferrer">
            <h3>White Board</h3>
            <img src={whiteBoard} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;