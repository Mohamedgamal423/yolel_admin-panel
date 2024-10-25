import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import UserPoints from '../components/Statics/UserPoints.chart';
import DefaultLayout from '../layout/DefaultLayout';

const UserPointsPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="User Points" />
      <UserPoints />
    </DefaultLayout>
  );
};

export default UserPointsPage;
