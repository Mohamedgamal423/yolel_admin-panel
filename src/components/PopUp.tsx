import React, { ReactNode } from 'react';

interface Props {
  openPopUp: boolean;
  closePopUp: () => void;
  children: ReactNode;
}

const PopUp: React.FC<Props> = ({ openPopUp, closePopUp, children }) => {
  const handleLosePopUp = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closePopUp();
    }
  };

  if (!openPopUp) return null;

  return (
    <div
      id="ModelContainer"
      onClick={handleLosePopUp}
      className="fixed inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm"
    >
      <div className="p-2 bg-white w-10/12 md:w-1/2 lg:1/3 shadow-inner border-e-emerald-600 rounded-lg py-5">
        <div className="w-full p-3">{children}</div>
      </div>
    </div>
  );
};

export default PopUp;
