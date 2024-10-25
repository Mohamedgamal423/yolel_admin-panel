import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { useEffect } from 'react';
import { getUploadHistory } from '../store/uploadHistory/uploadHistory.slice';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';
import Spinner from './Spinner/spinner';
import { useParams } from 'react-router-dom';
import AlertInfo from './Alert';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels,
);

const UploadHistory = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { error, loading, uploadHistory } = useSelector(
    (state: RootState) => state.uploadHistory,
  );
  const { id } = useParams();

  useEffect(() => {
    dispatch(getUploadHistory({ uploadId: id as string }));
  }, [dispatch, id]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    <AlertInfo
      title="image has no interaction before"
      message="no one interact with this image "
    />;
  }

  const chartData = {
    labels: uploadHistory?.metaData.map((entry: { date: string }) =>
      new Date(entry.date).toLocaleDateString(),
    ),
    datasets: [
      {
        label: 'Count',
        data: uploadHistory?.metaData.map(
          (entry: { count: number }) => entry.count,
        ),
        backgroundColor: '#4ade80',
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
        text: 'Upload History Counts',
      },
      datalabels: {
        color: 'black',
        anchor: 'end',
        align: 'top',
        font: {
          weight: 'bold',
        },
        formatter: (value: number) => value.toString(),
      },
    },
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-2xl">
        <Bar data={chartData} options={options as any} />
      </div>
    </div>
  );
};

export default UploadHistory;
