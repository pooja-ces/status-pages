;

interface IMetric {
    name: string;
}

interface IChartData {
    title: string;
    average: string;
    time: string;
    category: string[];
    data: number[];
}

export const getMetrics = (): Promise<IMetric[]> => {
    return new Promise((resolve) => {
        resolve([
            { name: "Today" },
            { name: "Week" },
            { name: "Month" }
        ]);
    });
};


export const getChartData = (): Promise<IChartData[]> => {
    return new Promise((resolve) => {
        resolve([
            {
                title: "Hosted Status Pages Response Time",
                average: "100%",
                time: "Today",
                category: ["12 PM", "03 PM", "06 PM", "09 PM", "11.Nov", "03 AM", "06 AM", "09 AM"],
                data: [100, 100, 100, 100, 100, 100, 100, 100]
            },
            {
                title: "Hosted Status Pages Response Time",
                average: "368.12ms",
                time: "Today",
                category: ["12 PM", "03 PM", "06 PM", "09 PM", "11.Nov", "03 AM", "06 AM", "09 AM"],
                data: [383, 371, 300, 383, 370, 360, 380, 300]
            },
            {
                title: "API Response Time",
                average: "661.64ms",
                time: "Today",
                category: ["06 AM", "09 AM", "12 PM", "03 PM", "06 PM", "09 PM", "11 PM", "03 AM"],
                data: [483, 471, 400, 483, 470, 460, 480, 400]
            },
            {
                title: "Hosted Status Pages Response Time",
                average: "100%",
                time: "Week",
                category: ["4.Nov", "5.Nov", "6.Nov", "7.Nov", "8.Nov", "9.Nov", "10.Nov", "11.Nov"],
                data: [90, 95, 100, 98, 100, 95, 92, 100]
            },
            {
                title: "Hosted Status Pages Response Time",
                average: "368.12ms",
                time: "Week",
                category: ["4.Nov", "5.Nov", "6.Nov", "7.Nov", "8.Nov", "9.Nov", "10.Nov", "11.Nov"],
                data: [110, 120, 100, 115, 110, 125, 105]
            },
            {
                title: "API Response Time",
                average: "661.64ms",
                time: "Week",
                category: ["4.Nov", "5.Nov", "6.Nov", "7.Nov", "8.Nov", "9.Nov", "10.Nov", "11.Nov"],
                data: [200, 190, 180, 220, 210, 230, 240]
            },
            {
                title: "Hosted Status Pages Response Time",
                average: "100%",
                time: "Month",
                category: [
                    "12.Oct", "14.Oct", "16.Oct", "18.Oct", "20.Oct", "22.Oct", "24.Oct", "26.Oct", "28.Oct", "30.Oct", "1.Nov", "3.Nov", "5.Nov", "7.Nov", "9.Nov", "11.Nov"
                ],
                data: Array(16).fill(100)
            },
            {
                title: "Hosted Status Pages Response Time",
                average: "368.12ms",
                time: "Month",
                category: [
                    "12.Oct", "14.Oct", "16.Oct", "18.Oct", "20.Oct", "22.Oct", "24.Oct", "26.Oct", "28.Oct", "30.Oct", "1.Nov", "3.Nov", "5.Nov", "7.Nov", "9.Nov", "11.Nov"
                ],
                data: [400, 429, 434, 467, 445, 467, 444, 466, 445, 500, 478, 445, 400, 423, 453, 400]
            },
            {
                title: "API Response Time",
                average: "661.64ms",
                time: "Month",
                category: [
                    "12.Oct", "14.Oct", "16.Oct", "18.Oct", "20.Oct", "22.Oct", "24.Oct", "26.Oct", "28.Oct", "30.Oct", "1.Nov", "3.Nov", "5.Nov", "7.Nov", "9.Nov", "11.Nov"
                ],
                data: [700, 729, 734, 767, 745, 767, 744, 766, 745, 700, 878, 745, 700, 723, 753, 700]
            }
        ])
    })
}