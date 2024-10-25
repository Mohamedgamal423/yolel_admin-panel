import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { useEffect } from 'react';
import { fetchEnhancement } from '../../store/enhancement/enhancement.slice';
import Spinner from '../Spinner/spinner';
import { useNavigate } from 'react-router-dom';

const EnhancementTable = () => {
  console.log('i am here');

  const dispatch = useDispatch<AppDispatch>();
  const { enhancement, loading } = useSelector(
    (state: RootState) => state.enhancement,
  );

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchEnhancement());
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Enhancement table
      </h4>
      <table className="min-w-full border-gray-300 pb-4">
        <thead className=" border-gray-200 bg-gray-2 dark:bg-meta-4 ">
          <tr>
            <th className="py-3 text-sm font-medium uppercase xsm:text-base">
              pointCount
            </th>
            <th className="py-3 text-sm font-medium uppercase xsm:text-base">
              voteEnhancementCount
            </th>
            <th className="py-3 text-sm font-medium uppercase xsm:text-base">
              level
            </th>
            <th className="py-3 text-sm font-medium uppercase xsm:text-base">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {enhancement.map((enhancement) => (
            <tr key={enhancement._id}>
              <td className="py-8 whitespace-wrap text-center text-black dark:text-white">
                {enhancement.count}
              </td>
              <td className="py-8 whitespace-nowrap text-center text-black dark:text-white">
                {enhancement.voteEnhancementCount}
              </td>
              <td className="py-8 whitespace-wrap text-center text-black dark:text-white">
                {enhancement.enhancementLevel}
              </td>
              <td className="py-8 whitespace-nowrap text-center text-black dark:text-white">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white px-2 py-2 rounded-md"
                  onClick={() =>
                    navigate(`/enhancement/${enhancement._id.toString()}`)
                  }
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnhancementTable;
