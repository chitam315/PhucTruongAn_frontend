import React from 'react'
import { Spin } from 'antd'

const Button = ({ Loading, children, onClick, className, ...props }) => {
    return (
        <button
            className="w-full bg-[#0039a0] hover:bg-[#6293ee] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            disabled={Loading} onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button