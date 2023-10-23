import React, { useState } from "react"
import Name from "./utils/Name"
import Products from "./utils/Products"
import { useNavigate } from "react-router-dom"
import { emptyProduct } from "../data/data"
import { Pagination } from "./Pagination"
import Nav from "../Navigation/Nav"
import Recommended from "../Recommended/Recommended"

const AllProduct = ({ ifExists, endpoint: { name, products } }) => {
    const navigate = useNavigate()
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [query, setQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 4

    // Buat state baru untuk filteredItems
    const [filteredItems, setFilteredItems] = useState(products)

    const handleInputChange = (event) => {
        const searchQuery = event.target.value.toLowerCase()
        setQuery(searchQuery)
        setCurrentPage(1)

        // Filter produk berdasarkan pencarian nama produk
        const filteredProductsByName = products.filter(({ title }) =>
            title.toLowerCase().includes(searchQuery)
        )

        setFilteredItems(filteredProductsByName)
    }

    const handleCategoryClick = (event) => {
        const selectedValue = event.target.value
        setCurrentPage(1)

        if (selectedValue === "") {
            // Jika "Semua" diklik, tampilkan semua produk
            setFilteredItems(products)
        } else {
            // Filter produk berdasarkan kategori yang dipilih
            const filteredProductsByCategory = products.filter(
                ({ text, price, title }) =>
                    text === selectedValue ||
                    price === selectedValue ||
                    title === selectedValue
            )

            setFilteredItems(filteredProductsByCategory)
        }
    }

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    // Gunakan filteredItems sebagai sumber produk yang ditampilkan
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem)

    return (
        <>
            <div className="grid grid-cols-1">
                <div className="bg-black w-full h-[150px]"></div>
                <button
                    onClick={() => navigate("/")}
                    className="bg-black text-white font-medium hover:scale-105 transition-all text-lg rounded-full w-[100px] m-auto mt-4"
                >
                    Kembali
                </button>
            </div>
            <Nav query={query} handleInputChange={handleInputChange} />
            <Recommended handleClick={handleCategoryClick} />
            <div id="sales" className="nike-container">
                {currentItems.length === 0 ? (
                    <div className="flex">
                        <img
                            src={emptyProduct}
                            alt="Produk tidak ada"
                            className="w-[20%] sm:w-[60%] md:w-[50%] m-auto"
                        />
                    </div>
                ) : (
                    <div
                        className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${
                            ifExists
                                ? "grid-cols-3 xl:grid-cols-2 sm:grid-cols-1"
                                : "grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
                        }`}
                    >
                        {currentItems.map((product, i) => (
                            <Products
                                {...product}
                                key={i}
                                ifExists={ifExists}
                            />
                        ))}
                    </div>
                )}
                <div className="flex justify-center mb-5 sm:max-h-28">
                    <Pagination
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                        totalItems={filteredItems.length}
                        itemsPerPage={itemsPerPage}
                    />
                </div>
            </div>
        </>
    )
}

export default AllProduct
