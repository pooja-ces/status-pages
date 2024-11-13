"use client";
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import LineChart from './LineChart';
import { FaCheck } from 'react-icons/fa';
import SubScribeDialog from './SubScribeDialog';
import Footer from './Footer';
import Header from './Header';
import { useData } from '@/api/client';
import { worldMill } from '@react-jvectormap/world';


const VectorMap = dynamic(
    async () => {
        const { VectorMap } = await import('@react-jvectormap/core');
        return (props: any) => <VectorMap {...props} map={worldMill} />;
    },
    { ssr: false }
);


interface Service {
    name: string;
    status: string;
    regions: { name: string }[];
}

interface ExternalService {
    name: string;
    link: string;
    label: string;
}

interface IncidentData {
    mainIncidents: {
        activeIncidents: number;
        activeMaintenances: number;
        dailyIncidents: number;
    };
}

interface Metric {
    name: string;
    data: any[];
    category: string[];
    average: string;
    title: string;
}

interface VersionData {
    version: string;
    schedule: string;
    components: string[];
    dataCenters: string[];
    description: string[];
}

// Main Component
const OverallStatus = () => {
    const { services, extrenalServices, metrics, chartData, versionData, incidentsData } = useData();
    const [statusData, setStatusData] = useState<any>({});
    const [activeButton, setActiveButton] = useState<string>("Today");
    const [filteredData, setFilteredData] = useState<Metric[]>([]);

    useEffect(() => {
        setStatusData(metrics);
        const defaultData = chartData && chartData.filter((item: { time: string; }) => item.time === 'Today');
        setFilteredData(defaultData);
    }, [metrics, chartData]);

    const markers = [
        { latLng: [37.7749, -122.4194], name: 'US-West' },
        { latLng: [43.65107, -79.347015], name: 'Toronto' },
        { latLng: [40.712776, -74.005974], name: 'US-East' },
        { latLng: [53.349805, -6.26031], name: 'Ireland' }
    ];

    const mapConfig = {
        regionStyle: {
            initial: {
                fill: '#dbd9d9',
            },
        },
        markers: markers,
        markerStyle: {
            initial: {
                fill: '#4CAF50',
                stroke: '#383f47',
                r: 6.5,
            },
            hover: {
                fill: '#2e7d32',
            },
        },
    };

    const handleTimeChange = (time: string) => {
        setActiveButton(time);
        setFilteredData(chartData.filter((item: { time: string; }) => item.time === time));
    };

    return (
        <div className='container px-12 md:px-0 md:mx-auto text-white pt-8'>
            <Header />
            <div className='pb-7'>
                <div className='bg-[#27AE60] rounded'>
                    <div className='flex justify-between items-center h-[52px] p-[15px] '>
                        <div className='text-white text-base font-bold'>All Systems Operational</div>
                        <div className='text-white text-base'>Updated a few seconds ago</div>
                    </div>
                </div>
                <div className='mt-12'>
                    <div className='border-[#414142] border rounded'>
                        <div className='p-4'>
                            <div className='flex justify-center items-center gap-40'>
                                <div>
                                    <p></p>
                                    <p className='text-6xl text-center block'>{incidentsData?.mainIncidents?.activeIncidents}</p>
                                    <p className='text-center mt-3'>Active Incidents</p>
                                </div>
                                <div>
                                    <p></p>
                                    <p className='text-6xl text-center block'>{incidentsData?.mainIncidents?.activeMaintenances}</p>
                                    <p className='text-center mt-3'>Active Maintenances</p>
                                </div>
                                <div>
                                    <p></p>
                                    <p className='text-6xl text-center block'>{incidentsData?.mainIncidents?.dailyIncidents}</p>
                                    <p className='text-center mt-3'>Days Since Last Incident</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-12'>
                    <div className='border-[#414142] border rounded'>
                        {services?.map((data: Service) => (
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
                <div className='mt-12'>
                    <h3 className='text-xl opacity-60 mb-3'>External Services</h3>
                    <div className='border-[#414142] border rounded'>
                        <div className='p-4'>
                            <div className='grid grid-cols-4 text-center flex-wrap gap-4'>
                                {extrenalServices?.map((item: ExternalService, index: number) => (
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
                <div className='mt-12'>
                    <h3 className='text-xl opacity-60 mb-3'>Locations</h3>
                    <div className='border-[#414142] border rounded'>
                        <div className='p-4'>
                            <div className="map-container">
                                <VectorMap
                                    map={worldMill}
                                    options={{
                                        regionStyle: mapConfig.regionStyle,
                                        markers: mapConfig.markers,
                                        markerStyle: mapConfig.markerStyle,
                                    }}
                                    style={{
                                        height: 400,
                                        backgroundColor: "#2b2b2b"
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-12'>
                    <div className='flex justify-between items-center mb-4'>
                        <h3 className='text-xl opacity-60'>Metrics</h3>
                        <div className='flex items-center gap-3'>
                            {metrics?.map((item: Metric) => (
                                <div
                                    key={item.name} // Ensure the key is unique here
                                    className={`${activeButton === item.name ? "text-black bg-white" : "text-[#BFC6C6] bg-[#5A6465]"} rounded pt-1 pb-1 px-[14px] hover:bg-white hover:text-black cursor-pointer`}
                                    onClick={() => handleTimeChange(item.name)}
                                >
                                    <p>{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {filteredData?.map((item: Metric, index) => (
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
                <div className='mt-12'>
                    <h3 className='text-xl opacity-60 mb-3'>Scheduled Maintenance</h3>
                    {versionData?.map((data: VersionData, index: number) => (
                        <div key={index} className='border-[#414142] border rounded-lg'>
                            <div className='bg-[#00AAF0] rounded-t-lg rounded-t-r-lg rounded-b-none'>
                                <div className='flex justify-between items-center p-4'>
                                    <p className='text-white text-base'>Deploy Version {data.version}</p>
                                    <p className='opacity-70 text-white'>Planned Maintenance</p>
                                </div>
                            </div>
                            <hr className='border-[#414142]' />
                            <div className='p-4'>
                                <div className='items-center grid grid-cols-12 mb-3'>
                                    <p className='text-[#dbd9d9] text-base col-span-2'>Schedule</p>
                                    <p className='text-sm opacity-70 col-span-8'>{data.schedule}</p>
                                </div>
                                <div className='items-center grid grid-cols-12 mb-3'>
                                    <p className='text-[#dbd9d9] text-base col-span-2'>Components</p>
                                    <p className='text-sm opacity-70 col-span-8'>{data.components.join(",")}</p>
                                </div>
                                <div className='items-center grid grid-cols-12 mb-3'>
                                    <p className='text-[#dbd9d9] text-base col-span-2'>Data Centers</p>
                                    <p className='text-sm opacity-70 col-span-8'>{data.dataCenters.join(",")}</p>
                                </div>
                                <div className='grid grid-cols-12'>
                                    <p className='text-[#dbd9d9] text-base col-span-2'>Description</p>
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
                <div className='mt-12'>
                    <div className='border-[#414142] border rounded'>
                        <div className='p-4'>
                            <div className='flex justify-center items-center'>
                                <SubScribeDialog />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default OverallStatus;
