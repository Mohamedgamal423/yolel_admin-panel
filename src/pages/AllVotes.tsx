import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import Votes from '../components/votes';
import DefaultLayout from '../layout/DefaultLayout';

const VotesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Votes" />
      <Votes />
    </DefaultLayout>
  );
};

export default VotesPage;
