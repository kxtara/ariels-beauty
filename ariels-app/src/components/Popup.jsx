export default function Popup({ isPopupOpen, setPopupOpen }) {
  const handleClick = () => setPopupOpen(false);
  return (
    isPopupOpen && (
      <div
        className={`flex flex-col bg-[#4D4D4D] text-white items-center w-[15rem] py-4 ml-3 relative -top-[20.4rem] left-[9rem]`}
      >
        <h2>
          <span className="text-[#dee6c3]">Message</span> has been sent.
          <span
            className="text-xs relative -top-3 left-4"
            onClick={handleClick}
          >
            &#10005;
          </span>
        </h2>
      </div>
    )
  );
}
