import React, {Component} from 'react';
import Slider from "react-slick";
import ProgressReportCard from '../ProgressReportCard/ProgressReportCard';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ProgressSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <ProgressReportCard
          imgUrl="./image-body-type-1.jpg"
          dateTaken="July 15, 2020"
          timeTaken="3:00 PM (PST)"
        />
        <ProgressReportCard
          imgUrl="./image-body-type-2.jpg"
          dateTaken="July 14, 2020"
          timeTaken="3:02 PM (PST)"
        />
        <ProgressReportCard
          imgUrl="./image-body-type-3.jpg"
          dateTaken="July 13, 2020"
          timeTaken="3:03 PM (PST)"
        />
        <ProgressReportCard
          imgUrl="./image-body-type-4.jpg"
          dateTaken="July 12, 2020"
          timeTaken="3:04 PM (PST)"
        />
        <ProgressReportCard
          imgUrl="./image-body-type-5.jpg"
          dateTaken="July 11, 2020"
          timeTaken="3:05 PM (PST)"
        />
      </Slider>
    );
  }
}

export default ProgressSlider;