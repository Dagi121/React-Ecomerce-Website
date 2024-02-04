import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const desc = "Energistia an deliver atactica metrics after avionary Aropria trnsition enterprise an sources applications emarging psd template"

const ProductDisplay = ({ item }) => {
    // console.log(item)
    const { name, id, price, seller, ratingsCount, quantity, img} = item;

    // eslint-disable-next-line no-undef
    const [prequantity, setQuantity] = useState(quantity);
    const [coupon, setCoupon] = useState("");
    const [size, setSize] = useState("Select Size");
    const [color, setColor] = useState("Select Color");

    const handelSizeChange = (e) => {
        setSize(e.target.value);
    };

    const handelColorChange = (e) => {
        setColor(e.target.value);
    }

    const handelDecrease = (e) => {
        if (prequantity > 1) {
            setQuantity(prequantity - 1)
        }
    }

    const handelIncrease = () => {
        setQuantity(prequantity + 1)
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        const product  = {
            id: id,
            img: img,
            name: name,
            price: price,
            quantity: prequantity,
            size: size,
            color: color,
            coupon: coupon
        }

        // console.log(product)
        const existingCart =JSON.parse(localStorage.getItem("Cart")) || [];

        const existingProductIndex = existingCart.findIndex((item) => item.id === id);

        if(existingProductIndex !== -1){
            existingCart[existingProductIndex].quantity += prequantity;
        }else{
            existingCart.push(product);
        }

        // update local storage
        localStorage.setItem("cart", JSON.stringify(existingCart));

        // reset from fields
        setQuantity(1);
        setSize("Select Size");
        setColor("Select Color");
        setCoupon("")

    }


    return (
        <div>
            <div>
                <h4>{name}</h4>
                <p className="rating">
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <span>{ratingsCount} review</span>
                </p>
                <h4>${price}</h4>
                <h6>{seller}</h6>
                <p>{desc}</p>
            </div>

            {/* cart componenet */}
            <div>
                <form onSubmit={handelSubmit}>
                    {/* sizing */}
                    <div className="select-product size">
                        <select value={size} onChange={handelSizeChange}>
                            <option>Select Size</option>
                            <option>SM</option>
                            <option>MD</option>
                            <option>LG</option>
                            <option>XL</option>
                            <option>XXL</option>
                        </select>
                        <i className="icofont-rounded-down"></i>
                    </div>

                    {/* color */}
                    <div className="select-product color">
                        <select value={color} onChange={handelColorChange}>
                            <option>Select Color</option>
                            <option>Pink</option>
                            <option>Ash</option>
                            <option>Red</option>
                            <option>White</option>
                            <option>Blue</option>
                            <option>Black</option>
                        </select>
                        <i className="icofont-rounded-down"></i>
                    </div>
                    {/* cart plus minus */}
                    <div className="cart-plus-minus">
                        <div className='dec qtybutton' onClick={handelDecrease}>-</div>
                        <input className='cart-plus-minus-box' type="text" name='qtybutton'
                            id='qtybutton' value={prequantity} onChange={(e) => setQuantity(parseInt(e.target.value, 10))} />
                        <div className='inc qtybutton' onClick={handelIncrease}>+</div>
                    </div>

                    {/* coupon field */}
                    <div className="discount-code mb-12">
                        <input type="text" placeholder='Enter Discount Code' onChange={(e) => 
                            setCoupon(e.target.value)} />
                    </div>

                    {/* btn section */}
                    <button type='submit' className='lab-btn'>
                        <span>Add to Cart</span>
                    </button>
                    <Link to="/cart-page" className="lab-btn bg-primary">
                        <span>Chek Out</span>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default ProductDisplay