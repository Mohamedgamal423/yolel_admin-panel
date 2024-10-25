import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';

import { Upload } from '../store/uploads/upload.state';
import UploadCard from './uploads-card';
import Spinner from './Spinner/spinner';
import AlertInfo from './Alert';
import { getDeletedUploads } from '../store/uploads/deletedUploads.slice';

const DeletedUploadsList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { uploads, loading, totalPages } = useSelector(
    (state: RootState) => state.removedUploads,
  );

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(
      getDeletedUploads({
        page: currentPage,
        pageSize: 10,
      }),
    );
  }, [dispatch, currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  if (loading) {
    return <Spinner />;
  }

  if (!loading && uploads.length === 0) {
    return (
      <AlertInfo title="No uploads found" message="No one upload images yet" />
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {uploads.map((upload: Upload) => (
          <UploadCard
            key={upload._id}
            imageUrl={`https://yolelapp.com/${upload.imageUrl}`}
            ageType={upload.ageType}
            gender={upload.gender}
            interactedVotes={upload.InteractedVotesLength}
            bestVotes={upload.bestVotesLength}
            id={upload._id}
            isDeleted={true}
          />
        ))}
      </div>
      <div className="flex justify-center mt-4 mb-4">
        <button
          className={`px-4 py-2 mx-2 text-sm font-medium text-white bg-blue-500 rounded ${
            currentPage === 1 && 'opacity-50 cursor-not-allowed'
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className={`px-4 py-2 mx-2 text-sm font-medium text-white bg-blue-500 rounded ${
            currentPage === totalPages && 'opacity-50 cursor-not-allowed'
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default DeletedUploadsList;
