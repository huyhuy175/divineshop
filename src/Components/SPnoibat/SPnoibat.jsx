import React from 'react'
import { useState } from 'react'
import './SPnoibat.scss'
import Featured from '../Featured/Featured'
import all_product from '../Assets/all_product'

const SPnoibat = () => {

    const [displayCount, setDisplayCount] = useState(8);
    const showMoreObjects = () => {
        setDisplayCount(displayCount +8);
    };

  return (
    <div className='spnoibat'>
        <div className="line1">
            <div className="title">
                <h1>Sản phẩm nổi bật</h1>
                <p>Danh sách những sản phẩm theo xu hướng mà có thể bạn sẽ thích</p>
            </div>
            <div className="khampha">
                <button>Khám phá</button>
            </div>
        </div>
        <div className="line2">
            {all_product.map((item, i) => (
                <div className={i>=displayCount? 'hide':''}>
                    <Featured key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                </div>
            ))}
        </div>
        <div className="more">
            {displayCount < all_product.length ? (
            <p onClick={showMoreObjects}>Xem thêm</p>
            ):null}
            <hr />
        </div>
    </div>
  )
}

export default SPnoibat