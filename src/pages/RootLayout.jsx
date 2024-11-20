import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { FaAngleRight } from "react-icons/fa6";
import Loader from '../utils/Loader';

const RootLayout = () => {
    const [sidebar, setSidebar] = useState(true);
    const openSidebar  = () => setSidebar(true) ;
    const closeSidebar  = () => setSidebar(false) ;

    const loc = useLocation();
    const [baseRealLink, setBaseRealLink] = useState("");
    const [subRealLink, setSubRealLink] = useState("");
    const [lastRealLink, setLastRealLink] = useState("");
    const [baseLink, setBaseLink] = useState("");
    const [subLink, setSubLink] = useState("");
    const [lastLink, setLastLink] = useState("");

    const linksToObj = {
        "": { text: "Dashboard" },
        "admin": { text: "Admin", children: {
            "basicInfo": { text: "Basic Info" }
        }},
        "products": { text: "Product", children: {
            "products": { text: "Products" },
            "newProduct": { text: "New Product" }
        }},
        "category": { text: "Category", children: {
            "women's": { text: "Women's", children: {
                "categoryList": { text: "Category List" },
                "newCategory": { text: "New Category" }
            }},
            "men's": { text: "Men's", children: {
                "categoryList": { text: "Category List" },
                "newCategory": { text: "New Category" }
            }},
            "children": { text: "Children", children: {
                "categoryList": { text: "Category List" },
                "newCategory": { text: "New Category" }
            }}
        }},
        "order": { text: "Order", children: {"orderList": {text:"Order List"} }},
        "user": { text: "User", children:{"allUsers": {text:"User List"}, "newUser": {text:"New User"}}}
    }

    useEffect(() => {
        const pathParts = location.pathname.split('/').filter(Boolean);
        setBaseRealLink(pathParts[0] || "");
        setSubRealLink(pathParts[1] || "");
        setLastRealLink(pathParts[2] || "");
        // Handle baseLink (top-level link)
        const baseObj = linksToObj[pathParts[0]];
        const baseLink = baseObj ? baseObj.text : "";

        // Handle subLink (second-level link if exists)
        const subObj = baseObj && baseObj.children ? baseObj.children[pathParts[1]] : null;
        const subLink = subObj ? subObj.text : "";

        // Handle lastLink (third-level link if exists)
        const lastObj = subObj && subObj.children ? subObj.children[pathParts[2]] : null;
        const lastLink = lastObj ? lastObj.text : "";

        setBaseLink(baseLink);
        setSubLink(subLink);
        setLastLink(lastLink);
    }, [location.pathname]);
    return (
        <div className='w-full flex overflow-x-hidden'>
            <Sidebar sidebar={sidebar} closeSidebar={closeSidebar} baseLink={baseRealLink} subLink={subRealLink} lastLink={lastRealLink} />
            <div className='flex w-full flex-col'>
                <Navbar sidebar={sidebar} openSidebar={openSidebar} />
                
                {/* whatever put in the App Router comes here  */}
                <div className=' flex flex-col gap-5 w-full bg-[#F5F6FA] pt-5  h-full'>
                    <div className='px-2 min-[300px]:px-5  flex gap-1 sm:gap-2 text-lg items-center w-full max-[373px]:text-xs max-sm:text-sm'>
                        <NavLink to={'/'} className={({isActive}) => `${isActive ? "" : "text-sec-color"} trans hover:text-gray-600 `}>Dashboard</NavLink>
                        {baseLink && <div className='flex items-center gap-1 sm:gap-2  '> 
                            <FaAngleRight className='text-sec-color mt-[2px]' />  
                            <span className='text-sec-color '><span className='max-[370px]:hidden'>{baseLink}</span> <span className='min-[370px]:hidden'>...</span></span> 
                        </div>}
                        {subLink && <div className='flex items-center gap-1 sm:gap-2 '> 
                            <FaAngleRight className='text-sec-color mt-[2px] ' />  
                            <span className={` outline-0 ${lastLink ? "text-sec-color " : " cursor-pointer trans hover:text-gray-600"}`}>{subLink}</span> 
                        </div>}
                        
                        {lastLink && <div className='flex items-center gap-1 sm:gap-2 w-fit'> 
                            <FaAngleRight className='text-sec-color mt-[2px] ' />  
                            <span className='cursor-pointer w-fit'>{lastLink}</span> 
                        </div>}
                    </div>
                    {/*  dashboard content comes here  */}
                    <div className={'px-2 min-[300px]:px-5 bg-[#F5F6FA] w-full h-full'}>
                        <Outlet /> 
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default RootLayout