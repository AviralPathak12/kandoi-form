import React from 'react'
import { Carousel } from 'react-bootstrap';
// import "./carousel.css"
const SliderCarousel = () => {
  return (


   <div>
 <Carousel>

 <Carousel.Item>
      <img
       height={300}
         className="d-block w-100"
        src={require("../Media/Adv/ksp-ad-18.jpg")}
        alt="Third slide"
      />
    
    </Carousel.Item>

   




    <Carousel.Item interval={1000} >
      <img
      height={300}
         className="d-block w-100"
        // src={'../Media/c1.png'}
         src={require("../Media/Adv/10.png")}
        alt="First slide"
        
      />
     
    </Carousel.Item>
   
    <Carousel.Item interval={500}>
      <img
       height={300}
         className="d-block w-100"
        src={require("../Media/Adv/15.png")}
        alt="Second slide"
      />
      
    </Carousel.Item>

    <Carousel.Item interval={500}>
      <img
       height={300}
         className="d-block w-100"
        src={require("../Media/Adv/11.png")}
        alt="Second slide"
      />
      
    </Carousel.Item>

  


    <Carousel.Item>
      <img
       height={300}
         className="d-block w-100"
        src={require("../Media/Adv/14.png")}
        alt="Third slide"
      />
    
    </Carousel.Item>


   
    <Carousel.Item>
      <img
       height={300}
         className="d-block w-100"
        src={require("../Media/Adv/ksp-ad-5.png")}
        alt="Third slide"
      />
    
    </Carousel.Item>

    <Carousel.Item>
      <img
       height={300}
         className="d-block w-100"
        src={require("../Media/Adv/13.png")}
        alt="Third slide"
      />
    
    </Carousel.Item>

    <Carousel.Item>
      <img
       height={300}
         className="d-block w-100"
        src={require("../Media/Adv/12.png")}
        alt="Third slide"
      />
    
    </Carousel.Item>

 


  </Carousel>



   </div>
  )
}

export default SliderCarousel