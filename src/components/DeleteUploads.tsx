import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { deleteImage } from '../store/uploads/removeUpload.slice';

const DeleteUploads = ({
  closePopUp,
  id,
}: {
  closePopUp: () => void;
  id: string;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleDeleteButton = async () => {
    dispatch(deleteImage({ id }));
    closePopUp();
  };

  return (
    <div className="p-4">
      <p className="text-[18px] font-bold pb-5">
        Are you sure you want to delete this upload?
      </p>
      <div className="flex items-center justify-end">
        <button
          className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={handleDeleteButton}
        >
          Delete
        </button>
        <button
          className="py-2 px-5 bg-zinc-950 text-white rounded hover:bg-gray-600 ml-2"
          onClick={closePopUp}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default DeleteUploads;
