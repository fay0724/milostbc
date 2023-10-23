import React from "react"
import Button from "../components/Buttons"

const Recommended = ({ handleClick }) => {
    const handleAllClick = () => {
        // Ketika tombol "Semua" diklik, atur ulang filteredItems
        handleClick({ target: { value: "" } })
    }

    return (
        <div className="nike-container">
            <h2 className="mb-[20px] mt-[20px] font-medium">KATEGORI</h2>
            <div className="flex sm:grid sm:grid-cols-3 sm:gap-1 md:grid md:grid-cols-5 md:gap-1">
                <Button
                    onClickHandler={handleAllClick}
                    value=""
                    title="Semua"
                />
                <Button
                    onClickHandler={handleClick}
                    value="Roti Manis"
                    title="Roti Manis"
                />
                <Button
                    onClickHandler={handleClick}
                    value="Roti Asin"
                    title="Roti Asin"
                />
                <Button
                    onClickHandler={handleClick}
                    value="Roti Tawar"
                    title="Roti Tawar"
                />
                <Button
                    onClickHandler={handleClick}
                    value="Cake Slice"
                    title="Cake Slice"
                />
                <Button
                    onClickHandler={handleClick}
                    value="Cake Tart"
                    title="Cake Tart"
                />
                <Button
                    onClickHandler={handleClick}
                    value="Lainnya"
                    title="Lainnya"
                />
            </div>
        </div>
    )
}

export default Recommended
