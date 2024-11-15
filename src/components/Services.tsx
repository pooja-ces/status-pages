"use client"

import { useData } from '@/api/client'
import React from 'react'
interface IService {
    name: string;
    status: string;
    regions: { name: string }[];
}
const Services = () => {
    const { services } = useData()
    return (

        <div className='mt-12'>
            <div className='border-[#414142] border rounded'>
                {services?.map((data: IService) => (
                    <div key={data.name}>
                        <div className='flex justify-between items-center pt-2 px-4 pb-[15px]'>
                            <div>
                                <p className='text-lg pb-2'>{data.name}</p>
                                <div className='flex gap-3'>
                                    {data.regions.map((items, index) => (
                                        <span key={index} className="inline-flex items-center rounded bg-green-600 px-1 py-0.5 text-[12px] font-medium text-white ring-1 ring-inset ring-gray-500/10">
                                            {items.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className='text-[#27AE60]'>{data.status}</p>
                            </div>
                        </div>
                        <hr className='border-[#414142]' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services