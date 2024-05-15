import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Buttons from './pages/UiElements/Buttons';
import RemovedUsers from './pages/RemovedUser.table';
import Reports from './pages/Reports';
import Uploads from './pages/AllUploads';
import SharedUploads from './pages/shared-uploads';
import VotesPage from './pages/AllVotes';
import withAuth from './hoc/withAuth';
import StaticsPage from './pages/Statics';
import Toast from './components/ToasTContainer';
import SendNotifications from './pages/SendNotification';
import BlockedUsers from './pages/BlockedUsers';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        {/* <Route
          path="/"
          element={
            <>
              <PageTitle title="Profile" />
              <Profile />
            </>
          }
        /> */}

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
          path="/reports"
          element={
            <>
              <PageTitle title="Reports | Voter-Admin" />
              <Reports />
            </>
          }
        />
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
  );
}

export default withAuth(App);
