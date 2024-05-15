import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { getReports } from '../store/reports/getReports/report.slice';

import Spinner from './Spinner/spinner';
import PopUp from './PopUp';
import DeleteReport from './DeleteReport';
import BlockUser from './BlockUser';
import DeleteReportWithAssociated from './DeleteReportWithAssociated';
import { Report } from '../store/reports/getReports/report.state';
import AlertInfo from './Alert';

type popup = 'block' | 'delete' | 'deleteWithAssociation' | null;

const ReportsRow = () => {
  const [reportId, setReportId] = useState('');
  const [userId, setUserId] = useState('');

  // state for handle popup open for delete report
  const [openPopup, setOpenPopup] = useState(false);
  const HandleRemovePopUp = () => setOpenPopup(false);

  // state for handle block user pop up
  const [currentPopup, setCurrentPopup] = useState<popup>(null);

  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, reports, totalPages } = useSelector(
    (state: RootState) => state.reports,
  );

  const { loading: deleteReportWithAssociatedLoading } = useSelector(
    (state: RootState) => state.deleteReportWithAssociated,
  );

  const { loading: blockUserLoading } = useSelector(
    (state: RootState) => state.blockUser,
  );

  const { loading: deleteLoading } = useSelector(
    (state: RootState) => state.deleteReport,
  );

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getReports({ page: currentPage, pageSize: 10 }));
  }, [
    dispatch,
    currentPage,
    deleteLoading,
    deleteReportWithAssociatedLoading,
    blockUserLoading,
  ]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  if (loading) {
    return <Spinner />;
  }

  if (!loading && reports.length === 0) {
    return (
      <AlertInfo title="No reports found" message="No one report upload yet" />
    );
  }

  const handleOpenDeleteReportPopUp = (reportId: string) => {
    setReportId(reportId);
    setOpenPopup(true);
    setCurrentPopup('delete');
  };

  const handleOpenBlockUserPopUp = (id: string) => {
    setUserId(id);
    setCurrentPopup('block');
    setOpenPopup(true);
  };

  const handleDeleteReportWithAssociationPopUp = (reportId: string) => {
    setReportId(reportId);
    setCurrentPopup('deleteWithAssociation');
    setOpenPopup(true);
  };

  const handlePopUpContent = (key: popup) => {
    switch (key) {
      case 'block':
        return <BlockUser closePopUp={HandleRemovePopUp} id={userId} />;
      case 'delete':
        return <DeleteReport closePopUp={HandleRemovePopUp} id={reportId} />;
      case 'deleteWithAssociation':
        return (
          <DeleteReportWithAssociated
            closePopUp={HandleRemovePopUp}
            id={reportId}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reports.map((report: Report) => (
          <div
            key={report?._id}
            className="bg-white shadow-md rounded-lg p-4 cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <h3
                className="text-lg font-semibold underline"
                onClick={() => handleOpenBlockUserPopUp(report?.upload.user)}
              >
                block user
              </h3>
              <button
                className="text-red-500 hover:text-red-700 focus:outline-none underline"
                onClick={() => handleOpenDeleteReportPopUp(report?._id)}
              >
                Delete Report
              </button>
            </div>
            <div className="mt-2 h-64 overflow-hidden">
              {report?.upload && (
                <img
                  src={`https://yolelapp.com/${report?.upload?.imageUrl}`}
                  alt="Uploaded Image"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="mt-2">
              <button
                onClick={() =>
                  handleDeleteReportWithAssociationPopUp(report?._id)
                }
                className="w-full bg-red-500 text-white font-semibold py-2 rounded"
              >
                Delete Report with image and votes
              </button>
            </div>
          </div>
        ))}
      </div>
      <PopUp openPopUp={openPopup} closePopUp={HandleRemovePopUp}>
        {handlePopUpContent(currentPopup)}
      </PopUp>

      {/* <PopUp openPopUp={openPopup} closePopUp={HandleRemovePopUpBlock}>
        <BlockUser closePopUp={HandleRemovePopUpBlock} id={reportId} />
      </PopUp> */}

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
    </>
  );
};

export default ReportsRow;
