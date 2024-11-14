interface IVersion {
    version: string;
    schedule: string;
    components: string[];
    dataCenters: string[];
    description: string[];
}
// Simulate data fetching functions
export const getVersion = (): Promise<IVersion[]> => {
    return new Promise((resolve) => {
        resolve([
            {
                version: "1.7.3",
                schedule: "November 11, 2024 23:00 - 23:15 UTC",
                components: ["Hosted Status Pages", "Developer API", "Status API", "Dashboard", "Website"],
                dataCenters: ["US-East", " US-West", "Ireland", "Toronto"],
                description: [
                    "We will be deploying the next version of Status.io.",
                    "There will be no downtime during this maintenance."
                ]
            }
        ]);
    });
};
