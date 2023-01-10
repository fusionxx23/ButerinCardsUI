import React, { useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'

interface Props {
    prevImg: StaticImageData,
    currentImg: StaticImageData,
    goBack: () => void;
    goFoward: () => void;
    load: boolean;
}

export default function ButerinCard({ prevImg, currentImg, goBack, goFoward, load }: Props) {
    const [flip, setFlip] = useState(false);
    const [flip2, setFlip2] = useState(false);
    useEffect(() => {
        if (load)
            startFlip()
    }, [prevImg, load])
    function startFlip() {
        setFlip(true);
        setTimeout(() => { setFlip2(true); }, 150);
    }
    return (
        <div className='flex justify-center mt-24 mb-20'>
            <div className='relative'>
                <div className='hover:-translate-y-1 transition-transform'>
                    <div className={`transition-all  ease-linear duration-300 ${flip ? 'rotate-y ' : ''}`}>
                        {/* Top of Deck */}
                        <Image loading={'eager'} className={`w-56 lg:w-64 xl:w-72 2xl:w-80 ${flip2 ? 'opacity-0' : ''}`} src={prevImg} alt={''}></Image>
                        {/* Second Card */}
                        <Image loading={'eager'} className={`w-56 lg:w-64 xl:w-72 2xl:w-80 absolute top-0 left-0 z-30 ${flip2 ? 'rotate-y' : 'hidden'}`} src={currentImg} alt={''}></Image>
                    </div>
                </div>


                <div className="absolute w-full flex mt-2">
                    <div onClick={goBack} className='w-6 h-6 bg-white flex justify-center items-center rounded-full cursor-pointer mr-2'>
                        <BiLeftArrowAlt size={20} />
                    </div>
                    <div onClick={goFoward} className={`w-6 h-6 bg-white ${!flip ? 'bg-opacity-50 cursor-default' : ''} flex justify-center items-center rounded-full cursor-pointer`}>
                        <BiRightArrowAlt size={20} />
                    </div>
                    <div className='ml-2 font-orbitron font-semibold text-sm'>
                        <h1 >Minted January 02, 2023</h1>
                        <h1>Contributor 0x4343...</h1>
                    </div>

                </div>
            </div>
        </div>
    )
}