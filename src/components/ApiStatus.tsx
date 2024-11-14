import React from 'react';

interface IApiStatusProps {
    name: string;
    status: number;
}

const ApiStatus: React.FC<IApiStatusProps> = ({ name, status }) => {
    const statusText = status === 200 ? 'Up' : 'Down';
    const statusColor = status === 200 ? 'text-green-500' : 'text-red-500';

    return (
        <div className="flex items-center space-x-2">
            <span className="font-medium">{name}</span>
            <span className={`font-semibold ${statusColor}`}>{statusText}</span>
        </div>
    );
}

export default ApiStatus;
