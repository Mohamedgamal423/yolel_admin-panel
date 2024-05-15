import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import SharedUploadsList from '../components/shared-uploads-list';
import DefaultLayout from '../layout/DefaultLayout';

const SharedUploads = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Shared-Uploads" />

      <div className="flex flex-col gap-10">
        <SharedUploadsList />
      </div>
    </DefaultLayout>
  );
};

export default SharedUploads;
