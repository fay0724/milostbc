import React from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const FlexContent = ({
  ifExists,
  endpoint: { title, heading, text, img, btn },
}) => {
  const navigate = useNavigate() // Menggunakan useNavigate

  return (
    <>
      <div
        className={`flex items-center justify-between lg:flex-col lg:justify-center nike-container ${
          ifExists ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className="max-w-lg lg:max-w-none w-full md:text-center grid items-center lg:justify-items-center">
          <h1 className="text-4xl sm:text-3xl font-bold text-gradient">
            {heading}
          </h1>
          <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-slate-900 filter drop-shadow-lg">
            {title}
          </h1>
          <p className="xl:text-sm my-4 text-slate-900">{text}</p>
          <Link to="/all-product">
            <button
              onClick={() => navigate("/all-product")}
              className="button-theme w-[189px] bg-slate-900 shadow-slate-900 text-slate-100 py-1.5"
            >
              {btn}
            </button>{" "}
          </Link>
          {/* Tombol untuk navigasi ke AllProduct */}
        </div>
        <div className="flex items-center justify-center max-w-xl relative lg:max-w-none w-full">
          <img
            src={img}
            alt={`img/${heading}`}
            className={`w-auto object-fill transitions-theme ${
              ifExists
                ? "h-70 lg:h-66 md:h-52 sm:h-44 xsm:h-36 hover:scale-125"
                : "h-72 lg:h-64 md:h-60 sm:h-48 xsm:h-40 hover:scale-125"
            }`}
          />
        </div>
      </div>
    </>
  )
}

export default FlexContent
