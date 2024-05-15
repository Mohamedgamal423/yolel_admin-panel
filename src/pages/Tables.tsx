import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import UserTable from '../components/Tables/AllUsers';
import DefaultLayout from '../layout/DefaultLayout';

const Tables = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Users" />

      <div className="flex flex-col gap-10">
        <UserTable />
        {/* <TableTwo />
        <TableThree /> */}
      </div>
    </DefaultLayout>
  );
};

export default Tables;
