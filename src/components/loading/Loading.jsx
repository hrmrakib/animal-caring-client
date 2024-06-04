const Loading = () => {
  return (
    <div className='bg-white flex items-center justify-center h-screen'>
      <div className='bg-gray-600 size-16 rounded-full flex items-center justify-center'>
        <span className='loading loading-spinner loading-lg text-center text-white'></span>
      </div>
    </div>
  );
};

export default Loading;
