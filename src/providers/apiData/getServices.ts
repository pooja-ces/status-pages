interface Region {
    name: string;
    status: string;
}

interface Service {
    name: string;
    regions: Region[];
    status: string;
}

// Simulate data fetching functions
export const getServices = (): Promise<Service[]> => {
    return new Promise((resolve) => {
        resolve([
            {
                name: "Hosted Status Pages",
                regions: [
                    { name: "US-East", status: "Operational" },
                    { name: "US-West", status: "Operational" },
                    { name: "Ireland", status: "Operational" },
                    { name: "Toronto", status: "Operational" }
                ],
                status: "Operational"
            },
            {
                name: "Status Notifications",
                regions: [
                    { name: "Email", status: "Operational" },
                    { name: "Webhook", status: "Operational" },
                    { name: "SMS", status: "Operational" },
                    { name: "IRC", status: "Operational" },
                    { name: "Twitter", status: "Operational" },
                    { name: "Microsoft Teams", status: "Operational" },
                    { name: "Slack", status: "Operational" }
                ],
                status: "Operational"
            },
            {
                name: "Developer API",
                regions: [
                    { name: "US-East", status: "Operational" },
                    { name: "US-West", status: "Operational" },
                    { name: "Ireland", status: "Operational" },
                    { name: "Toronto", status: "Operational" }
                ],
                status: "Operational"
            },
            {
                name: "Status API",
                regions: [
                    { name: "US-East", status: "Operational" },
                    { name: "US-West", status: "Operational" },
                    { name: "Ireland", status: "Operational" },
                    { name: "Toronto", status: "Operational" }
                ],
                status: "Operational"
            },
            {
                name: "Dashboard",
                regions: [
                    { name: "US-East", status: "Operational" },
                    { name: "US-West", status: "Operational" },
                    { name: "Ireland", status: "Operational" },
                    { name: "Toronto", status: "Operational" }
                ],
                status: "Operational"
            },
            {
                name: "Website",
                regions: [
                    { name: "US-East", status: "Operational" },
                    { name: "US-West", status: "Operational" },
                    { name: "Ireland", status: "Operational" },
                    { name: "Toronto", status: "Operational" }
                ],
                status: "Operational"
            }
        ]);
    });
};