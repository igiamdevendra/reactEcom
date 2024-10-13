import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './features/ecommerce/ecommerceSlice'
import { AppDispatch } from './app/store'
import { RootState } from './app/store'
import Home from './pages/Home'
const App : React.FC = ()=> {
  const dispatch = useDispatch<AppDispatch>()
  const productData = useSelector<RootState>(state => state.products.products)
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  console.log(productData)
  return (
    <>
      <div>
        <Navbar />
        <h2 className='text-center mt-5 text-xl'>Welcome to E-commerce Site</h2>
      </div>
      <div>
        <Home />
      </div>
    </>
  )
}

export default App