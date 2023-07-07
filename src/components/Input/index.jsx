import React from 'react'
import { ErrorText, InputStyle } from './style'

export default function Input({ className, error, type = 'text', ...props }) {
    return (
        <InputStyle>
            <input
                type={type}
                // name="email"
                // id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // placeholder="Nhập email của bạn"
                required=""
                style={error && { marginBottom: '40px' }}
                {...props}
            />
            {
                error && <ErrorText>{error}</ErrorText>
            }
        </InputStyle>

    )
}
