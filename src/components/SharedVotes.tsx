// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch, RootState } from '../store/store';
// import Spinner from './Spinner/spinner';
// import { getSharedVotes } from '../store/sharedVotes/getSharedVotes/getSharedVotes.slice';

// const SharedVotes = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const {
//     loading,
//     error,
//     sharedVotes = [],
//     totalPages,
//   } = useSelector((state: RootState) => state.sharedvotes);

//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     dispatch(getSharedVotes({ page: currentPage, pageSize: 5 }));
//   }, [dispatch, currentPage]);

//   const handlePageChange = (newPage: number) => {
//     setCurrentPage(newPage);
//   };

//   if (loading || sharedVotes.length === 0) {
//     return <Spinner />;
//   }

//   return (
//     <div>
//       {sharedVotes.map((vote) => (
//         <div key={vote?._id} className="bg-white shadow-md rounded-lg p-4 mb-4">
//           <div className="flex justify-between items-center">
//             <h3 className="text-lg font-semibold">Vote Count: {vote?.count}</h3>
//           </div>
//           <div className="grid grid-cols-2 gap-4 mt-2">
//             <div>
//               <img
//                 src={`https://yolelapp.com/${vote?.vote?.imageOne?.imageUrl}`}
//                 alt="Image One"
//                 className="w-full h-65 object-cover"
//               />
//             </div>
//             <div>
//               <img
//                 src={`https://yolelapp.com/${vote?.vote?.imageTwo?.imageUrl}`}
//                 alt="Image Two"
//                 className="w-full h-65 object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       ))}
//       <div className="flex justify-center mt-4 mb-4">
//         <button
//           className={`px-4 py-2 mx-2 text-sm font-medium text-white bg-blue-500 rounded ${
//             currentPage === 1 && 'opacity-50 cursor-not-allowed'
//           }`}
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </button>
//         <button
//           className={`px-4 py-2 mx-2 text-sm font-medium text-white bg-blue-500 rounded ${
//             currentPage === totalPages && 'opacity-50 cursor-not-allowed'
//           }`}
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SharedVotes;
