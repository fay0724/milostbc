import React from "react"
import { IconButton, Typography } from "@material-tailwind/react"
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline"

export function Pagination({
    currentPage,
    onPageChange,
    totalItems,
    itemsPerPage,
}) {
    const totalPages = Math.ceil(totalItems / itemsPerPage)

    const next = () => {
        if (currentPage === totalPages) return
        onPageChange(currentPage + 1)
    }

    const prev = () => {
        if (currentPage === 1) return
        onPageChange(currentPage - 1)
    }

    return (
        <div className="flex items-center gap-8">
            <IconButton
                size="sm"
                className="bg-black flex justify-center align-center"
                onClick={prev}
                disabled={currentPage === 1}
            >
                <ArrowLeftIcon
                    strokeWidth={2}
                    className="h-4 w-4 mt-2 text-amber-300"
                />
            </IconButton>
            <Typography color="gray" className="font-normal">
                Page <strong className="text-gray-900">{currentPage}</strong> of{" "}
                <strong className="text-gray-900">{totalPages}</strong>
            </Typography>
            <IconButton
                size="sm"
                className="bg-black flex justify-center align-center"
                onClick={next}
                disabled={currentPage === totalPages}
            >
                <ArrowRightIcon
                    strokeWidth={2}
                    className="h-4 w-4 mt-2 text-amber-300"
                />
            </IconButton>
        </div>
    )
}
