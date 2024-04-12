import React from 'react'
import './Slide.scss'
import "react-slideshow-image/dist/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase,faGraduationCap,faGamepad } from '@fortawesome/free-solid-svg-icons'
import { faSteam,faWindows,faGoogleDrive } from '@fortawesome/free-brands-svg-icons'
import Slideshow from '../Slideshow/Slideshow';

const Slide = () => {
  return (
    <div className="undernav">
        <div className='slide'>
        <div className="left">
            <div className="giaitri">
                <div className="icon">
                    <FontAwesomeIcon icon={faGamepad} />
                </div>                               
                <p>Giải trí</p>
            </div>
            <div className="lamviec">
                <div className="icon">
                    <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <p>Làm việc</p>
            </div>
            <div className="hoctap">
                <div className="icon">
                    <FontAwesomeIcon icon={faGraduationCap} />
                </div>
                <p>Học tập</p>
            </div>
            <div className="steam">
                <div className="icon">
                    <FontAwesomeIcon icon={faSteam} />
                </div>
                <p>Steam</p>
            </div>
            <div className="window">
                <div className="icon">
                    <FontAwesomeIcon icon={faWindows} />
                </div>
                <p>Window, Office</p>
            </div>
            <div className="google">
                <div className="icon">
                    <FontAwesomeIcon icon={faGoogleDrive} />
                </div>
                <p>Google</p>
            </div>
        </div>
        <div className="center">
            <Slideshow/>
        </div>
        <div className="right">
            <img src="https://cdn.divineshop.vn/image/catalog/Banner/Microsoft%20Office%20(3)-13556.png?hash=1707128807" alt="" />
            <img src="https://cdn.divineshop.vn/image/catalog/Banner/Steam%20(3)-52065.png?hash=1707128754" alt="" />
        </div>
        </div>
        <div className="slide2">
            <img src="https://cdn.divineshop.vn/image/catalog/Banner/VPN%20(3)-84756.png?hash=1707128734" alt="" />
            <img src="https://cdn.divineshop.vn/image/catalog/Banner/Discord-55203.png?hash=1707128822" alt="" />
            <img src="https://cdn.divineshop.vn/image/catalog/Banner/gmail%20(3)-89591.png?hash=1707128794" alt="" />
            <img src="https://cdn.divineshop.vn/image/catalog/Banner/Spotify%20(3)-18327.png?hash=1707128744" alt="" />
        </div>
    </div>
  )
}

export default Slide