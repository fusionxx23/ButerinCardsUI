import React, { useEffect, useState } from 'react'
import useWeb3Provider from '../../libs/hooks/web3';

export default function MintButton() {
  const { connect, address, disconnect } = useWeb3Provider(); 
  const [hover, setHover] = useState(false)
  const [colors, setColors]= useState(['bg-red-400', 'bg-yellow-400', 'bg-green-400', 'bg-blue-400', 'bg-purple-400'])

  useEffect(() => {
    setTimeout(() => {
      const arrCopy = [...colors]; 
      const lastItem = arrCopy[arrCopy.length - 1]
      arrCopy.pop(); 
      arrCopy.unshift(lastItem)
      setColors(arrCopy); 
    }, 300)
  }, [colors])
 
  function MintOrConnect() {
    if (!address) {
      connect();
    } else {
      disconnect();
    }
  }
  let boxStyles = 'blur-lg w-full h-full'
  let hoverBoxStyles = 'blur-lg w-full h-full'
  return (
    <div className="flex w-full justify-center ">
      <div className='flex justify-center '>
        <div onClick={MintOrConnect} className={'shadowBox relative lg:mt-12 mt-4 lg:w-52 w-32 select-none flex justify-center bg-primaryYellow cursor-pointer py-1 lg:py-3 font-orbitron' +
          ' font-semibold text-lg  lg:text-xl rounded-md'}   >
          <div className='absolute h-full w-full -z-10 top-0 grid grid-rows-6' style={{ width: '105%', height: '120%' }}>
            {colors.map(c => <div key={c} className={`${c} ` + boxStyles}></div>)}
          </div>
          <h1>{address ? "MINT" : "CONNECT"}</h1>
        </div>
      </div>
    </div>
  )
}
