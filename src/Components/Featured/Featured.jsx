import React from 'react'
import { Link } from 'react-router-dom'
import './Featured.scss'

const Featured = (props) => {
    function formatNumberWithPeriods(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    function NumberFormat({ number }) {
        const formattedNumber = formatNumberWithPeriods(number);
        return <span>{formattedNumber}</span>;
    }

  return (
    <div className='featured'>
        <div className="title">
            <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    <NumberFormat number={props.new_price}/>đ
                </div>
                {props.new_price !== props.old_price ? (
                    <div className="item-price-old">
                    <NumberFormat number={props.old_price}/>đ
                    </div>
                ):null}
                {props.new_price !== props.old_price ? (
                    <div className="percent">
                    -{100 - (Math.round((props.new_price/props.old_price)*100))}%
                    </div>
                ):null}
                
            </div>
        </div>
    </div>
  )
}

export default Featured