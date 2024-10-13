import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import ProductDetails from './pages/ProductDetails.tsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    children : [
      {
        path : 'product/:id',
        element : <ProductDetails />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
