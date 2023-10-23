import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react"
import { useDispatch } from "react-redux"
import {
    StarIcon,
    ShoppingCartIcon,
    ShoppingBagIcon,
} from "@heroicons/react/24/solid"

import { setAddItemToCart, setOpenCart } from "../app/CartSlice"

const EcommerceCard = ({
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
        <Card className="w-96 xl:w-full py-2 px-2 bg-white sm:w-[105%] md:w-[105%]">
            <CardHeader
                shadow={true}
                floated={true}
                className="bg-amber-300 mb-4"
            >
                <img
                    src={img}
                    alt={`img/item-img/${id}`}
                    title={desc}
                    className="w-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <div className="mb-4 flex items-center justify-between text-black">
                    <Typography
                        color="blue-gray"
                        className="font-medium sm:font-semibold sm:text-xs"
                    >
                        {title}
                    </Typography>
                    {/* <Typography
                        color="blue-gray"
                        className="font-medium sm:font-semibold sm:text-xs"
                    >
                        Rp {price}
                    </Typography> */}
                </div>
                <Typography
                    variant="small"
                    color="gray"
                    className="font-normal mb-4 text-black opacity-75 sm:font-semibold sm:text-xs"
                >
                    Rp {price}
                </Typography>
            </CardBody>
            <CardFooter className="relative flex pt-0 gap-3">
                <Button
                    ripple={false}
                    fullWidth={false}
                    onClick={() => {
                        onAddToCart()
                    }}
                    className="bg-amber-300 w-1/2 p-[9px] rounded-full text-black shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 my-2 sm:font-semibold sm:text-xs"
                >
                    <ShoppingCartIcon className="icon-style m-auto text-slate-900" />
                </Button>
                <Button
                    ripple={false}
                    // fullWidth={false}
                    onClick={() => {
                        onAddToCart()
                        onCartToggle()
                    }}
                    className="bg-amber-300 p-[9px] w-1/2 rounded-full text-black shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 my-2"
                >
                    {btn}
                </Button>
            </CardFooter>
        </Card>
    )
}

export default EcommerceCard
