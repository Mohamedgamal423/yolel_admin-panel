import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { blockUser } from '../store/auth/blockUser/block-user.slice';
import { getUserDataById } from '../store/auth/getUserById/getUserById.slice';
import { showErrorToast } from '../store/toast/toast.slice';
import { useEffect } from 'react';

const BlockUser = ({
  closePopUp,
  id,
}: {
  closePopUp: () => void;
  id: string;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, loading } = useSelector((state: RootState) => state.userData);

  useEffect(() => {
    dispatch(getUserDataById(id));
  }, [dispatch]);
  const handleSubmitButton = () => {
    closePopUp();
    if (!loading && !user?.IsBlocked) {
      dispatch(blockUser(id));
    } else {
      dispatch(showErrorToast({ message: 'user blocked already' }));
    }
  };

  return (
    <div className="p-4">
      <p className="text-[18px] font-bold pb-5">
        Are you sure you want to block this user{' '}
        {user.email ? user.email : '(social user)'}?
      </p>
      <div className="flex items-center justify-end">
        <button
          className="py-2 px-4 bg-cyan-500 text-white rounded hover:bg-red-600"
          onClick={handleSubmitButton}
        >
          Submit
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

export default BlockUser;
