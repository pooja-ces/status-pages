"use client"

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import SubscriptionTypeButton from './subscribeDialog/SubscriptionTypeButton';
import SubscriptionContent from './subscribeDialog/SubscriptionContent';
import FooterActions from './subscribeDialog/FooterActions';
interface ISubscriptionType {
    name: string;
    icon: JSX.Element;
}
import { FaCalendar, FaCode, FaComment, FaEnvelope, FaRss, FaSlack, FaTwitter, FaWindows } from 'react-icons/fa';

const SubScribeDialog: React.FC = () => {
    const [buttonType, setButtonType] = useState<string>('email');

    const type: ISubscriptionType[] = [
        { name: 'email', icon: <FaEnvelope /> },
        { name: 'comment', icon: <FaComment /> },
        { name: 'code', icon: <FaCode /> },
        { name: 'rss', icon: <FaRss /> },
        { name: 'window', icon: <FaWindows /> },
        { name: 'slack', icon: <FaSlack /> },
        { name: 'twitter', icon: <FaTwitter /> },
        { name: 'calender', icon: <FaCalendar /> },
    ];

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <button className="bg-white text-black px-[10px] py-[10px] rounded text-sm">SUBSCRIBE</button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            {type.map((item) => (
                                <SubscriptionTypeButton
                                    key={item.name}
                                    item={item}
                                    selected={buttonType === item.name}
                                    onClick={() => setButtonType(item.name)}
                                />
                            ))}
                        </DialogTitle>
                    </DialogHeader>
                    <div className="mx-auto my-6">
                        <SubscriptionContent type={buttonType} />
                    </div>
                    <DialogFooter>
                        <FooterActions buttonType={buttonType} />
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default SubScribeDialog;
