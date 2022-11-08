import { useDispatch } from "react-redux";
import { incrementProductAmount, decrementProductAmount } from "../stores/cart/cartSlice";

export const ProductsSummaryCard = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <div className="flex p-1 m-0 sm:p-2 border-b border-b-gray-200 justify-between">
            <div className="flex p-1 sm:p-2">
                <div className="product-img border border-gray-200 rounded-lg w-full max-w-[140px]">
                    <img src={product.imageUrl} alt={product.name} className="max-w-[140px]"/> 
                </div>

                <div className="product-info mx-3">
                    <h3 className="font-bold my-2">{ product.name }</h3>
                    <p className="text-grey-600">{ product.description }</p>
                </div>
            </div>

            <div className="product-price-qt flex flex-col items-center justify-center">
                <div className="price font-bold mb-2">{ `${product.price}¢` }</div>
                <div className="quantity flex">
                    <button className="p-1" disabled={product.amount <= 0} onClick={() => dispatch(decrementProductAmount(product))}>-</button>
                    <span className="p-1">{ product.amount }</span>
                    <button className="p-1" onClick={() => dispatch(incrementProductAmount(product))}>+</button>
                </div>
            </div>
        </div>
    )
}