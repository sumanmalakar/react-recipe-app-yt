import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';


const PopularSlider = () => {
  const [data, setData] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      const api = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
      const data = await api.json();

      // console.log(data.meals);
      setData(data.meals)
    }

    fetchData();
  }, [])


  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  return (
    <>
      <div style={{
        height:'56vh',
        width:'90%',
        margin:'auto',
        // backgroundColor:'yellow'
      }} >

        <Slider {...settings}
      style={{
       margin:'1rem'
      }} 
        >
          {data.map((d) => {
            return (
              <Link to={`/${d.idMeal}`}  key={d.idMeal}>
              <div className='slider'>
                <img src={d.strMealThumb} alt="" style={{ width:'18rem', height:'17rem' }} />
              </div>
              </Link>
            )
          })}

        </Slider>
      </div>
    </>
  )
}

export default PopularSlider