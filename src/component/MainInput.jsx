import React from 'react'
import { useId } from 'react'

export default function MainInput({
    label,
    className = '',
    amount,
    amountChange,
    currencyChange,
    setCurrency = 'inr',
    amountDisable = false,
    options = []
}) {

    let id = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">

                {label && (<label
                    htmlFor={id}
                    className="text-black/40 mb-2 inline-block"
                >{label}</label>)}

                <input
                    className="outline-none w-full bg-transparent py-1.5"
                    id={id}
                    type='number'
                    placeholder='Amount'
                    value={amount}
                    onChange={(e) => amountChange && amountChange(e.target.value)}
                    amountDisable={amountDisable}
                />

            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                    
                    <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={setCurrency}
                    onChange={(e)=> currencyChange && currencyChange(e.target.value)}
                    >
                        {options?.map((val)=>(
                            <option value={val} key={val}>{val}</option>
                        ))}
                    </select>
            </div>
        </div>
    );
}
