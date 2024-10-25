import { Route, Routes } from 'react-router-dom';
import PageTitle from '../PageTitle';
import FormElements from '../../pages/Form/FormElements';
import FormLayout from '../../pages/Form/FormLayout';
import Profile from '../../pages/Profile';
import Settings from '../../pages/Settings';
import Tables from '../../pages/Tables';
import Buttons from '../../pages/UiElements/Buttons';
import RemovedUsers from '../../pages/RemovedUser.table';
import Reports from '../../pages/Reports';
import Uploads from '../../pages/AllUploads';
import SharedUploads from '../../pages/shared-uploads';
import VotesPage from '../../pages/AllVotes';
import StaticsPage from '../../pages/Statics';
import Toast from '../../components/ToasTContainer';
import SendNotifications from '../../pages/SendNotification';
import BlockedUsers from '../../pages/BlockedUsers';
import UserPointsPage from '../../pages/UserPoints';
import EnhancementUsers from '../../pages/EnhancementUsers';
import EnhancementPage from '../../pages/Enhancement';
import UploadHistoryPage from '../../pages/UploadHistory';
import AddEnhancementFormPage from '../../pages/EnhancementForm';
import DeletedUploadsPages from '../../pages/DeletedUploads';
import SearchUploadsPage from '../../pages/searchUpload';
import CreateSubAdminPage from '../../pages/CreateSubAdminPage';
import SignIn from '../../pages/Authentication/SignIn';

const AdminRoutes = () => {
  return (
    <>
      <>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <PageTitle title="Statics" />
                <StaticsPage />
              </>
            }
          />

          <Route
            path="/statics"
            element={
              <>
                <PageTitle title="Statics" />
                <StaticsPage />
              </>
            }
          />

          <Route
            path="/profile"
            element={
              <>
                <PageTitle title="Profile" />
                <Profile />
              </>
            }
          />
          <Route
            path="/forms/form-elements"
            element={
              <>
                <PageTitle title="Form Elements" />
                <FormElements />
              </>
            }
          />
          <Route
            path="/forms/form-layout"
            element={
              <>
                <PageTitle title="Form Layout" />
                <FormLayout />
              </>
            }
          />
          <Route
            path="/tables"
            element={
              <>
                <PageTitle title="Users" />
                <Tables />
              </>
            }
          />
          <Route
            path="/blockedList"
            element={
              <>
                <PageTitle title="Users" />
                <BlockedUsers />
              </>
            }
          />
          <Route
            path="/removed-users"
            element={
              <>
                <PageTitle title="Tables | Voter-Admin" />
                <RemovedUsers />
              </>
            }
          />
          <Route
            path="/enhancement-users"
            element={
              <>
                <PageTitle title="Enhancement Users" />
                <EnhancementUsers />
              </>
            }
          />
          <Route
            path="/add-sub-admin"
            element={
              <>
                <PageTitle title="Add Sub Admin" />
                <CreateSubAdminPage />
              </>
            }
          />
          <Route
            path="/history/:id"
            element={
              <>
                <PageTitle title="Upload History" />
                <UploadHistoryPage />
              </>
            }
          />
          <Route
            path="/newEnhancement"
            element={
              <>
                <PageTitle title="Enhancement Form" />
                <AddEnhancementFormPage />
              </>
            }
          />
          <Route
            path="/enhancement/:id"
            element={
              <>
                <PageTitle title="Enhancement Form" />
                <AddEnhancementFormPage />
              </>
            }
          />
          <Route
            path="/enhancement"
            element={
              <>
                <PageTitle title="Enhancement" />
                <EnhancementPage />
              </>
            }
          />
          <Route
            path="/reports"
            element={
              <>
                <PageTitle title="Reports | Voter-Admin" />
                <Reports />
              </>
            }
          />
          <Route path="users-points" element={<UserPointsPage />} />
          <Route
            path="/uploads"
            element={
              <>
                <PageTitle title="Uploads | Voter-Admin" />
                <Uploads />
              </>
            }
          />

          <Route
            path="/search"
            element={
              <>
                <PageTitle title="Search Uploads | Voter-Admin" />
                <SearchUploadsPage />
              </>
            }
          />

          <Route
            path="/deleted-images"
            element={
              <>
                <PageTitle title="Deleted Images " />
                <DeletedUploadsPages />
              </>
            }
          />
          <Route
            path="/shared"
            element={
              <>
                <PageTitle title="shared uploads | Voter-Admin" />
                <SharedUploads />
              </>
            }
          />
          <Route
            path="/votes"
            element={
              <>
                <PageTitle title="votes | Voter-Admin" />
                <VotesPage />
              </>
            }
          />

          <Route
            path="/send-notification"
            element={
              <>
                <PageTitle title="notifications | Voter-Admin" />
                <SendNotifications />
              </>
            }
          />
          <Route
            path="/settings"
            element={
              <>
                <PageTitle title="Settings" />
                <Settings />
              </>
            }
          />
          <Route
            path="/ui/buttons"
            element={
              <>
                <PageTitle title="Buttons" />
                <Buttons />
              </>
            }
          />
          <Route
            path="/auth/signin"
            element={
              <>
                <PageTitle title="Signin" />
                <SignIn />
              </>
            }
          />
        </Routes>
        <Toast />
      </>
    </>
  );
};

export default AdminRoutes;
