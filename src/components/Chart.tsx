"use client"

import React, { useEffect, useState } from 'react'
import { useData } from '@/api/client'
import LineChart from './LineChart';
interface IMetric {
    name: string;
    data: any[];
    category: string[];
    average: string;
    title: string;
}
const Chart = () => {
    const { metrics, chartData } = useData()
    const [statusData, setStatusData] = useState<any>({});
    const [activeButton, setActiveButton] = useState<string>("Today");
    const [filteredData, setFilteredData] = useState<IMetric[]>([]);

    useEffect(() => {
        setStatusData(metrics);
        const defaultData = chartData?.filter((item: { time: string; }) => item.time === 'Today');
        setFilteredData(defaultData);
    }, [metrics, chartData]);

    const handleTimeChange = (time: string) => {
        setActiveButton(time);
        setFilteredData(chartData?.filter((item: { time: string; }) => item.time === time));
    };
    return (
        <div className='mt-12'>
            <div className='flex justify-between items-center mb-4'>
                <h3 className='text-xl opacity-60'>Metrics</h3>
                <div className='flex items-center gap-3'>
                    {metrics?.map((item: IMetric) => (
                        <div
                            key={item.name}
                            className={`${activeButton === item.name ? "text-black bg-white" : "text-[#BFC6C6] bg-[#5A6465]"} rounded pt-1 pb-1 px-[14px] hover:bg-white hover:text-black cursor-pointer`}
                            onClick={() => handleTimeChange(item.name)}
                        >
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            {filteredData?.map((item: IMetric, index) => (
                <div key={`${item.title}-${index}`} className='border-[#414142] border rounded mb-4'>
                    <div className='p-4'>
                        <div className='flex justify-between items-center'>
                            <p>{item.title}</p>
                            <p>{item.average}</p>
                        </div>
                        <div>
                            <LineChart data={item.data} categories={item.category} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Chart