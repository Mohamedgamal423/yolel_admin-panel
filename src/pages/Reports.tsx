import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import ReportsRow from '../components/Reports';
import DefaultLayout from '../layout/DefaultLayout';

const Reports = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Reports" />
      <ReportsRow />
    </DefaultLayout>
  );
};

export default Reports;
