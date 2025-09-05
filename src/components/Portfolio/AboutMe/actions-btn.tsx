const ActionsButton = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-4">
      <button
        type="button"
        className="px-5 py-2 rounded-lg bg-[#0a0d12]/80 border border-[#00e0ff]/40 
            text-[#00e0ff] font-medium shadow-md hover:shadow-[0_0_12px_rgba(0,224,255,0.4)] 
            transition duration-300"
      >
        Go to project
      </button>
      <button
        type="button"
        className="px-5 py-2 rounded-lg bg-[#00e0ff]/10 border border-[#00e0ff]/40 
            text-[#e0e0e0] font-medium shadow-md hover:shadow-[0_0_12px_rgba(0,224,255,0.4)] 
            transition duration-300"
      >
        Download CV
      </button>
    </div>
  );
};

export default ActionsButton;
