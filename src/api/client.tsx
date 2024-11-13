
import { staticDataProvider } from "@/providers/staticData";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface State {
    loading: boolean;
    services?: any;
    extrenalServices?: any;
    metrics?: any;
    chartData?: any;
    versionData?: any;
    incidentsData?: any;
    historyData?: any;
}


const DataContext = createContext<State | undefined>(undefined);

const createApiClient = () => staticDataProvider;

interface DataProviderProps {
    children: ReactNode;
}

export const DataProvider: React.FC<{
    children: ReactNode | ReactNode[] | null;
}> = ({ children }) => {
    const api = createApiClient();

    const [state, setState] = useState<State>({
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
            if (api.getServices && api.getExternalService && api.getMetrics) {
                setState({
                    loading: false,
                    services: await api.getServices(),
                    extrenalServices: await api.getExternalService(),
                    metrics: await api.getMetrics(),
                    chartData: await api.getChartData(),
                    versionData: await api.getVersion(),
                    incidentsData: await api.getIncidents(),
                    historyData: await api.getHistoryData(),
                });
            } else {
                console.error("API client methods are undefined.");
            }
        })();
    }, [api]);

    return <DataContext.Provider value={state}> {children} </DataContext.Provider>;
};

export const useData = () => {
    const data = useContext(DataContext);

    if (!data) {
        throw new Error("DataProvider was not provided");
    }

    return data;
};
