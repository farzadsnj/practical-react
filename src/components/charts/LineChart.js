import React from 'react'
import {Line} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import faker from 'faker';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

// 

//     const data = {
//         labels: ['jan', 'feb', 'mar', 'apr', 'may'],
//         dataSets: [
//             {
//                 label: 'sales for 2020(M)',
//                 data: [3,2,2,1,5]
//             }
//         ]
//     }

//   return <Line data={data} />
// }

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const Options = {
    responsive: true,
    plugins: {
    legend: {
        position: 'top'
    },
    title: {
        display: true,
        text: 'Chart.js Line Chart',
    },
    },
};

export const Data = {
    labels,
    datasets: [
    {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    ],
};

function LineChart() {
    <>
        <Options />
        <Data />
    </>
}

  export default LineChart