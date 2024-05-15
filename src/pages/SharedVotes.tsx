import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import SharedVotes from '../components/SharedVotes';
import DefaultLayout from '../layout/DefaultLayout';

const SharedVotesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Shared Votes" />
      <SharedVotes />
    </DefaultLayout>
  );
};

export default SharedVotesPage;
