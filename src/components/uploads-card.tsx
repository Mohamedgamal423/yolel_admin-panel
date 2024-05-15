const UploadCard = ({
  imageUrl,
  ageType,
  gender,
  bestVotes,
  interactedVotes,
  count,
}: {
  imageUrl: string;
  ageType: string;
  gender: string;
  bestVotes: number;
  interactedVotes?: number;
  count?: number;
}) => {
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
      </div>
    </div>
  );
};

export default UploadCard;
