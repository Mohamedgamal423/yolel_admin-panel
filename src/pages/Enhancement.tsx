import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import EnhancementTable from '../components/Tables/EnhancementTable';
import DefaultLayout from '../layout/DefaultLayout';

const EnhancementPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Enhancement" />
      <div className="flex flex-col gap-10">
        <EnhancementTable />
      </div>
    </DefaultLayout>
  );
};

export default EnhancementPage;
