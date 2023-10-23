import { BsFillBagFill } from "react-icons/bs"
import { useDispatch } from "react-redux"
import {
    StarIcon,
    ShoppingBagIcon,
    ShoppingCartIcon,
} from "@heroicons/react/24/solid"

import { setAddItemToCart, setOpenCart } from "../../app/CartSlice"

const Products = ({
    ifExists,
    id,
    color,
    shadow,
    title,
    text,
    desc,
    img,
    btn,
    rating,
    price,
}) => {
    const dispatch = useDispatch()

    const onAddToCart = () => {
        const item = { id, title, text, img, color, shadow, price }

        dispatch(setAddItemToCart(item))
    }

    const onCartToggle = () => {
        dispatch(
            setOpenCart({
                cartState: true,
            })
        )
    }

    return (
        <>
            <div
                className={`card card-compact w-96 bg-base-100 shadow-xl ${
                    ifExists ? "justify-items-start" : "justify-items-center"
                }`}
            >
                <figure>
                    <img
                        src={img}
                        alt={`img/item-img/${id}`}
                        title={desc}
                        className={`transitions-theme ${
                            ifExists
                                ? "h-auto w-64 lg:w-56 md:w-48"
                                : "h-36 w-64"
                        }`}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-[17px]">Rp {price}</p>
                    <div className="card-actions m-auto pt-3">
                        <button
                            className="btn bg-orange-900 text-white"
                            onClick={() => {
                                onAddToCart()
                            }}
                        >
                            <ShoppingCartIcon className="icon-style m-auto text-white" />
                        </button>
                        <button
                            className="btn bg-orange-900 text-white"
                            onClick={() => {
                                onAddToCart()
                                onCartToggle()
                            }}
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
