import React, { useState } from 'react'

const Filter = () => {
    const [selectedItem, setSelectedItem] = useState(1);
    return (
        <>
            <section className='my-10 py-3 w-4/6 mx-auto  flex flex-col md:flex-row space-y-6 md:space-y-0 justify-around'>
                <button onClick={() => setSelectedItem(1)}
                    className={`filter font-display ${selectedItem === 1 ? 'bg-green-500 text-white':'text-slate-500'}`}
                >Latest</button>
                <button onClick={() => setSelectedItem(2)} className={`filter font-display  ${selectedItem === 2 ? 'bg-green-500 text-white':'text-slate-500'}`}><a href='#bestSeller'>Best Sellers</a></button>
                <button onClick={() => setSelectedItem(3)} className={`filter font-display ${selectedItem === 3 ? 'bg-green-500 text-white':'text-slate-500'}`}><a href='#Special'>Special</a></button>
            </section>
        </>
    )
}

export default Filter