import DefaultLayout from '../layout/DefaultLayout';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import NotificationForm from '../components/NotificationForm';

const SendNotifications = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Send Notifications" />
      <div className="flex flex-col gap-10">
        <NotificationForm />
      </div>
    </DefaultLayout>
  );
};

export default SendNotifications;
