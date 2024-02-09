/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Ratting from '../components/Ratting';


const  PulutoDataFetching = () => {

    const [puluto, setpuluto] = useState([]);

    useEffect(() => {
        fetch('https://us-central1-adey-dc43b.cloudfunctions.net/getProductsAPI')
        .then(res => res.json())
        .then(data => setpuluto(data))
        .catch(ds => console.log(ds))
    },[])

            console.log(puluto)
  return (
    <div className={`shop-product-wrap row justify-content-center `}>
        {
            puluto.map((val, i) => (
                <div key={i} className="col-lg-4 col-md-6 col-12">
                    <div className="product-item">
                        {/* product images */}
                        <div className="product-thumb">
                            <div className="pro-thumb">
                                <img src={val.product_Image} alt="" />
                            </div>
                            
                            {/* product action links */}
                            <div className="product-action-link">
                                <Link to={`/shop/${val.owner_id}`}><i className='icofont-eye'></i></Link>
                                <a href="#">
                                    <i className='icofont-heart'></i>
                                </a>
                                <Link to="/cart-page"><i className='icofont-cart-alt'></i></Link>
                            </div>
                        </div>

                        {/* product content */}
                        <div className="product-content">
                            <h5>
                                <Link to={`/shop/${val.owner_id}`}>{val.product_name}</Link>
                            </h5>
                            <p className='productRating'>
                                <Ratting/>
                            </p>
                            <h6>${val.product_price}</h6>
                        </div>
                    </div>



                    {/* list style */}
                    <div className="product-list-item">
                        {/* product images */}
                        <div className="product-thumb">
                            <div className="pro-thumb">
                                <img src={val.product_image} alt="" />
                            </div>
                            
                            {/* product action links */}
                            <div className="product-action-link">
                                <Link to={`/shop/${val.owner_id}`}><i className='icofont-eye'></i></Link>
                                <a href="#">
                                    <i className='icofont-heart'></i>
                                </a>
                                <Link to="/cart-page"><i className='icofont-cart-alt'></i></Link>
                            </div>
                        </div>

                        {/* product content */}
                        {/* <div className="product-content">
                            <h5>
                                <Link to={`/shop/${product.id}`}>{product.name}</Link>
                            </h5>
                            <p className='productRating'>
                                <Ratting/>
                            </p>
                            <h6>${product.price}</h6>
                        </div> */}
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default PulutoDataFetching