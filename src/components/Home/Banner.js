import * as React from 'react';
import './Home.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


function Banner() {


  return (
    <>
      <Carousel
        autoPlay={true}
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        className='carousel'
        infiniteLoop={true}
        showIndicators={false}
      >
        <div>
          <img className='bannerImg'  src="https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50" />
        </div>
        <div>
          <img className='bannerImg' src="https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50" />

        </div>
        <div>
          <img className='bannerImg' src="https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50" />
        </div>
        <div>
          <img className='bannerImg' src="https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50" />
        </div>
      </Carousel>
    </>
  );
}


export default Banner;