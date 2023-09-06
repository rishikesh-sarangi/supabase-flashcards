import { BsLightningCharge, BsMoonFill, BsSunFill } from "react-icons/bs";

const Header = ({ isDark, setIsDark }) => {
  return (
    <>
      <div className="flex justify-between py-6 mx-8 text-2xl md:mx-10">
        <div className="flex items-center gap-1">
          <span className="font-extrabold tracking-widest text-teal-500 uppercase font-NotoSans animate-pulse">
            Memory Pulse
          </span>
          <BsLightningCharge className="mb-1 text-teal-500" />
        </div>
        <div className="flex">
          <BsMoonFill
            onClick={(e) => {
              setIsDark(!isDark);
            }}
            className={`text-black transition duration-200 cursor-pointer ${
              isDark ? "opacity-0" : "opacity-100"
            } `}
          />
          <BsSunFill
            className={`text-white transition duration-200 cursor-pointer ${
              !isDark ? "opacity-0" : "opacity-100"
            } absolute`}
            onClick={(e) => {
              setIsDark(!isDark);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
