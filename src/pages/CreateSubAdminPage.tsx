import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import SubAdminForm from '../components/create-sub-admin';
import DefaultLayout from '../layout/DefaultLayout';

const CreateSubAdminPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Create Sub Admin" />
      <div className="flex flex-col gap-10">
        <SubAdminForm />
      </div>
    </DefaultLayout>
  );
};

export default CreateSubAdminPage;
