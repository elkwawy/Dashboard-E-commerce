import { memo } from "react";
import { TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";

const Navbar = memo(({sidebar, openSidebar}) => {
    return (
        <div className="w-full border-b-2 p-5 flex justify-between items-center">
            <div className="flex gap-3 items-start">
                {<button onClick={openSidebar} className={`w-10 h-10 ${sidebar ? "opacity-0  pointer-events-none" : " opacity-100 -translate-x-2"} rounded-md trans hover:bg-gray-200 flex items-center justify-center`}>
                    <TbLayoutSidebarLeftExpandFilled className="text-3xl" />
                </button>}
                <h1 className={`max-[260px]:text-2xl text-3xl font-bold ${sidebar ? "-translate-x-[52px]" : " -translate-x-2 "} transition-all duration-500`}>Logo</h1>
            </div>
            <div className="flex items-center gap-5">
                {/* User */}
                <div className="flex gap-2 items-center">
                    {/* IMG */}
                    <div className="w-8 h-8 bg-gray-300 rounded-full" />
                    <span>User</span>
                    {/* Arrowdown */}
                </div>

                {/* Settings */}
            </div>
        </div>
    )
})

export default Navbar