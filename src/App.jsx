import React from "react"
import { Routes, Route, Link, Outlet } from "react-router-dom"
import {
    Cart,
    FlexContent,
    Footer,
    Hero,
    Navbar,
    Sales,
    AllProduct,
    Stories,
} from "./components"
import {
    heroapi,
    popularsales,
    toprateslaes,
    highlight,
    sneaker,
    story,
    footerAPI,
    allProducts,
} from "./data/data.js"
import App2 from "./App2"

const Home = () => {
    return (
        <main className="flex flex-col gap-16 relative">
            <Hero heroapi={heroapi} />
            <Sales endpoint={popularsales} ifExists />
            <FlexContent endpoint={highlight} ifExists />
            <Sales endpoint={toprateslaes} />
            <FlexContent endpoint={sneaker} />
            <Stories story={story} />
            {/* <Link to="/all-product">Go to All Products</Link> */}
        </main>
    )
}

const App = () => {
    return (
        <>
            <Navbar />
            <Cart />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/all-product"
                    element={<AllProduct endpoint={allProducts} />}
                />
            </Routes>
            <Footer footerAPI={footerAPI} />
        </>
    )
}

export default App
