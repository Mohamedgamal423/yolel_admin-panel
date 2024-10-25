import { Route, Routes } from 'react-router-dom';
import PageTitle from '../PageTitle';
import Reports from '../../pages/Reports';
import Uploads from '../../pages/AllUploads';
import SharedUploads from '../../pages/shared-uploads';
import StaticsPage from '../../pages/Statics';
import Toast from '../../components/ToasTContainer';
import UploadHistoryPage from '../../pages/UploadHistory';
import SignIn from '../../pages/Authentication/SignIn';
import SearchUploadsPage from '../../pages/searchUpload';
import DeletedUploadsPages from '../../pages/DeletedUploads';
import VotesPage from '../../pages/AllVotes';

const SubAdminRoutes = () => {
  return (
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
          path="/history/:id"
          element={
            <>
              <PageTitle title="Upload History" />
              <UploadHistoryPage />
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
          path="/uploads"
          element={
            <>
              <PageTitle title="Uploads | Voter-Admin" />
              <Uploads />
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
          path="/votes"
          element={
            <>
              <PageTitle title="votes | Voter-Admin" />
              <VotesPage />
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
};

export default SubAdminRoutes;
