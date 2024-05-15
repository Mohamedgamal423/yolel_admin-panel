import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';

import Spinner from '../Spinner/spinner';
import StaticsCard from './Statics';
import { getLastMonth } from '../../store/statics/getLastMonth.slice';

const MonthStaticsComponent = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    error,
    loading,
    removedUsers,
    reports,
    sharedUploads,
    uploads,
    users,
    votes,
  } = useSelector((state: RootState) => state.monthstatics);

  useEffect(() => {
    dispatch(getLastMonth());
  }, [dispatch]);

  return (
    <div className="bg-white p-4">
      <span className="text-2xl font-bold my-4">Month Statics</span>
      {loading && <Spinner />}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StaticsCard text="Users" value={users} />
        <StaticsCard text="Votes" value={votes} />
        <StaticsCard text="Uploads" value={uploads} />
        <StaticsCard text="Removed Users" value={removedUsers} />
        <StaticsCard text="Reports" value={reports} />
        <StaticsCard text="Shared Uploads" value={sharedUploads} />
      </div>
    </div>
  );
};

export default MonthStaticsComponent;
