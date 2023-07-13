import React from 'react'

export const ItemInPayment = ({product}) => {
    console.log(product);
    return (
        <div className="flex py-[10px] border-b-[1px] border-b-[#ccc]">
            <img
                src="https://bizweb.dktcdn.net/thumb/large/100/463/111/products/4.jpg?v=1685090490210"
                alt=""
                className="w-[100px]"
            />
            <div>
                <span className="text-[1em] font-medium">
                    {product.product.product_name}
                </span>
                <div className="flex-center mt-[10px]">
                    <div className="text-[0.9em]">
                        {product.product.product_price}₫
                        <span className="ml-1 text-[1.2em] font-bold text-[var(--mainColor)]">
                            x{product.quantity}
                        </span>
                    </div>
                    <div className="font-bold text-[1.1em] text-[var(--accentColor2)]">
                        {product.product.product_price*product.quantity}₫
                    </div>
                </div>
            </div>
        </div>
    )
}
