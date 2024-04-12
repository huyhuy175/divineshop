import React, { useState,useEffect } from 'react'
import './Slideshow.scss'
import img1 from '../Assets/slide/slide1.png'
import img2 from '../Assets/slide/slide2.png'
import img3 from '../Assets/slide/slide3.png'
import img4 from '../Assets/slide/slide4.png'
import img5 from '../Assets/slide/slide5.png'
import img6 from '../Assets/slide/slide6.png'


const Slideshow = () => {

    useEffect(()=>{
        const intervalId = setInterval(nextSlide, 3000);
        return () => clearInterval(intervalId);
    })

    const images = [img1,img2,img3,img4,img5,img6]
    const [imgIndex,setImgIndex] = useState(0)
    const nextSlide = ()=>{
        setImgIndex((prevIndex)=>(prevIndex === images.length-1?0:prevIndex+1))
    }
    const preSlide = ()=>{
        setImgIndex((prevIndex)=>(prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }

  return (
    <div className='slideshow'>

        {images.map((image,index)=>(
            <img
            key={index}
            src={image}
            alt=""
            className={`myslides fade ${index === imgIndex?'active':''}`} 
            />
        ))}
        <div className='hoverprev' onClick={preSlide}>
        </div>
        <div className='prev' onClick={preSlide}><img src='https://divineshop.vn/static/210e9ef2c6a16eb8a6d59f1568a29aea.svg' alt="" /></div>
        <div className="hovernext" onClick={nextSlide}>
        </div>
        <div className='next' onClick={nextSlide}><img src='https://divineshop.vn/static/b9dedff6f5696bed08d031533a971f59.svg' alt="" /></div>
        <div className="dots">
            {images.map((image, index) => (
                <span
                key={index}
                className={`dot ${index === imgIndex ? 'active' : ''}`}
                onClick={() => setImgIndex(index)}
            />
            ))}
        </div>
    </div>
  )
}

export default Slideshow