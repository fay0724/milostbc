import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navigation from "./Navigation/Nav"
import Products from "./Products/Products"
import allProducts from "./data/AllProducts"
import Recommended from "./Recommended/Recommended"
import EcommerceCard from "./components/EcommerceCard"
import { Pagination } from "./components/Pagination"
import { emptyProduct } from "./data/data"
import Card from "./components/Card"
import "./index2.css"

function App2() {
    const navigate = useNavigate()
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [query, setQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 4

    const [filteredItems, setFilteredItems] = useState(allProducts)

    const handleInputChange = (event) => {
        setQuery(event.target.value)
    }

    const handleChange = (event) => {
        setSelectedCategory(event.target.value)
    }

    const handleClick = (event) => {
        setSelectedCategory(event.target.value)

        const filteredProductsByCategory = filteredItems.filter(
            ({ text, price, title }) =>
                text === event.target.value ||
                price === event.target.value ||
                title === event.target.value
        )

        setFilteredItems(filteredProductsByCategory)
        setCurrentPage(1)
    }

    useEffect(() => {
        let filteredProducts = allProducts

        if (query) {
            filteredProducts = allProducts.filter(
                (product) =>
                    product.title.toLowerCase().indexOf(query.toLowerCase()) !==
                        -1 ||
                    product.text.toLowerCase().indexOf(query.toLowerCase()) !==
                        -1
            )
        }

        if (selectedCategory) {
            filteredProducts = filteredProducts.filter(
                ({ text, price, title }) =>
                    text === selectedCategory ||
                    price === selectedCategory ||
                    title === selectedCategory
            )
        }

        setFilteredItems(filteredProducts)
        setCurrentPage(1)
    }, [query, selectedCategory])

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem)

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <>
            <div className="text-center">
                <div className="bg-black w-full h-[150px] mb-2"></div>
                <button
                    onClick={() => navigate("/")}
                    className="bg-black text-white mt-7 font-medium hover:scale-105 transition-all text-lg rounded-full w-[100px]"
                >
                    Kembali
                </button>
            </div>

            <Navigation query={query} handleInputChange={handleInputChange} />
            <Recommended handleClick={handleClick} />
            {currentItems.length > 0 ? (
                <div className="nike-container grid items-center gap-7 lg:gap-5 sm:gap-3 mt-7 grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 mb-10">
                    {currentItems.map((item) => (
                        <Card
                            key={item.id}
                            img={item.img}
                            title={item.title}
                            text={item.text}
                            desc={item.desc}
                            price={item.price}
                            btn={item.btn}
                            color={item.color}
                            shadow={item.shadow}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex">
                    <img
                        src={emptyProduct}
                        alt="Produk tidak ada"
                        className="w-[20%] sm:w-[60%] md:w-[50%] m-auto"
                    />
                </div>
            )}
            <div className="flex justify-center mb-5 sm:max-h-28">
                <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={filteredItems.length}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </>
    )
}

export default App2
