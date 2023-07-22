import React, { useEffect } from 'react'
import Footer from '../components/footer/Footer'
import Banner from '../components/Home/Banner'
import Slider from '../components/Home/Slider'
import { useDispatch, useSelector } from 'react-redux'
import { ProductGetFetch } from '../components/Product_Slice/PorductGetSlice'
import Loader from '../components/Loader/Loading'

function Home() {

  const dispatch = useDispatch()
  const { products, loading } = useSelector((state) => state.Products)

  useEffect(() => {
    dispatch(ProductGetFetch())
  }, []);

  return (
    <div>
      {loading && <Loader />}
      <section className='home'>
        <Banner />
        <Slider products={products} />
        <Footer />
      </section>
    </div>
  )
}

export default Home