"use client"

import React from 'react'
import dynamic from 'next/dynamic';
import { worldMill } from '@react-jvectormap/world';
const VectorMap = dynamic(
    async () => {
        const { VectorMap } = await import('@react-jvectormap/core');
        return (props: any) => <VectorMap {...props} map={worldMill} />;
    },
    { ssr: false }
);
const Map = () => {
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
    return (
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
    )
}

export default Map