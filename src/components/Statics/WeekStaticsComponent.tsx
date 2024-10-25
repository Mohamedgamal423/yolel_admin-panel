import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';

import Spinner from '../Spinner/spinner';
import { getLastWeek } from '../../store/statics/getLastWeek.slice';
import StaticsCard from './Statics';

const WeekStatics = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    error,
    loading,
    removedUsers,
    reports,
    sharedUploads,
    uploads,
    users,
    removedUploads,
    votes,
  } = useSelector((state: RootState) => state.weekstatics);

  useEffect(() => {
    dispatch(getLastWeek());
  }, [dispatch]);

  return (
    <div className="bg-white p-4">
      <span className="text-2xl font-bold my-4">Week Statics</span>
      {loading && <Spinner />}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StaticsCard text="Users" value={users} />
        <StaticsCard text="Votes" value={votes} />
        <StaticsCard text="Uploads" value={uploads} />
        <StaticsCard text="Removed Users" value={removedUsers} />
        <StaticsCard text="Reports" value={reports} />
        <StaticsCard text="Shared Uploads" value={sharedUploads} />
        <StaticsCard text="Removed Image" value={removedUploads} />
      </div>
    </div>
  );
};

export default WeekStatics;
