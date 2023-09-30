import { ConnectWallet } from "@thirdweb-dev/react";
import Feed from "../Feed";

const Nav = () => {
  return (
    <div>
      <div className="font-sans">
        <div className="wrapper w-full overflow-x-hidden relative">
          <div className="navbar w-full h-16 flex flex-row relative bg-[#0B1416] justify-between items-center ">
            <img src="" alt="" />
            <span className="text-white font-mulish -ml-[150px] text-sm font-medium ">
              UniConnect
            </span>

            <div className="mb-3 ">
              <div className="relative mb-4 flex mx-auto w-full flex-wrap items-stretch">
                <input
                  type="search"
                  className="relative w-[500px] mt-7 -mr-0.5 block min-w-0  
                       rounded-full bg-[#1A282D] outline-none outline
                      bg-clip-padding px-3 py-[0.25rem] text-base leading-[1.6]
                           focus:outline-none dark:border-neutral-600 text-white
                      "
                  placeholder="Search "
                  aria-label="Search"
                  aria-describedby="button-addon1"
                />
              </div>
            </div>

            <div className="button space-x-3 flex mr-5">
              <button
                className="py-3 px-4  
              rounded-full font-bold text-sm text-white bg-[#1A282D] flex-row justify-between  transition-all duration-200 
              hover:bg-[#131F23] flex   items-center"
              >
                Create Post
                <div>
                  {/* <svg
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="w-[20px]  h-[20px] "
                  >
                    <path
                      fill="currentcolor"
                      d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                    ></path>
                  </svg> */}
                </div>
              </button>

              <ConnectWallet
                className="py-2 px-4 text-white bg-[#FF4500] rounded-full transition-all duration-200 hover:bg-[#c62828]
         leading-[27px]  text-[18px]"
                dropdownPosition={{
                  side: "bottom",
                  align: "center",
                }}
              />
            </div>
          </div>
          <div className="data-section relative justify-between flex w-[100%] bg-[#0B1416] pt-4">
            {/* Left part */}
            <div className="flex w-[20%] flex-col ml-[40px]  ">
              <div className="flex flex-col space-y-3  ">
                {/* Home */}
                <div>
                  <img src="" alt="" />
                  <a href="" className="font-mulish text-white">
                    Home
                  </a>
                </div>
                {/* Popular */}
                <div>
                  <img src="" alt="" />
                  <a href="" className="font-mulish text-white">
                    Popular
                  </a>
                </div>
              </div>

              {/* Topic */}
              <div className="flex flex-col space-y-3 mt-8 ">
                <a href="" className="font-mulish text-[#33464C]">
                  Topics
                </a>
                <i></i>
                <div>
                  <img src="" alt="" />
                  <a href="" className="font-mulish text-white">
                    Gaming
                  </a>
                  <i></i>
                </div>
                <div>
                  <img src="" alt="" />
                  <a href="" className="font-mulish text-white">
                    Sports
                  </a>
                  <i></i>
                </div>
                <div>
                  <img src="" alt="" />
                  <a href="" className="font-mulish text-white">
                    Business
                  </a>
                </div>
                <div>
                  <img src="" alt="" />
                  <a href="" className="font-mulish text-white">
                    Crypto
                  </a>
                </div>
                <div>
                  <img src="" alt="" />
                  <a href="" className="font-mulish text-white">
                    Television
                  </a>
                </div>
                <div>
                  <img src="" alt="" />
                  <a href="" className="font-mulish text-white">
                    Celebrity
                  </a>
                </div>

                <a href="" className="font-mulish text-white text-sm mt-3">
                  See more
                </a>
              </div>

              {/* Resources */}
              <div className="flex flex-col space-y-3 mt-8 ">
                <a href="" className="font-mulish text-[#33464C]">
                  Resources
                </a>
                <div>
                  <img src="" alt="" />
                  <a href="" className="font-mulish text-white">
                    About
                  </a>
                </div>
                <div>
                  <img src="" alt="" />
                  <a href="" className="font-mulish text-white">
                    Advertise
                  </a>
                </div>
                <div>
                  <img src="" alt="" />
                  <a href="" className="font-mulish text-white">
                    Help
                  </a>
                </div>
                <div>
                  <img src="" alt="" />
                  <a href="" className="font-mulish text-white">
                    Blog
                  </a>
                </div>
                <div>
                  <img src="" alt="" />
                  <a href="" className="font-mulish text-white">
                    Careers
                  </a>
                </div>
                <div>
                  <img src="" alt="" />
                  <a href="" className="font-mulish text-white">
                    Press
                  </a>
                </div>

                <a href="" className="font-mulish text-white text-sm">
                  See more
                </a>
              </div>
            </div>
            {/* Right part */}
            <Feed />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
