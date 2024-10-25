import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import withAuth from './hoc/withAuth';
import AdminRoutes from './components/routes/adminRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store/store';
import { getUserData } from './store/auth/userData/getUserData.slice';
import SubAdminRoutes from './components/routes/sub-adminRoutes';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch<AppDispatch>();
  const { pathname } = useLocation();
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const {
    loading: userLoading,
    user,
    error,
  } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (token !== '') {
      dispatch(getUserData());
    }
  }, [dispatch, token]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {!userLoading && user?.role && user?.role === 'admin' ? (
        <AdminRoutes />
      ) : (
        <SubAdminRoutes />
      )}
    </>
  );
}

export default withAuth(App);
