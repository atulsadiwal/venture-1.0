import { socialMediaLinks } from "../utils/socialMediaLinks.js";

const StickyFooter = ({ ShowState }) => {
  return (
    <>
      <section className="max-w-screen-2xl mx-auto w-full duration-500">
        <div
          className={`transition-all overflow-hidden z-50 fixed bottom-[50%] -right-7 flex justify-end items-center max-md:gap-2 gap-5 px-5 max-md:flex-col-reverse`}
        >
          <div className="flex items-center justify-end gap-5 px-2 py-3 max-md:flex-col fixed">
            <div className="max-md:hidden">
              <div className="flex flex-col items-end text-white max-md:p-2 justify-center overflow-hidden">
                {socialMediaLinks?.map((link, index) => (
                  <div key={index} className="relative group">
                    <div className="bg-blue-700 flex items-center">
                      <span className="w-0 transition-all group-hover:w-20 overflow-hidden hover:visible group-hover:px-4 group-hover:py-1.5 rounded-lg text-xs duration-300">
                        {link.name}
                      </span>
                      <a
                        className="flex w-10 border-b border-b-gray-50/20 h-10 items-center justify-center p-1 gap-2"
                        href={link.url}
                        target="_blank"
                      >
                        {link.icon}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-screen-2xl mx-auto w-full bg-red-300 duration-500">
        <div className={`transition-all overflow-hidden ${ShowState ? "h-0" : "h-20 max-md:h-10"} z-50 fixed bottom-5 left-0 w-full flex justify-center items-center max-md:gap-2 gap-5 px-5 max-[400px]:px-2 max-md:flex-col-reverse`}>
          <div className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white flex justify-center items-center py-3 px-5 shadow-xl rounded-xl">
            <marquee className="font-semibold text-sm md:text-lg tracking-wide">
              Stay tuned on our social media channels for more updates, announcements, and sneak peaks into what's coming next!
            </marquee>
          </div>
        </div>
      </section>
    </>
  );
};

export default StickyFooter;
