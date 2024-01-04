import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../../../images/logo.png"

const RecentRegisters = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((data) => setCardData(data))
      .then((err) => console.log(err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {cardData.map((item, index) => (
        <div key={index} style={{justifyContent:"center"}}>
          {/* Display your card content here */}
          <div
            style={{
              border: "1px solid #ccc",
              padding: "0 20px",
              margin: "10px",
              width: "400px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent:"space-evenly",
              margin: "0 70px 30px 50px"
            }}
          >
            <img src={logo} style={{backgroundColor:"grey", width:"100%"}}/>
            
            <h3>RegNo:- </h3>
            <h3>id:-{item.id}</h3>
            <p>name:-{item.name}</p>
            <p>username:-{item.username}</p>
            <p>email:-{item.email}</p>
            <p>address:-{item.address.city}</p>
            <p>phone:-{item.phone}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default RecentRegisters;
