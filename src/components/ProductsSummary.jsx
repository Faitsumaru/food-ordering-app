import { useSelector } from "react-redux"
import { cartProducts } from "../stores/cart/cartSlice";
import { ProductsSummaryCard } from "./ProductsSummaryCard";

export const ProductsSummary = () => {
    const cart = useSelector(cartProducts);

    return (
        <div className="flex flex-col">
            { 
                cart && cart?.map((product, idx) => {
                    return (
                        <ProductsSummaryCard product={product} key={idx}/>
                    )
                }) 
            }
        </div>
    )
}