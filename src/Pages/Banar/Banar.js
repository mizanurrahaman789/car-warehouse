import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banar24 from '../../image/banar/banar-24.jpg'
import banar25 from '../../image/banar/banar-25.jpg'
import banar2 from '../../image/banar/banar-2.jpeg'



const Banar = () => {
      const [index, setIndex] = useState(0);

      const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
      };
      return (
            <Carousel activeIndex={index} onSelect={handleSelect}>
                  <Carousel.Item>
                        <img
                              className="d-block w-100"
                              src={banar24}
                              alt=""
                        />
                  </Carousel.Item>
                  <Carousel.Item>
                        <img

                              className="d-block w-100 "
                              src={banar25}
                              alt=""
                        />
                  </Carousel.Item>
                  <Carousel.Item>
                        <img
                              className="d-block w-100 "
                              src={banar2}
                              alt=""
                        />
                  </Carousel.Item>
            </Carousel>
      );
};

export default Banar;