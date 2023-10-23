const Button = ({ onClickHandler, value, title }) => {
    return (
        <div className="">
            <button
                onClick={onClickHandler}
                value={value}
                className="btns sm:font-normal sm:text-sm sm:text-white sm:bg-black sm:p-[4px] sm:rounded-md md:font-normal md:text-sm md:text-white md:bg-black md:py-[6px] md:px-[7px] md:rounded-md"
            >
                {title}
            </button>
        </div>
    )
}

export default Button
