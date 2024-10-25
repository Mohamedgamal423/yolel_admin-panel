import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import DeletedUploadsList from '../components/deleted-uploads';
import DefaultLayout from '../layout/DefaultLayout';

const DeletedUploadsPages = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Deleted Uploads" />
      <div className="flex flex-col gap-10">
        <DeletedUploadsList />
      </div>
    </DefaultLayout>
  );
};

export default DeletedUploadsPages;
