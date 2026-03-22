const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[60vh]">
      
      <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
      
      <p className="mt-3 text-gray-500">Loading listings...</p>
      
    </div>
  );
};

export default Loader;