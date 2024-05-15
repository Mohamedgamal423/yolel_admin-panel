import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import RemoveUserTable from '../components/Tables/RemovedUser';
import DefaultLayout from '../layout/DefaultLayout';

const RemovedUsers = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Users" />

      <div className="flex flex-col gap-10">
        <RemoveUserTable />
        {/* <TableTwo />
        <TableThree /> */}
      </div>
    </DefaultLayout>
  );
};

export default RemovedUsers;
