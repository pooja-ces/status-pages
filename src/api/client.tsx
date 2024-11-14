import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface IState {
    loading: boolean;
    services?: any;
    extrenalServices?: any;
    metrics?: any;
    chartData?: any;
    versionData?: any;
    incidentsData?: any;
    historyData?: any;
}

const DataContext = createContext<IState | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, setState] = useState<IState>({
        loading: true,
        services: undefined,
        extrenalServices: undefined,
        metrics: undefined,
        chartData: undefined,
        versionData: undefined,
        incidentsData: undefined,
        historyData: undefined,
    });

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("/api/data");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setState({
                    loading: false,
                    services: data.services,
                    extrenalServices: data.externalServices,
                    metrics: data.metrics,
                    chartData: data.chartData,
                    versionData: data.versionData,
                    incidentsData: data.incidentsData,
                    historyData: data.historyData,
                });
            } catch (error) {
                console.error("Error fetching data:", error);
                setState((prevState) => ({
                    ...prevState,
                    loading: false,
                }));
            }
        })();
    }, []);

    return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};

export const useData = () => {
    const data = useContext(DataContext);

    if (!data) {
        throw new Error("DataProvider was not provided");
    }

    return data;
};
