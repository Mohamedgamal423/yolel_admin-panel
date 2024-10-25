import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { useEffect } from 'react';
import { getPoint } from '../../store/statics/totalPointStaics';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Import the plugin
import Loader from '../../common/Loader';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels,
);

const UserPoints = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, ratio, totalPoints, totalUsers } = useSelector(
    (state: RootState) => state.userPoints,
  );

  useEffect(() => {
    dispatch(getPoint());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  // Chart data and options
  const data = {
    labels: ['Total Users', 'Total Points', 'Users/Points Ratio'],
    datasets: [
      {
        label: 'User Statistics',
        data: !loading ? [totalUsers, totalPoints, ratio] : [0, 0, 0],
        backgroundColor: ['#4ade80', '#fbbf24', '#3b82f6'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'User Statistics',
      },
      // Plugin to display data labels
      datalabels: {
        color: 'black',
        anchor: 'end',
        align: 'top',
        font: {
          weight: 'bold',
        },
        formatter: (value: number) => {
          return value ? value.toFixed(2) : '0';
        },
      },
    },
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full">
        <Bar data={data} options={options as any} />
      </div>
    </div>
  );
};

export default UserPoints;
