import React from 'react'
import logoweb from '../Assets/logoweb.png'
import {UnorderedListOutlined,PhoneFilled,FireFilled,PercentageOutlined,CreditCardFilled,SearchOutlined,UserOutlined,ShoppingCartOutlined,EyeFilled} from "@ant-design/icons"
import './Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase,faGraduationCap,faGamepad } from '@fortawesome/free-solid-svg-icons'
import { faSteam,faWindows,faGoogleDrive } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
          <div className="line1">
              <div className="logohead">
                  <img src={logoweb} alt="" />
                  <h1>Divine Shop</h1>
              </div>
              <div className="searchbar">
                <input type="text" placeholder='Tìm kiếm sản phẩm'/>
                <div className="search-icon">
                  <SearchOutlined />
                </div>
              </div>
              <div className="user-navbar">
                <div className="user-icon">
                  <UserOutlined />
                </div>
                <p className='login'>Đăng nhập</p>
                <p className="login">/</p>
                <p className='signup'>Đăng ký</p>
              </div>
              <div className="cart">
                <div className="cart-icon">
                  <ShoppingCartOutlined />
                </div>
                <p>Giỏ hàng</p>
                <div className="total-cart"></div>
              </div>
          </div>
          <div className="line2">
            <div className="vuaxem">
              <div className="icon">
                <EyeFilled />
              </div>
              <p>Sản phẩm bạn vừa xem</p>
            </div>
            <div className="muanhieu">
              <div className="icon">
                <FireFilled />
              </div>
              <p>Sản phẩm mua nhiều</p>
            </div>
            <div className="khuyenmai">
              <div className="icon">
                <PercentageOutlined />
              </div>
              <p>Sản phẩm khuyến mại</p>
            </div>
            <div className="lienhe">
              <div className="icon">
                <PhoneFilled />
              </div>
              <p>Liên hệ</p>
            </div>
            <div className="thanhtoan">
              <div className="icon">
                <CreditCardFilled />
              </div>
              <p>Hình thức thanh toán</p>
            </div>
          </div>
      </div>
      <div className="line3">
        <div className="danhmuc-left">
          <div className="icon">
            <UnorderedListOutlined />
          </div>
          <p>Danh mục sản phẩm</p>
        </div>
        <div className="danhmuc-right">
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
            <p>Game Steam</p>
          </div>
          <div className="window">
            <div className="icon">
              <FontAwesomeIcon icon={faWindows} />
            </div>
            <p>Windows, Office</p>
          </div>
          <div className="google">
            <div className="icon">
              <FontAwesomeIcon icon={faGoogleDrive} />
            </div>
            <p>Google Drive</p>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Navbar