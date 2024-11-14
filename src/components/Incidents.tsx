"use client"

import { useData } from '@/api/client'
import React from 'react'
const Incidents = () => {
    const { incidentsData } = useData();
    const IncidentClass = "text-6xl text-center block"
    const nameClass = "text-center mt-3"

    return (
        <div className='mt-12'>
            <div className='border-[#414142] border rounded'>
                <div className='p-4'>
                    <div className='flex justify-center items-center gap-40'>
                        <div>
                            <p></p>
                            <p className={IncidentClass}>{incidentsData?.mainIncidents?.activeIncidents}</p>
                            <p className={nameClass}>Active Incidents</p>
                        </div>
                        <div>
                            <p></p>
                            <p className={IncidentClass}>{incidentsData?.mainIncidents?.activeMaintenances}</p>
                            <p className={nameClass}>Active Maintenances</p>
                        </div>
                        <div>
                            <p></p>
                            <p className={IncidentClass}>{incidentsData?.mainIncidents?.dailyIncidents}</p>
                            <p className={nameClass}>Days Since Last Incident</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Incidents