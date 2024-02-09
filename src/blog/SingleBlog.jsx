import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom';
import Tags from '../shop/Tags';
import PopularPost from '../shop/PopularPost';

const socialList = [
    {
        link: "#", iconName: "icofont-facebook",
        className: "facebook",
    }, {
        link: "#",
        iconName: "icofont-twitter", className: "twitter",
    },
    {
        link: "#", iconName: "icofont-linkedin",
        className: "linkedin",
    }, {
        link: "#",
        iconName: "icofont-instagram",
        className: "instagram",
    }, {
        link: "#",
        iconName: "icofont-pinterest", className: "pinterest",
    },];

const SingleBlog = () => {
    const [blog, setBlog] = useState(blogList);
    const { id } = useParams()
    // console.log(id)
    const result = blog.filter((b) => b.id === Number(id))
    console.log(result[0])
    return (
        <div>
            <PageHeader title={"Single Blog Page"} curPage={"Blog / Blog Details"} />

            <div className="blog-section blog-single padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="section-wrapper">
                                    <div className="row row-cols-1 justify-content-center g-4">
                                        <div className="col">
                                            <div className="post-item style-2">
                                                <div className="post-inner">
                                                    {
                                                        result.map((item) => (
                                                            <div key={item.id}>
                                                                <div className="post-thumb">
                                                                    <img src={item.imgUrl} alt="" className='w-100' />
                                                                </div>

                                                                <div className="post-content">
                                                                    <h3>{item.title}</h3>
                                                                    <div className="meta-post">
                                                                        <ul className="lab-ul">
                                                                            {
                                                                                item.metaList.map((val, i) => (
                                                                                    <li key={i}><i className={val.iconName}></i>{val.text}</li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, eius
                                                                        pariatur. Quo nisi in, similique natus corrupti cum voluptate
                                                                        delectus atque accusantium modi dolorum tempore minima ipsa
                                                                        illum quaerat nobis et culpa. Magni nulla officia excepturi rerum
                                                                        pariatur. Quo nisi in, similique natus corrupti cum voluptate
                                                                        delectus atque accusantium modi dolorum tempore minima ipsa
                                                                        illum quaerat nobis et culpa. Magni nulla officia excepturi rerum
                                                                        est beatae in, dolorum molestiae, soluta totam aperiam cupiditate.
                                                                        Ut reiciendis accusamus officiis?</p>

                                                                    <blockquote>
                                                                        <p>
                                                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
                                                                            reiciendis optio! Iste pariatur quos voluptatum voluptas culpa
                                                                            hic eveniet minus eius qui inventore, quia sapiente unde commodi
                                                                            temporibus deleniti! Temporibus?
                                                                        </p>
                                                                        <cite>
                                                                            <a href="#">...Game of Thrones</a>
                                                                        </cite>
                                                                    </blockquote>

                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, eius
                                                                        pariatur. Quo nisi in, similique natus corrupti cum voluptate
                                                                        delectus atque accusantium modi dolorum tempore minima ipsa
                                                                        illum quaerat nobis et culpa. Magni nulla officia excepturi rerum
                                                                        pariatur. Quo nisi in, similique natus corrupti cum voluptate
                                                                        delectus atque accusantium modi dolorum tempore minima ipsa
                                                                        illum quaerat nobis et culpa. Magni nulla officia excepturi rerum
                                                                        est beatae in, dolorum molestiae, soluta totam aperiam cupiditate.
                                                                        Ut reiciendis accusamus officiis?</p>
                                                                    <img src="/src/assets/images/blog/single/01.jpg" alt="" />

                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, eius
                                                                        pariatur. Quo nisi in, similique natus corrupti cum voluptate
                                                                        delectus atque accusantium modi dolorum tempore minima ipsa
                                                                        illum quaerat nobis et culpa. Magni nulla officia excepturi rerum
                                                                        pariatur. Quo nisi in, similique natus corrupti cum voluptate
                                                                        delectus atque accusantium modi dolorum tempore minima ipsa
                                                                        illum quaerat nobis et culpa. Magni nulla officia excepturi rerum
                                                                        est beatae in, dolorum molestiae, soluta totam aperiam cupiditate.
                                                                        Ut reiciendis accusamus officiis?</p>

                                                                    <div className="video-thumb">
                                                                        <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                                                                        <a href="https://www.youtube.com/watch?v=jbfuzcrfjqQ"
                                                                            className='video-button popup'
                                                                            // target is for open in new tab 
                                                                            target='_blank' rel="noreferrer">
                                                                            <i className="icofont-ui-play"></i>
                                                                        </a>
                                                                    </div>

                                                                    <p>
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                        Quia quos recusandae consequuntur qui sapiente id nesciunt
                                                                        fugit laboriosam, ex tempore natus perferendis iusto, vero
                                                                        similique quasi a! Explicabo, aspernatur reiciendis?
                                                                    </p>

                                                                    <div className="tags-section">
                                                                        <ul className="tags lab-ul">
                                                                            <li>
                                                                                <a href="#">Agency</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Business</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Personal</a>
                                                                            </li>
                                                                        </ul>
                                                                        <ul className="lab-ul social-icons">
                                                                            {
                                                                                socialList.map((val, i) => (
                                                                                    <li key={i}>
                                                                                        <a href="#" className={val.className}>
                                                                                            <i className={val.iconName}></i>
                                                                                        </a>
                                                                                    </li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="navigations-part">
                                            <div className="left">
                                                <a href="#" className='prev'>
                                                    <i className="icofont-double-left"></i>Previous Blog
                                                </a>
                                                <a href="#" className='title'>
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, est?
                                                </a>
                                            </div>
                                            <div className="right">
                                                <a href="#" className='prev'>
                                                    <i className="icofont-double-right"></i>Next Article
                                                </a>
                                                <a href="#" className='title'>
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, est?
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>

                        {/* right side */}
                        <div className="col-lg-4 col-12">
                            <aside>
                                <Tags/>
                                <PopularPost/>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog