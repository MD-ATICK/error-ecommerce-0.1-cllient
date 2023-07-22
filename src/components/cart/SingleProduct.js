import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Footer from '../footer/Footer';
import { productsData } from '../Home/ProductData';
import { ProductSingleGetFetch } from '../Product_Slice/SingleProductGetSlice';
import Loader from '../Loader/Loading';


function SingleProduct() {

  // const {url , title , price , discount , description } = productsData[2]


  const dispatch = useDispatch()
  const { id } = useParams()

  const { product, loading } = useSelector((state) => state.SingleProduct)
  console.log(product.product)

  useEffect(() => {
    dispatch(ProductSingleGetFetch(id))
  }, []);

  return (
    <div>
     {loading && <Loader/>}
      {product.product && <div className='w-full grid grid-cols-1 lg:grid-cols-2 singleProduct'>
        <div className="left flex flex-col justify-center items-center">
          <img src={product.product.url} className='h-80 spimg' alt="" />
          <div className='flex justify-center items-center gap-6 mt-6'>
            <button className='py-3 px-9 b1 rounded-full shadow-lg '>Add to Chat</button>
            <Link className='py-3 px-12 b2 rounded-full shadow-lg ' to='/buy-now'>Buy Now</Link>
          </div>
        </div>
        <div className="right px-4 flex flex-col justify-center">
          <p className='text-3xl font-semibold'>{product.product.title.shortTitle}</p>
          <p className='pb-6 text text-lg mt-2'>{product.product.title.longTitle}</p>
          <p>M.R.P : <s>{product.product.price.mrp} Taka</s></p>
          <p>Deal of the Day : {product.product.price.cost} Taka</p>
          <p>You Save : 570 Taka ({product.product.price.discount})</p>
          <p>Delivery : Within 2 day(max)</p>
          <p>Discount Offer : {product.product.discount}</p>
          <p className='text text-sm mt-4'><span className='text-lg font-semibold'>About the item : </span>{product.product.description}</p>
        </div>
      </div>}
      <Footer />

    </div>

  )
}

export default SingleProduct;