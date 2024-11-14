import React from 'react';

interface ISubscriptionType {
    name: string,
    icon: JSX.Element
}

interface ISubscriptionTypeButtonProps {
    item: ISubscriptionType;
    selected: boolean;
    onClick: () => void;
}

const SubscriptionTypeButton: React.FC<ISubscriptionTypeButtonProps> = ({ item, selected, onClick }) => (
    <button
        key={item.name}
        className={`bg-[#5A6465] text-[#BFC6C6] px-4 py-3 rounded-sm text-[14px] hover:bg-[#F2F3F4] hover:text-[#2C3E50] ml-2 ${selected ? 'bg-[#F2F3F4] text-[#2C3E50]' : ''}`}
        onClick={onClick}
    >
        {item.icon}
    </button>
);

export default SubscriptionTypeButton;
