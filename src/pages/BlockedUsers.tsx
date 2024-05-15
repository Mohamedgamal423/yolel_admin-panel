import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import BlockedUsersTable from '../components/Tables/BlockedUsersTable';
import DefaultLayout from '../layout/DefaultLayout';

const BlockedUsers = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Blocked Users" />

      <div className="flex flex-col gap-10">
        <BlockedUsersTable />
        {/* <TableTwo />
        <TableThree /> */}
      </div>
    </DefaultLayout>
  );
};

export default BlockedUsers;
