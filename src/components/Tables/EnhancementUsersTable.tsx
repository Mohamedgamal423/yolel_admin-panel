import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { User } from '../../store/auth/authState';
import Spinner from '../Spinner/spinner';
import AlertInfo from '../Alert';
import { fetchEnhancementUsers } from '../../store/auth/enhancementsUsers/enhancementUsers.slice';

const EnhancementUsersTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    loading,
    enhancementUsers = [],
    totalPages,
  } = useSelector((state: RootState) => state.enhancementUsers);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchEnhancementUsers({ page: currentPage, pageSize: 10 }));
  }, [dispatch, currentPage]);

  // Calculate indexes for pagination
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  if (loading) {
    return <Spinner />;
  }

  if (!loading && enhancementUsers.length === 0) {
    return <AlertInfo title="No users found" message="No users blocked yet" />;
  }

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        User Page
      </h4>{' '}
      <table className="min-w-full border-gray-300 pb-4">
        <thead className=" border-gray-200 bg-gray-2 dark:bg-meta-4 ">
          <tr>
            <th className="py-3 text-sm font-medium uppercase xsm:text-base">
              Name
            </th>
            <th className="py-3 text-sm font-medium uppercase xsm:text-base text-center">
              Email
            </th>

            <th className="py-3 text-sm font-medium uppercase xsm:text-base text-center">
              UserPoints
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {enhancementUsers.length > 0 &&
            enhancementUsers.map((user: User) => (
              <tr key={user._id}>
                <td className="py-8 whitespace-wrap text-center text-black dark:text-white">
                  {user.name ? user.name : 'N/A'}
                </td>
                <td className="py-8 whitespace-nowrap text-center text-black dark:text-white">
                  {user.email ? user.email : 'Social User'}
                </td>
                <td className="py-8 whitespace-nowrap text-center text-black dark:text-white">
                  {user.email ? user.userPoints : 0}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4 mb-4">
        <button
          className="px-4 py-2 mx-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 mx-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EnhancementUsersTable;
