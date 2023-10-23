import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
    selectCartItems,
    selectCartState,
    selectTotalAmount,
    selectTotalQTY,
    setClearCartItems,
    setCloseCart,
    setGetTotals,
} from "../app/CartSlice.js"
import CartCount from "./cart/CartCount"
import CartEmpty from "./cart/CartEmpty"
import CartItem from "./cart/CartItem"

const Cart = () => {
    const dispatch = useDispatch()
    const ifCartState = useSelector(selectCartState)
    const cartItems = useSelector(selectCartItems)
    const totalAmount = useSelector(selectTotalAmount)
    const totalQTY = useSelector(selectTotalQTY)

    useEffect(() => {
        dispatch(setGetTotals())
    }, [cartItems, dispatch])

    const onCartToggle = () => {
        dispatch(
            setCloseCart({
                cartState: false,
            })
        )
    }

    const onClearCartItems = () => {
        dispatch(setClearCartItems())
    }

    // State untuk memilih nomor WhatsApp
    const [selectedPhoneNumber, setSelectedPhoneNumber] =
        useState("6285207825000")

    const handleWhatsAppCheckout = () => {
        const message = `
Assalamualaikum, saya mau pesan ${cartItems
            .map((item) => item.title)
            .join(
                ", "
            )} dari keranjang saya, dengan total Rp ${totalAmount}.000.
`

        const whatsappURL = `https://wa.me/${selectedPhoneNumber}?text=${message}`

        window.open(whatsappURL, "_blank")
    }

    const getButtonText = () => {
        if (selectedPhoneNumber === "6285207825000") {
            return "Check Out via WhatsApp - Admin Kota"
        } else if (selectedPhoneNumber === "628536082500") {
            return "Check Out via WhatsApp - Admin Limboto"
        }
        return "Check Out via WhatsApp"
    }

    return (
        <>
            <div
                className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme duration-500 w-full h-screen opacity-100 z-[250] ${
                    ifCartState
                        ? "opacity-100 visible translate-x-0"
                        : "opacity-0 invisible translate-x-8"
                }`}
            >
                <div
                    className={`blur-effect-theme duration-500 h-screen max-w-xl w-full absolute right-0 ${
                        ifCartState
                            ? "opacity-100 visible translate-x-0"
                            : "opacity-0 invisible translate-x-8"
                    }`}
                >
                    <CartCount
                        totalQTY={totalQTY}
                        onCartToggle={onCartToggle}
                        onClearCartItems={onClearCartItems}
                    />
                    {cartItems?.length === 0 ? (
                        <CartEmpty onCartToggle={onCartToggle} />
                    ) : (
                        <div>
                            <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3">
                                {cartItems?.map((item, i) => (
                                    <CartItem key={i} item={item} />
                                ))}
                            </div>

                            <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
                                <div className="flex items-center justify-between">
                                    <h1 className="text-base font-semibold uppercase">
                                        Total Belanja
                                    </h1>
                                    <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">
                                        Rp {parseFloat(totalAmount).toFixed(3)}
                                    </h1>
                                </div>
                                <div className="grid items-center gap-2">
                                    <p className="text-sm font-medium text-center">
                                        Pembayaran akan dialihkan ke Whatsapp
                                        Admin Milost
                                    </p>
                                    <div>
                                        <p>Pilih nomor WhatsApp:</p>
                                        <select
                                            value={selectedPhoneNumber}
                                            onChange={(e) =>
                                                setSelectedPhoneNumber(
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option value="6285207825000">
                                                Admin Kota
                                            </option>
                                            <option value="628536082500">
                                                Admin Limboto
                                            </option>
                                        </select>
                                    </div>
                                    <button
                                        type="button"
                                        className="button-theme bg-theme-cart text-white"
                                        onClick={handleWhatsAppCheckout}
                                    >
                                        {getButtonText()}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Cart
