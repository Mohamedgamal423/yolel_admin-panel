import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import SearchUploads from '../components/search-upload.list';
import DefaultLayout from '../layout/DefaultLayout';

const SearchUploadsPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Uploads" />

      <div className="flex flex-col gap-10">
        <SearchUploads />
      </div>
    </DefaultLayout>
  );
};

export default SearchUploadsPage;
