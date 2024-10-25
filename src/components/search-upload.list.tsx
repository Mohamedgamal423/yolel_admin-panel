import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';

import { Upload } from '../store/uploads/upload.state';
import UploadCard from './uploads-card';
import Spinner from './Spinner/spinner';
import AlertInfo from './Alert';
import { useNavigate } from 'react-router-dom';
import { getSearchedUploads } from '../store/uploads/searchedUploas.slice';

const SearchUploads = () => {
  const navigate = useNavigate();

  // State for the percentage dropdown
  const [percentageRange, setPercentageRange] = useState('lessThan33');

  const dispatch = useDispatch<AppDispatch>();
  const { uploads, loading, totalPages } = useSelector(
    (state: RootState) => state.searchUpload,
  );

  const [currentPage, setCurrentPage] = useState(1);

  // Convert percentageRange to actual percentage values
  const getPercentageValue = (range: string) => {
    switch (range) {
      case 'lessThan33':
        return 32;
      case 'between33and67':
        return 50;
      case 'moreThan67':
        return 70;
      default:
        return 32;
    }
  };

  const percentage = getPercentageValue(percentageRange);

  useEffect(() => {
    dispatch(
      getSearchedUploads({
        page: currentPage,
        pageSize: 10,
        percentage,
      }),
    );
  }, [dispatch, currentPage, percentage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  // Handle dropdown selection change
  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPercentageRange(e.target.value);
    setCurrentPage(1); // Reset to the first page when changing percentage range
  };

  if (loading) {
    return <Spinner />;
  }

  if (!loading && uploads.length === 0) {
    return (
      <AlertInfo
        title="No uploads found"
        message="No one has uploaded images yet"
      />
    );
  }

  const handleNavigateToHistory = (id: string) => {
    navigate(`/history/${id}`);
  };

  return (
    <>
      {/* Dropdown for percentage selection */}
      <div className="mb-4">
        <label htmlFor="percentageRange" className="mr-2 text-lg font-medium">
          Select Percentage Range:
        </label>
        <select
          id="percentageRange"
          value={percentageRange}
          onChange={handleDropdownChange}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="lessThan33">Less than 33%</option>
          <option value="between33and67">Between 33% and 67%</option>
          <option value="moreThan67">More than 67%</option>
        </select>
      </div>

      {/* Upload Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {uploads.map((upload: Upload) => (
          <UploadCard
            key={upload._id}
            imageUrl={`https://yolelapp.com/${upload.imageUrl}`}
            ageType={upload.ageType}
            gender={upload.gender}
            interactedVotes={upload.InteractedVotes.length}
            bestVotes={upload.bestVotes.length}
            handleNavigateToHistory={() => handleNavigateToHistory(upload._id)}
            isSearched={true}
          />
        ))}
      </div>

      {/* Pagination Controls */}
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

export default SearchUploads;
