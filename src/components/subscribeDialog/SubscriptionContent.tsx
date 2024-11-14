import React from 'react';

interface ISubscriptionContentProps {
    type: string;
}

const SubscriptionContent: React.FC<ISubscriptionContentProps> = ({ type }) => {
    switch (type) {
        case 'email':
            return (
                <>
                    <h4 className="text-center mb-8 text-lg">Subscribe to receive status updates by email</h4>
                    <input type="email" placeholder="Email" className="w-full p-2 mt-2 mb-4 border rounded-md focus:shadow-blue-400 focus:border-none" />
                </>
            );
        case 'comment':
            return (
                <>
                    <h4 className="text-center mb-8 text-lg">Subscribe to receive status updates by text message</h4>
                    <input type="text" placeholder="Phone Number" className="w-full p-2 mt-2 border rounded-md focus:shadow-blue-400 focus:border-none" />
                    <p className="text-[#737373] mt-2">Example: 201-555-1717</p>
                </>
            );
        case 'code':
            return (
                <>
                    <h4 className="text-center mb-8 text-lg">Subscribe to receive status updates by webhook</h4>
                    <input type="text" placeholder="http://example.com/hook" className="w-full p-2 mt-2 border rounded-md focus:shadow-blue-400 focus:border-none" />
                    <input type="email" placeholder="Email" className="w-full p-2 mt-2 border rounded-md focus:shadow-blue-400 focus:border-none" />
                </>
            );
        case 'rss':
            return <button className="py-4 px-5 text-xl bg-white border border-gray-300 hover:bg-gray-200 rounded">RSS Feed</button>;
        case 'window':
            return (
                <>
                    <h4 className="text-center mb-8 text-lg">Subscribe to receive status updates in Microsoft Teams</h4>
                    <div className="my-4">
                        <input
                            type="text"
                            placeholder="https://example.webhook.office.com/webhook-id"
                            className="w-full p-2 mt-2 border rounded-md focus:shadow-blue-400 focus:border-none"
                        />
                        <p className="text-[#737373] mt-1">
                            Enter your Microsoft Teams webhook.
                            <a
                                className="text-[#dbd9d9]"
                                target="_blank"
                                href="https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook?tabs=newteams%2Cdotnet#add-an-incoming-webhook-to-a-teams-channel"
                            >
                                View Instructions
                            </a>
                        </p>
                    </div>
                    <div className="my-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-2 mt-2 border rounded-md focus:shadow-blue-400 focus:border-none"
                        />
                        <p className="text-[#737373] mt-1">Email address for managing subscription</p>
                    </div>
                </>
            );
        case 'slack':
            return (
                <>
                    <div className="text-center">
                        <h4 className="text-center mb-8 text-lg">Subscribe to receive status updates in Slack</h4>
                        <button>
                            <img src="https://platform.slack-edge.com/img/add_to_slack.png" height={39} width={139} alt="Add to Slack" />
                        </button>
                    </div>
                </>
            )
        case 'twitter':
            return (
                <div className="text-center">
                    <h4 className="text-center mb-8 text-lg">Follow our status updates on Twitter</h4>
                    <button className="py-2 px-4 text-xl bg-white border border-gray-300 hover:bg-gray-200 rounded">
                        @statusio
                    </button>
                </div>
            )
        case 'calender':
            return (
                <div className="text-center">
                    <h4 className="text-center mb-8 text-lg">Subscribe to receive status updates via iCalendar</h4>
                    <button className="py-2 px-4 text-xl bg-white border border-gray-300 hover:bg-gray-200 rounded">
                        iCalendar Feed
                    </button>
                </div>
            )
        default:
            return null;
    }
};

export default SubscriptionContent;
