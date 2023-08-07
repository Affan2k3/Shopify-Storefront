const AskQuestionForm = () => {
  return (
    <form className="grid grid-cols-2 gap-x-4 gap-y-8 mb-4">
      <div className="space-y-3 ">
        <p className="text-sm font-light">Name</p>
        <input
          type="text"
          className="px-3 w-full py-2 outline-none border-none ring-[1px] text-lg ring-gray-200 focus:ring-black"
        />
      </div>
      <div className="space-y-3">
        <p className="text-sm font-light">Email</p>
        <input
          type="text"
          className="px-3 py-2 w-full outline-none border-none ring-[1px] text-lg ring-gray-200 focus:ring-black"
        />
      </div>
      <div className="col-span-2 space-y-3">
        <p className="text-sm font-light">Message</p>
        <textarea className="px-3 py-2 w-full min-h-[150px] outline-none border-none ring-[1px] text-lg ring-gray-200 focus:ring-black" />
      </div>
      <div className="col-span-2">
        <button className="px-7 py-3 bg-black text-white font-bold">
          Send
        </button>
      </div>
      <p className="col-span-full text-sm">
        This site is protected by reCAPTCHA and the Google Privacy Policy and
        Terms of Service apply.
      </p>
    </form>
  );
};
export default AskQuestionForm;
