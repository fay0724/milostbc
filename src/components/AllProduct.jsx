import React from "react"
import Name from "./utils/Name"
import Products from "./utils/Products"
import { useNavigate } from "react-router-dom"

const AllProduct = ({ ifExists, endpoint: { name, products } }) => {
  // console.log(Sales)
  const navigate = useNavigate()
  return (
    <>
      <div className="flex justify-center mt-52">
        <button
          onClick={() => navigate("/")}
          className="bg-black text-white font-medium hover:scale-105 transition-all text-lg rounded-full w-[100px]"
        >
          Kembali
        </button>
      </div>
      <div id="sales" className="nike-container">
        <Name name={name} />

        <div
          className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${
            ifExists
              ? "grid-cols-3 xl:grid-cols-2 sm:grid-cols-1"
              : "grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
          }`}
        >
          {products?.map((product, i) => (
            <Products {...product} key={i} ifExists={ifExists} />
          ))}
        </div>
      </div>
    </>
  )
}

export default AllProduct
