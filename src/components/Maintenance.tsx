"use client"

import { useData } from '@/api/client';
import React from 'react'
interface IVersionData {
    version: string;
    schedule: string;
    components: string[];
    dataCenters: string[];
    description: string[];
}
const Maintenance = () => {
    const { versionData } = useData()
    const mainClass = "items-center grid grid-cols-12 mb-3"
    const headClass = "text-[#dbd9d9] text-base col-span-2"
    const descriptionClass = "text-sm opacity-70 col-span-8"
    return (
        <div className='mt-12'>
            <h3 className='text-xl opacity-60 mb-3'>Scheduled Maintenance</h3>
            {versionData?.map((data: IVersionData, index: number) => (
                <div key={index} className='border-[#414142] border rounded-lg'>
                    <div className='bg-[#00AAF0] rounded-t-lg rounded-t-r-lg rounded-b-none'>
                        <div className='flex justify-between items-center p-4'>
                            <p className='text-white text-base'>Deploy Version {data.version}</p>
                            <p className='opacity-70 text-white'>Planned Maintenance</p>
                        </div>
                    </div>
                    <hr className='border-[#414142]' />
                    <div className='p-4'>
                        <div className={mainClass}>
                            <p className={headClass}>Schedule</p>
                            <p className={descriptionClass}>{data.schedule}</p>
                        </div>
                        <div className={mainClass}>
                            <p className={headClass}>Components</p>
                            <p className={descriptionClass}>{data.components.join(",")}</p>
                        </div>
                        <div className={mainClass}>
                            <p className={headClass}>Data Centers</p>
                            <p className={descriptionClass}>{data.dataCenters.join(",")}</p>
                        </div>
                        <div className='grid grid-cols-12'>
                            <p className={headClass}>Description</p>
                            <div className='col-span-8'>
                                <p className='text-sm opacity-70 mb-4'>
                                    {data.description.map((line, index) => (
                                        <React.Fragment key={index}>
                                            {line}
                                            {index < data.description.length - 1 && <br />}
                                        </React.Fragment>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Maintenance