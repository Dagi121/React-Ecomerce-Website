import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import delImgUrl from "../assets/images/shop/del.png"
import CheckOutPage from './CheckOutPage';

const CartPage = () => {
    const [cartItem, setCartItem] = useState([]);

    useEffect(() => {
        // fetch cart item from local storage
        const storedCartItems = localStorage.getItem("cart");
        if (storedCartItems) {
          setCartItem(JSON.parse(storedCartItems));
        }
    }, []);


    // useEffect(() => {
    //     // fetch cart item from local storage
    //     const storedCartItems = JSON.parse(localStorage.getItem("cart") || []);
    //     setCartItem(storedCartItems);
    // }, [])

    // calculate price
    const calculateTotalPrice = (item) => {
        return item.price * item.quantity;
    }

    // handel quantity increase 
    const handelIncrease = (item) => {
        item.quantity += 1;
        setCartItem([...cartItem]);

        // update local storage with new cart item
        localStorage.setItem("cart", JSON.stringify(cartItem));
    }

    // handel quantity decrease
    const handelDecrease = (item) => {
        if (item.quantity > 1) {
            item.quantity -= 1;
            setCartItem([...cartItem]);

            // update local storage with new cart item
            localStorage.setItem("cart", JSON.stringify(cartItem));
        }
    };

    // handel item remove 
    const handelRemoveItem = (item) => {
        const updatedCart = cartItem.filter((cartItem) => cartItem.id !== item.id);

        //update new cart 
        setCartItem(updatedCart);

        updateLocalStorage (updatedCart);
    }

    const updateLocalStorage = (cart) => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    // cart subtotal
    const cartSubtotal = cartItem.reduce((total, item) => {
        return total + calculateTotalPrice(item);
    }, 0)

    //order total
    const OrderTotal = cartSubtotal;
    return (
        <div>
            <PageHeader title={"Shop Cart"} curPage={"CartPage"}/>
            <div className="shop-cart padding-tb">
                <div className="container">
                    <div className="section-wrapper">
                        {/* cart top */}
                        <div className="cart-top">
                            <table>
                                <thead>
                                    <tr>
                                        <th className='cat-product'>Product</th>
                                        <th className='cat-price'>Price</th>
                                        <th className='cat-quantity'>Quantity</th>
                                        <th className='cat-toprice'>Total</th>
                                        <th className='cat-edit'>Edit</th>
                                    </tr>
                                </thead>

                                {/* tabel body */}
                                <tbody>
                                    {
                                        cartItem.map((item, indx) => (
                                            <tr key={indx}>
                                                <td className='product-item cat-product'>
                                                    <div className="p-thumb">
                                                        <Link to="/shop"><img src={item.img} alt="" /></Link>
                                                    </div>
                                                    <div className="p-content">
                                                        <Link to="/shop">{item.name}</Link>
                                                    </div>
                                                </td>

                                                <td className="cat-price">${item.price}</td>
                                                <td className="cat-quantity">
                                                    <div className="cart-plus-minus">
                                                        <div className="dec qtybutton" onClick={() => handelDecrease (item)}>-</div>
                                                            <input type="text" className='cart-plus-minus-box' 
                                                            name="qtybutton" value={item.quantity} />
                                                             <div className="inc qtybutton" onClick={() => handelIncrease(item)}>+</div>
                                                    </div>
                                                </td>

                                                <td className="cat-toprice">${calculateTotalPrice(item)}</td>
                                                <td className="cat-edit">
                                                    <a onClick={() => handelRemoveItem(item)} href="#"><img src={delImgUrl} alt="" /></a>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                        {/* cart top ends */}
                        {/* cart bottom */}
                        <div className="cart-bottom">
                            {/* chekout box */}
                                    <div className="cart-checkout-box">
                                        <form className="coupon">
                                            <input className='cart-page-input-text' type="text" 
                                            name='coupon' id="coupon" placeholder='Coupon code .....' />
                                            <input type="submit" value={"Apply Coupon"} />
                                        </form>

                                        <form className='cart-checkout'>
                                            <input type="submit" value={"Update Cart"} />
                                            <div>
                                                <CheckOutPage/>
                                            </div>
                                        </form>
                                    </div>
                            {/* chek out ends */}

                            {/* shopping box */}
                            <div className="shiping-box">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="calculate-shiping">
                                            <h3>Calculate Shipping</h3>
                                            <div className="outline-select">
                                                <select>
                                                    <option value="us">United State (USA)</option>
                                                    <option value="uk">United Kingdom (UK)</option>
                                                    <option value="bd">Bangladesh</option>
                                                    <option value="pak">Pakisthan</option>
                                                    <option value="ind">India</option>
                                                    <option value="np">Napal</option>
                                                </select>
                                                <span className="select-icon">
                                                    <i className="icofont-rounded-down"></i>
                                                </span>
                                            </div>

                                            <div className="outline-select shipping-select">
                                            <select>
                                                    <option value="us">NewYork</option>
                                                    <option value="uk">London</option>
                                                    <option value="bd">Addis Abbeba</option>
                                                    <option value="pak">Addama</option>
                                                    <option value="ind">Delhi</option>
                                                </select>
                                                <span className="select-icon">
                                                    <i className="icofont-rounded-down"></i>
                                                </span>
                                            </div>
                                            <input type="text" name='postalCode' id='postalCode' 
                                            className='cart-page-input-text' placeholder='postalcode/ZIP'/>
                                            <button type='submit'>Update Adress</button>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-12">
                                        <div className="cart-overview">
                                            <h3>Cart Totals</h3>
                                            <ul className="lab-ul">
                                                <li>
                                                    <span className='pull-left'>Cart Sutotal</span>
                                                    <p className='pull-right'>${cartSubtotal}</p>
                                                </li>
                                                <li>
                                                    <span className='pull-left'>Shipping and Handling</span>
                                                    <p className='pull-right'>Free Shipping</p>
                                                </li>
                                                <li>
                                                    <span className='pull-left'>Order Total</span>
                                                    <p className='pull-right'>${OrderTotal.toFixed(2)}</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage