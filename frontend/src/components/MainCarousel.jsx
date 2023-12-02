import React from "react";
import Carousel from "react-bootstrap/Carousel";
import AmbonImage from "../images/Ambon.jpg";

function MainCarousel() {
  return (
    <Carousel style={{ maxHeight: "80vh" }} fade>
      <Carousel.Item>
        <img
          style={{ width: "100%", height: "80vh", objectFit: "cover" }}
          src={AmbonImage}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "100%", height: "80vh", objectFit: "cover" }}
          src={AmbonImage}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "100%", height: "80vh", objectFit: "cover" }}
          src={AmbonImage}
        />{" "}
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;
