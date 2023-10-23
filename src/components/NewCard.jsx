import { setAddItemToCart, setOpenCart } from "../app/CartSlice"
import { useDispatch } from "react-redux"
const NewCard = (
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
    price
) => {
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
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={img} alt={`img/item-img/${id}`} title={desc} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Rp {price}</p>
                    <p>{text}</p>
                    <div className="card-actions justify-end">
                        <button
                            onClick={() => {
                                onAddToCart()
                                onCartToggle()
                            }}
                            className="btn btn-primary"
                        >
                            {btn}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewCard
