import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'

const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext)
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map( (e) => {
            if(cartItems[e.id]>0){
                return  <div>
                <div className="cartitems-format cartitems-format-main" >
                    <img src={e.image} alt="product" className='carticon-product-icon' />
                    <p> {e.name} </p>   {/* products name */}
                    <p> ${e.new_price} </p>   {/* product new price */}
                    <button className='cartitems-quantity' > {cartItems[e.id]} </button>  {/* product quantity */}
                    <p> ${e.new_price*cartItems[e.id]} </p>   {/* total value of the indiviual items */}
                    <img src={remove_icon} alt="remove_icon" className='cartitem-remove-icon' onClick={()=>{removeFromCart(e.id)}} />
                </div>
                <hr />
            </div>
            }
            return null;
        } )}
       <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h1>Total</h1>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder='Promo code' />
                <button>Submit</button>
            </div>
        </div>
       </div>
    </div>
  )
}

export default CartItems