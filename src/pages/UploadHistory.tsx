import DefaultLayout from '../layout/DefaultLayout';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import UploadHistory from '../components/uploadHistory';

const UploadHistoryPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="History" />
      <UploadHistory />
    </DefaultLayout>
  );
};

export default UploadHistoryPage;
