import React from 'react'
import { Tabs } from "../../components/Tabs";
import Button from "../../components/elements/Button";
import { useSelector } from 'react-redux';
import { cartProducts } from "../../stores/cart/cartSlice";
import useTabSwitch from '../../hooks/useTabSwitch';
import { ReactComponent as ArrowRightSVG } from "../../assets/icons/arrow-right-long-svgrepo-com.svg";
import { AddressForm } from '../../components/AddressForm';

const Cart = () => {
  const cart = useSelector(cartProducts);
  const tabs = ['Summary', 'Delivery', 'Payment'];
  const [currentTab, handleTabSwitch] = useTabSwitch(tabs, 'Summary');

  if(!cart || cart.length === 0) {
      return (
        <div className="bg-white h-full text-block flex justify-center px-4 py-8 font-bold">
          <h1>Your Cart is empty!</h1>
        </div>
      )
    }

  return (
    <div className="bg-white h-fit text-black mx-auto mt-2 border border-gray-200 p-4 md:w-2/3 rounded-lg shadow-md sm:p-6 lg:p-8">
      <Tabs list={tabs} onTabSwitch={handleTabSwitch} activeTab={currentTab} />

      <div className={`tabs ${currentTab !== 'Summary' ? 'hidden' : ''}`}>
        Summary
      </div>

      <div className={`tabs ${currentTab !== 'Delivery' ? 'hidden' : ''}`}>
        <AddressForm onTabSwitch={handleTabSwitch}/>
      </div>

      <div className={`tabs ${currentTab !== 'Payment' ? 'hidden' : ''}`}>
        Payment form
      </div>
    </div>
  )
}

export default Cart;