import { FiHeart } from "react-icons/fi"
// import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai"
import "./Nav.css"

const Nav = ({ handleInputChange, query }) => {
    return (
        <nav>
            <div className="m-auto">
                <input
                    className="w-[500px] sm:w-[99%] py-2 px-5"
                    type="text"
                    onChange={handleInputChange}
                    value={query}
                    placeholder="cari Variant"
                />
            </div>
        </nav>
    )
}

export default Nav
