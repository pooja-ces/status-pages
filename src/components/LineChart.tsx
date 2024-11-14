import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface ILineChartProps {
    data: number[];
    categories: string[];
    series?: {
        name: string;
        data: number[];
        color: string;
    }[];
}

const LineChart: React.FC<ILineChartProps> = ({ data, categories, series }) => {
    const options: Highcharts.Options = {
        chart: {
            type: 'line',
            height: 133,
            backgroundColor: '#2b2b2b',
        },
        title: {
            text: "",
        },
        xAxis: {
            categories: categories,
            gridLineColor: '#000',
            labels: {
                style: {
                    color: '#999',
                },
            },
        },
        yAxis: {
            title: {
                text: null,
            },
            labels: {
                formatter: function () {
                    return `${this.value}`;
                },
                style: {
                    color: '#999',
                },
            },
        },
        tooltip: {
            formatter: function () {
                return `${this.y}%`;
            },
            backgroundColor: 'black',
            style: {
                color: 'white',
            },
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: false,
                    formatter: function () {
                        return `${this.y}%`;
                    },
                    color: '#FF5733',
                },
            },
        },
        series: series
            ? series.map(s => ({
                ...s,
                type: 'line', // Explicitly define the type as 'line'
            }))
            : [{ name: 'Sample Data', data: data, color: 'green', type: 'line' }],
        legend: {
            enabled: false,
        },
        credits: {
            enabled: false,
        },
    };

    return (
        <>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </>
    );
};

export default LineChart;
