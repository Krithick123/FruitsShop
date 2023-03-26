import React from 'react'

const Card = ({data}) => {
  return (
    <>
        
        <div className=' flex flex-col items-center gap-2 px-1 md:px-3 w-64 transform hover:scale-110 duration-200 relative m-10 group'>
            <div className="h-40 md:h-60 cursor-pointer">
                <img src={require(`../assests/${data.image}.jpeg`)} alt='FRUITS IMAGE' className="w-full h-full rounded-lg object-cover shadow-lg"/>
            </div>
            
            <div className='flex flex-col items-center font-body text-slate-500'>
                <span className=' text-sm'>{data.name}</span>
                <span className=' text-sm'>${data.price}</span>
                <span className='text-xs invisible group-hover:visible'>ADD TO CART</span>
            </div>
            <span className='absolute right-12 top-3 md:right-5 md:top-5 bg bg-sky-500 text-white rounded-md p-1 text-xs'>1% off</span>
        </div>
    </>
  )
}

export default Card