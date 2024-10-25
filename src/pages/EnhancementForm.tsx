import EnhancementForm from '../components/add-updateEnhancement';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';

const AddAndUpdateEnhancementFormPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Enhancement" />
      <div className="flex flex-col gap-10">
        <EnhancementForm />
      </div>
    </DefaultLayout>
  );
};

export default AddAndUpdateEnhancementFormPage;
