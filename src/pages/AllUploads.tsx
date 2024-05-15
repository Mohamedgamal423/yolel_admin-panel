import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import UploadsList from '../components/uploads-list';
import DefaultLayout from '../layout/DefaultLayout';

const Uploads = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Uploads" />

      <div className="flex flex-col gap-10">
        <UploadsList />
      </div>
    </DefaultLayout>
  );
};

export default Uploads;
