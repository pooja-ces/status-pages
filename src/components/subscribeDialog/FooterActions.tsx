import React from 'react';
import { DialogClose } from '../ui/dialog';

interface IFooterActionsProps {
    buttonType: string;
}

const FooterActions: React.FC<IFooterActionsProps> = ({ buttonType }) => (
    <div className="border-t pt-6">
        {(buttonType === 'email' || buttonType === 'comment' || buttonType === 'code' || buttonType === 'window') ? (
            <>
                <DialogClose asChild>
                    <button className="bg-white border border-gray-300 px-4 py-2 rounded hover:bg-gray-200">Close</button>
                </DialogClose>
                <button className="bg-white border border-gray-300 px-4 py-2 rounded mr-2 hover:bg-gray-200">
                    {buttonType === 'comment' ? 'Manage Subscription' : 'Subscribe'}
                </button>
            </>
        ) : (
            <DialogClose asChild>
                <button className="bg-white border border-gray-300 px-4 py-2 rounded hover:bg-gray-200">Close</button>
            </DialogClose>
        )}
    </div>
);

export default FooterActions;
