import clsx from "clsx";

function getClassName({ className }) {
    return clsx(
        "flex rounded-lg p-4 text-lg font-bold items-center font-lg",
        className
    )
}

const variants = {
    success: "bg-green-100 text-green-700",
    danger: "bg-red-100 text-red-700"
}

export const Alert = ({
    children,
    className,
    variant = "success",
}) => {
    return (
        <div className={clsx(variants[variant], getClassName({ className }))}>
            <svg className="w-10 h-10 inline mr-3" fill="currentColor" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 21.534c5.518 0 9.998-4.48 9.998-9.998s-4.48-9.997-9.998-9.997c-5.517 0-9.997 4.479-9.997 9.997s4.48 9.998 9.997 9.998zm0-8c-.414 0-.75-.336-.75-.75v-5.5c0-.414.336-.75.75-.75s.75.336.75.75v5.5c0 .414-.336.75-.75.75zm-.002 3c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z" fill-rule="nonzero"/></svg>

            <div>
                {children}
            </div>
        </div>
    )
}