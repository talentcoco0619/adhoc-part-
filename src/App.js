import { Outlet, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home/Home'
import Show404 from './pages/404/Show404'
import WentWrong from './pages/WentWrong/WentWrong'
import Product from './pages/Product/Product'
import { Transition } from '@headlessui/react'
import { Toaster, ToastIcon, toast, resolveValue } from 'react-hot-toast'
import FoodOrder from './pages/FoodOrder/FoodOrder'
import ProductLayout from './layouts/ProductLayout'
import EmptyCart from './pages/EmptyCart/EmptyCart'
import FinishOrder from './pages/FinishOrder/FinishOrder'
import OrderLayout from './layouts/OrderLayout'
import ThankYou from './pages/ThankYou/ThankYou'
import QRScan from './pages/QRScan/QRScan'
import Terms from './pages/Terms/Terms'
import Privacy from './pages/Privacy/Privacy'
import Support from './pages/Support/Support'
import Checkout from './pages/FinishOrder/Checkout'
import Landing from './pages/Landing/Landing'
import DigitalMenu from './pages/DigitalMenu/DigitalMenu'
import HomeLayout from './pages/Home/Home'

const TailwindToaster = () => {
  return (
    <Toaster position="top-right">
      {(t) => (
        <Transition
          appear
          show={t.visible}
          className="transform p-4 flex bg-white rounded shadow-lg"
          enter="transition-all duration-150"
          enterFrom="opacity-0 scale-50"
          enterTo="opacity-100 scale-100"
          leave="transition-all duration-150"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-75"
        >
          <ToastIcon toast={t} />
          <p className="px-2">{resolveValue(t.message)}</p>
        </Transition>
      )}
    </Toaster>
  )
}

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          element={
            <ProductLayout>
              <Outlet />
            </ProductLayout>
          }
        >
          <Route path="/product" element={<Product />} />
          <Route
            path="/food-ordering"
            element={
              <OrderLayout>
                <Outlet />
              </OrderLayout>

            }
          >
            <Route index element={<FoodOrder />} />
            <Route path="finish" element={<FinishOrder />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="thankYou" element={<ThankYou />} />
          </Route>
          <Route path="/empty-cart" element={<EmptyCart />} />
        </Route>
        <Route path="/wrong" element={<WentWrong />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/support-si-ajutor" element={<Support />} />
        <Route path="/blog/what-is-a-digital-menu" element={<DigitalMenu />} />
        <Route path="/blog/explicatii-ordin-anpc-2022" element={<Show404 />} />
        <Route path="/blog/what-is-a-pos-system" element={<Show404 />} />
        <Route path="/blog/what-is-a-qr-code" element={<Show404 />} />
        <Route path="/home" element={<HomeLayout />} />
        <Route path="/*" element={<Show404 />} />
      </Routes>
      <TailwindToaster />
    </ScrollToTop>
  )
}

export default App
