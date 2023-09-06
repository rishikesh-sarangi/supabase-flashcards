import { BsLightningCharge, BsMoonFill, BsSunFill } from "react-icons/bs";

const Header = ({ isDark, setIsDark }) => {
  return (
    <>
      <div className="flex justify-between px-8 py-5 text-2xl">
        <div className="flex items-center gap-1">
          <span className="font-extrabold tracking-widest text-teal-500 uppercase font-NotoSans">
            Memory Pulse
          </span>
          <BsLightningCharge className="mb-1 text-teal-500" />
        </div>
        {!isDark ? (
          <BsMoonFill
            className="text-black transition duration-300 cursor-pointer"
            onClick={(e) => {
              setIsDark(!isDark);
            }}
          />
        ) : (
          <BsSunFill
            className="text-white transition duration-300 cursor-pointer"
            onClick={(e) => {
              setIsDark(!isDark);
            }}
          />
        )}
      </div>
    </>
  );
};

export default Header;
