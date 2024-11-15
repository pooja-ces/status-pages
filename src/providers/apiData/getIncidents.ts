interface IIncidents {
    mainIncidents: {
        activeIncidents: number;
        activeMaintenances: number;
        dailyIncidents: number;
    };
}

export const getIncidents = (): Promise<IIncidents> => {
    return new Promise((resolve) => {
        resolve({
            mainIncidents: {
                activeIncidents: 0,
                activeMaintenances: 0,
                dailyIncidents: 55
            }
        });
    });
};
