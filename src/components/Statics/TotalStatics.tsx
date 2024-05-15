import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';

import Spinner from '../Spinner/spinner';
import StaticsCard from './Statics';
import { getTotal } from '../../store/statics/getTotal.statics';

const TotalStaticsComponent = () => {
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
    activeUsers,
    females,
    males,
  } = useSelector((state: RootState) => state.totalstatics);

  useEffect(() => {
    dispatch(getTotal());
  }, [dispatch]);

  return (
    <div className="bg-white p-4">
      <span className="text-2xl font-bold my-4">Total Statics</span>
      {loading && <Spinner />}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StaticsCard text="Active Users" value={activeUsers as number} />
        <StaticsCard text="Users" value={users} />
        <StaticsCard text="Females" value={(females as number) || 0} />
        <StaticsCard text="Males" value={(males as number) || 0} />
        <StaticsCard text="Votes" value={votes} />
        <StaticsCard text="Uploads" value={uploads} />
        <StaticsCard text="Removed Users" value={removedUsers} />
        <StaticsCard text="Reports" value={reports} />
        <StaticsCard text="Shared Uploads" value={sharedUploads} />
      </div>
    </div>
  );
};

export default TotalStaticsComponent;
