import { useState } from 'react';
import PopUp from './PopUp';
import DeleteUploads from './DeleteUploads';

const UploadCard = ({
  imageUrl,
  ageType,
  gender,
  bestVotes,
  interactedVotes,
  count,
  handleNavigateToHistory,
  id,
  setId,
  isSearched,
  isDeleted,
}: {
  imageUrl: string;
  ageType: string;
  gender: string;
  bestVotes: number;
  interactedVotes?: number;
  count?: number;
  handleNavigateToHistory?: any;
  id?: string;
  setId?: any;
  isSearched?: boolean;
  isDeleted?: boolean;
}) => {
  const [open, setOpen] = useState(false);

  const HandleRemovePopUp = () => setOpen(false);

  const handleOpenDeleteReportPopUp = () => {
    setOpen(true);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={imageUrl}
        alt="Uploaded Image"
        className="w-full h-56 object-cover object-center"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600 text-sm">{ageType}</span>
          <span className="text-gray-600 text-sm">{gender}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-sm">Best Votes: {bestVotes}</span>
        </div>
        {interactedVotes !== 0 ? (
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm">
              interactedVotes: {interactedVotes}
            </span>
          </div>
        ) : (
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm">
              interactedVotes: {interactedVotes}
            </span>
          </div>
        )}

        {count && (
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm">
              Shared Counts: {count}
            </span>
          </div>
        )}
        {handleNavigateToHistory && (
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-4 mt-1 rounded w-full"
            onClick={handleNavigateToHistory}
          >
            history
          </button>
        )}
        {!isSearched && !isDeleted && (
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 mt-1 rounded w-full"
            onClick={() => handleOpenDeleteReportPopUp()}
          >
            Delete
          </button>
        )}
      </div>

      <PopUp openPopUp={open} closePopUp={HandleRemovePopUp}>
        <DeleteUploads closePopUp={HandleRemovePopUp} id={id as string} />
      </PopUp>
    </div>
  );
};

export default UploadCard;
