import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Achievements</span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <div className="testimonial">
        <p>● Solved more than <span>1200 DSA</span> problems on <span>LeetCode</span> and <span>GeeksForGeeks</span> combined.</p>
        <p>● Highest rating of <span>CodeChef</span> at <span>CodeChef</span>, which ranks among the top sites for competitive programmers.</p>
        <p>● Secured global rank of <span>81</span> among more than <span>21000</span> participants in Codechefʼs October Long Challenge 2021.</p>
        <p>● My rank is in the top <span>10</span> in solving <span>DSA</span> problems on GeeksForGeeks in my University.</p>
        <p>● Solved more than <span>2000 DSA</span> problems across coding platforms.</p>
        <p>● Secured <span>2nd rank</span> among more than <span>1000</span> students in UCODE 4 competitive programming competition organized by CodeChef UEMK
            Chapter, University of Engineering and Management Kolkata.
        </p>
      </div>
    </div>
  );
};

export default Testimonial;