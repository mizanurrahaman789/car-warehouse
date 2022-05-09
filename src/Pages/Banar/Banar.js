import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banar1 from '../../image/banar/banar-1.jpg'
import banar2 from '../../image/banar/banar-2.jpg'
import banar3 from '../../image/banar/banar-3.jpeg'

const Banar = () => {
      const [index, setIndex] = useState(0);

      const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
      };
      return (
            <Carousel activeIndex={index} onSelect={handleSelect}>
                  <Carousel.Item>
                        <img
                              className="d-block w-100 "
                              src={banar1}
                              alt="First slide"
                        />
                        <Carousel.Caption>
                              <h3>First slide label</h3>
                              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                        <img

                              className="d-block w-100 "
                              src={banar2}
                              alt="Second slide"
                        />

                        <Carousel.Caption>
                              <h3>Second slide label</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                        <img
                              className="d-block w-100 "
                              src={banar3}
                              alt="Third slide"
                        />

                        <Carousel.Caption>
                              <h3>Car Warehouse</h3>
                              <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                              </p>
                        </Carousel.Caption>
                  </Carousel.Item>
            </Carousel>
      );
};

export default Banar;