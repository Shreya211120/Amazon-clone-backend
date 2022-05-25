import React from 'react'
import "./buynow.css";
import { Divider } from '@mui/material';
import Option from './Option';
import Subtotal from './Subtotal';
import Right from './Right';

const Buynow = () => {
  return (
    <>
    <div className='buynow_section'>
        <div className="buynow_container">
            <div className="left_buy">
                <h1>Shopping Container</h1>
                <p>Select all items</p>
                <span className="leftbuyprice">Price</span>
                            <Divider />
              <div className="item_container">
                <img src = "https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70"/>
              <div className="item_details">
                <h3 style={{fontSize:14}}>Pigeon Amaze Plus Electric Kettle (14289) with Stainless Steel Body, 1.5 litre, used for boiling Water, making tea and coffee, instant noodles, soup etc. 1500 Watt (Silver)</h3>
                <h3>Electric Kettle</h3>
              {/* <hr className='differentprice'>₹ 625.00</hr> */}
              {/* <p className='unusall'>Usually dispatched in 8 days.</p> */}
              <p>Eligible for free shipping</p>
               <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="logo"/> 
              
              <Option/>
              </div>
              <h3 className='item_price'>₹ 625.00</h3>
              </div>
              <Divider/>
              <Subtotal/>
            </div>
            <Right/>
        </div>
    </div>
    
    </>
  )
}

export default Buynow