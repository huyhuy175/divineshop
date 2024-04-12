import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="line1">
          <div className="image">
            <img src="https://cdn.divineshop.vn/static/b77a2122717d76696bd2b87d7125fd47.svg" alt="" />
            <img src="https://cdn.divineshop.vn/static/72a3a36fc7c66085b3f442940ba45fde.svg" alt="" />
            <img src="https://cdn.divineshop.vn/static/464c7c79044dea88e86adf0e1b9c064c.svg" alt="" />
            <img src="https://cdn.divineshop.vn/static/ddb866eb1214c914ea62417879046b99.svg" alt="" />
          </div>
          <p>và nhiều hình thức thanh toán khác</p>
        </div>
        <div className="line2">
          <div className="image-2">
            <img className='icon' src="https://cdn.divineshop.vn/static/4ba68c7a47305b454732e1a9e9beb8a1.svg" alt="" />
            <img className='icon' src="https://cdn.divineshop.vn/static/20334129395885adefc2e5217043f670.svg" alt="" />
            <img className='icon' src="https://cdn.divineshop.vn/static/4ae438165f9d5ea0fc6ff3da6051f938.svg" alt="" />
          </div>
        </div>
        <hr/>
        <div className="line3">
          <div className="left">
            <div className="gioithieu">
              <h1>GIỚI THIỆU</h1>
              <ul>
                <li>Game bản quyền là gì?</li>
                <li>Giới thiệu Divine Shop</li>
                <li>Điều khoản dịch vụ</li>
                <li>Chính sách bảo mật</li>
              </ul>
            </div>
            <div className="taikhoan">
              <h1>TÀI KHOẢN</h1>
              <ul>
              <li>Đăng nhập</li>
              <li>Đăng ký</li>
              </ul>
            </div>
            <div className="lienhe">
              <h1>LIÊN HỆ</h1>
              <p>Hotline tự động <span>0123 456 789</span></p>
              <ul>
                <li>Liên hệ hỗ trợ</li>
                <li>CHAT với CSKH</li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="image-3">
              <img src="https://images.dmca.com/Badges/_dmca_premi_badge_2.png?ID=18522dc6-fdd6-4b49-ab40-395a79849050" alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer