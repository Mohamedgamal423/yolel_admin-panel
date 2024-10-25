import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import EnhancementUsersTable from '../components/Tables/EnhancementUsersTable';
import DefaultLayout from '../layout/DefaultLayout';

const EnhancementUsers = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Users" />

      <div className="flex flex-col gap-10">
        <EnhancementUsersTable />
      </div>
    </DefaultLayout>
  );
};

export default EnhancementUsers;
