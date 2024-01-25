import React from 'react'

const Coin = ({coin}) => {
    console.log(coin);

  return (
    <>
    <div className="grid grid-col-3 md:grid-cols-4 font-light p-2 rounded border-gray-200 border-b hover:bg-gray-200">
        <div className="flex items-center gap-1 w-full">
            <img className='w-6' src={coin.image} alt={coin.name} />
            <p>{coin.name}</p>
        </div>

        <span>{coin.current_price}</span>

    </div>
    </>
  )
}

export default Coin
