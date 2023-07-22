import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productsData } from './ProductData';
import { Link } from 'react-router-dom'
import { MdFastfood } from 'react-icons/md'
import { MdProductionQuantityLimits } from 'react-icons/md'
import { useSelector } from 'react-redux';

function Slider({products}) {


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 576, min: 0 },
            items: 2
        },
    }

    
    return (
        <div>
            <div className='flex justify-center items-center my-0 mx-0 rounded-md p-2'>
                <section className='bg-white rounded-md py-4'>
                    <div className="productDeal flex justify-between pb-4 pt-2 border-b-2 border-stone-300">
                        <h1 className='text-xl tracking-wide px-4 flex justify-start items-center gap-x-2 text-stone-600 pl-8 font-medium '><MdProductionQuantityLimits /> Deal of the day</h1>
                        <button className='py-2 px-5 text-white mr-9  bg-sky-600 shadow-md hover:bg-sky-700 rounded-lg '>View all</button>
                    </div>
                    {/* <hr /> */}
                    <Carousel
                        responsive={responsive}
                        showDots={false}
                        infinite={true}
                        centerMode={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        keyBoardControl={true}
                        swipeable={true}
                        deviceType={false}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        itemClass="carousel-item-padding-40-px"
                        dotListClass="custom-dot-list-style"
                    >
                        {
                            productsData.map((product , index) => {
                                const { url, discount, tagline, title } = product
                                return (
                                    <div className='text-center' key={index}>
                                        <img src={url} className='mx-auto w-32' alt="" />
                                        <p>{title.shortTitle}</p>
                                        <p>{discount}</p>
                                        <p>{tagline}</p>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </section>
                <div className='bg-white hidden lg:block px-4 ml-4 py-2 rounded-md text-center'>
                    <p className='text-lg sliderp'>Festive Advertisment</p>
                    <img src="http://2.imimg.com/data2/IS/TN/MY-2561564/advertisement-designing-services-500x500.jpg" className=' w-full sliderimg object-cover rounded-sm' alt="janinavai" />
                    <Link to={'/'}>See More</Link>
                </div>
            </div>
            <div className='img2'>
                <img className='mb-3 h-full w-4/5 mx-auto rounded-sm object-cover img3' src="https://post.healthline.com/wp-content/uploads/2020/11/773695-Home-Chef-Review-ProsCons-and-Comparison-1200x628-facebook-1200x628.jpg" alt="" />
                <p>Up to 25% Discount!</p>
            </div>
            <section className='bg-white rounded-md py-4 mx-5 mb-5 mt-1'>
                <div className="productDeal flex justify-between pb-4 pt-2 border-b-2 border-stone-300">
                    <h1 className='text-xl tracking-wide px-4 flex justify-start items-center gap-x-2 text-stone-600 pl-8 font-medium '><MdFastfood /> All Products</h1>
                    <button className='py-2 px-5 text-white mr-9  bg-sky-600 shadow-md hover:bg-sky-700 rounded-lg '>View all</button>
                </div>
                {/* <hr /> */}
                <Carousel
                    responsive={responsive}
                    showDots={false}
                    infinite={true}
                    centerMode={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    swipeable={true}
                    deviceType={false}
                    containerClass="carousel-container2"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    itemClass="carousel-item-padding-40-px"
                    dotListClass="custom-dot-list-style"
                >
                    {
                        products != '' && products.products.map((product , index) => {
                            const { url, discount, tagline, title , _id } = product
                            return (
                                <div className='text-center' key={index}>
                                    <Link to={_id}>
                                    <img src={url} className='mx-auto h-48' alt="" />
                                    <p>{title.shortTitle}</p>
                                    <p>{discount}</p>
                                    <p>{tagline}</p>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </section>
        </div>
    )
}

export default Slider