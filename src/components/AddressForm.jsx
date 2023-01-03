import { useForm } from "react-hook-form";
import Button from "./elements/Button";
import { ReactComponent as ArrowRightSVG } from "../assets/icons/arrow-right-long-svgrepo-com.svg";
import { useDispatch } from "react-redux";
import { setAddress } from "../stores/userInfo/addressSlice";

export const AddressForm = ({ onTabSwitch }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(setAddress(data));
        onTabSwitch('Payment');
        // console.log(data);
    }

    return (
        <form action="" className="md:w-2/3 md:mx-auto px-3 pt-1" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="py-4 mb-8 mt-1 text-2xl md:text-center drop-shadow shadow rounded tracking-wide">Address for delivery</h3>

            <div className="mb-5">
                <label htmlFor="streetAddress" className="block mb-2 text-sm font-bold text-grey-700">Street Address</label>
                <input 
                    {...register('address' , { required: true })}
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-grey-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="street address"
                    type="text"
                    placeholder="Street Address" 
                />
                {errors.address && <span className="text-red-500 mb-1">This field is required</span>}
            </div>

            <div className="mb-5 md:flex md:justify-between">
                <div className="mb-5 md:mr-4 md:mb-0 flex-1">
                    <label htmlFor="city" className="block mb-2 text-sm font-bold text-gray-700">City</label>
                    <input 
                    {...register('city')}
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-grey-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="city"
                    type="text"
                    placeholder="City" 
                />
                </div>

                <div className="mb-5 md:mb-0 flex-1">
                    <label htmlFor="state" className="block mb-2 text-sm font-bold text-gray-700">State</label>
                    <input 
                    {...register('state')}
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-grey-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="state"
                    type="text"
                    placeholder="State" 
                />
                </div>
            </div>

            <div className="mb-5 md:flex md:justify-between">
                <div className="mb-4 md:mr-4 md:mb-0 flex-1">
                    <label htmlFor="country" className="block mb-2 text-sm font-bold text-gray-700">Country</label>
                    <input 
                    {...register('country')}
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-grey-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="country"
                    type="text"
                    placeholder="Country" 
                />
                </div>

                <div className="mb-5 md:mb-0 flex-1">
                    <label htmlFor="postalCode" className="block mb-2 text-sm font-bold text-gray-700">Postal Code</label>
                    <input 
                    {...register('postalCode')}
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-grey-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="postal code"
                    type="text"
                    placeholder="Postal Code" 
                />
                </div>
            </div>

            <div className="flex justify-end p-2">
                <Button variant="dark" className="flex items-center" type="submit">
                    <span className="mr-2 uppercase tracking-widest">Next</span>
                    <ArrowRightSVG />
                </Button>
            </div>
        </form>
    )
}