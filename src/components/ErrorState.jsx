const ErrorState = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center h-[60vh] text-center px-4">
      
      {/* Icon */}
      <div className="text-6xl mb-4">⚠️</div>

      {/* Title */}
      <h2 className="text-xl md:text-2xl font-bold text-gray-800">
        Something went wrong
      </h2>

      {/* Message */}
      <p className="text-gray-500 mt-2 max-w-md">
        {message || "Unable to load data. Please try again later."}
      </p>

      {/* Retry Button */}
      <button
        onClick={() => window.location.reload()}
        className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        Retry
      </button>
    </div>
  );
};

export default ErrorState;