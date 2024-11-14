"use client"

import { useRouter } from 'next/navigation'
import React from 'react'
const Footer: React.FC = () => {
    const router = useRouter();
    const FooterClass: string = "text-[#dbd9d9] decoration-0 no-underline"

    return (
        <div className='mt-10'>
            <div className='flex justify-between items-center'>
                <div>
                    <ul className='flex items-center gap-3'>
                        <li className={FooterClass}>Status</li>
                        <li
                            className={FooterClass}
                            onClick={() => router.push("/history")}
                        >
                            History
                        </li>
                        <li className={FooterClass}>Report issue</li>
                    </ul>
                </div>
                <div>
                    <p className={FooterClass}>Powered by Status.io</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
