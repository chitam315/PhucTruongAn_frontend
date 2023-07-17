import React from 'react'
import { ErrorText } from './style'

export default function InputOrder({ placeholder, className, error, type = 'text', ...props }) {
    return (
        <label className="paying-input-animation" style={{
            position: "relative",
            marginBottom: "30px"
        }}>
            <input
                type={type}
                // name="email"
                // id="email"
                // placeholder="Nhập email của bạn"
                required=""
                style={error && { marginBottom: '10px' }}
                {...props}
            />
            <span>{placeholder}</span>
            {
                error && <ErrorText>{error}</ErrorText>
            }
        </label>

    )
}
