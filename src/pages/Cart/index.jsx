import React from 'react'
import { Tabs } from "../../components/Tabs";
import { useSelector } from 'react-redux';
import { cartProducts } from "../../stores/cart/cartSlice";
import useTabSwitch from '../../hooks/useTabSwitch';
import Button from '../../components/elements/Button';
import { ReactComponent as ArrowRightSVG } from "../../assets/icons/arrow-right-long-svgrepo-com.svg";
import { AddressForm } from '../../components/AddressForm';
import { ProductsSummary } from '../../components/ProductsSummary';
import { StripeWrapper } from "../../components/PaymentForm";

const Cart = () => {
  const cart = useSelector(cartProducts);
  const tabs = ['Summary', 'Delivery', 'Payment'];
  const [currentTab, handleTabSwitch] = useTabSwitch(tabs, 'Summary');

  if(!cart || cart.length === 0) {
      return (
        <div className="bg-gradient-to-tl from-yellow-500 to-rose-500 h-4/6 text-block flex justify-center px-6 py-24 font-bold">
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white'>Your Cart is empty!</h1>
        </div>
      )
    }

  return (
    <div className="bg-black lg:h-4/6 md:h-1/2">
      <div className="bg-white h-fit text-black mx-auto border border-gray-200 p-4 md:w-2/3 rounded-lg shadow-md sm:p-6 lg:p-8">
        <Tabs list={tabs} onTabSwitch={handleTabSwitch} activeTab={currentTab} />

        <div className={`tabs ${currentTab !== 'Summary' ? 'hidden' : ''}`}>
          <ProductsSummary />
          
          <div className="flex justify-end p-2 mt-5">
                <Button variant="dark" className="flex items-center" onClick={() => handleTabSwitch('Delivery')}>
                    <span className="mr-2 uppercase tracking-widest">Next</span>
                    <ArrowRightSVG />
                </Button>
          </div>
        </div>

        <div className={`tabs ${currentTab !== 'Delivery' ? 'hidden' : ''}`}>
          <AddressForm onTabSwitch={handleTabSwitch}/>
        </div>

        <div className={`tabs ${currentTab !== 'Payment' ? 'hidden' : ''}`}>
          <StripeWrapper />
        </div>
      </div>
    </div>
  )
}

export default Cart;