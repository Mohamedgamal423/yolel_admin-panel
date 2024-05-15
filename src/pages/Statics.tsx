import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import Divider from '../components/Divider';
import DayStatics from '../components/Statics/DaysStatics';
import MonthStaticsComponent from '../components/Statics/MonthStatics';
import TotalStaticsComponent from '../components/Statics/TotalStatics';
import WeekStatics from '../components/Statics/WeekStaticsComponent';
import DefaultLayout from '../layout/DefaultLayout';

const StaticsPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Statics" />
      <TotalStaticsComponent />
      <Divider />
      <MonthStaticsComponent />
      <Divider />
      <WeekStatics />
      <Divider />
      <DayStatics />
    </DefaultLayout>
  );
};

export default StaticsPage;
