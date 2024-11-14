"use client"

import { useData } from '@/api/client'
import React from 'react'
import { FaCheck } from 'react-icons/fa'
interface IExternalService {
    name: string;
    link: string;
    label: string;
}
const ExternalServices = () => {
    const { extrenalServices } = useData();
    return (
        <div className='mt-12'>
            <h3 className='text-xl opacity-60 mb-3'>External Services</h3>
            <div className='border-[#414142] border rounded'>
                <div className='p-4'>
                    <div className='grid grid-cols-4 text-center flex-wrap gap-4'>
                        {extrenalServices?.map((item: IExternalService, index: number) => (
                            <div key={index} className='relative flex items-center gap-2 justify-center group'>
                                <FaCheck className='text-green-600' />
                                <a className='text-[#dbd9d9] text-base font-bold' href={item.link} target='_blank' rel='noopener noreferrer'>
                                    {item.name}
                                </a>
                                <div className='absolute bottom-4 mb-2 text-white bg-black rounded px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity'>
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ExternalServices