import React, { memo, useState } from 'react';
import { FaAngleDown, FaRegUser } from "react-icons/fa";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import { RiAdminLine, RiShoppingBag2Line } from "react-icons/ri";
import { RxDashboard, RxDot, RxLayers } from "react-icons/rx";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { Link, NavLink } from 'react-router-dom';

const Sidebar = memo(({sidebar, closeSidebar, baseLink, subLink, lastLink}) => {
    const [openList, setopenList] = useState([false, false, false, false,false]);
    const [categoryOpenList, setCategoryOpenList] = useState([false, false, false]);
    const links = [
        {id:'201' ,link:"admin",  icon: <RiAdminLine className={`mt-0.5 text-lg `} />, text:'Admin', children: [{id:'211' , link: "/admin/basicInfo", linkCompare:"basicInfo", text:'Basic Info'}]},
        {id:'202' , link:"products", icon: <RiShoppingBag2Line className={`mt-0.5 text-lg `} />, text:'Product', children: [{id:'212' , link: "/products/products", linkCompare:"products", text:'Products'}, {id:'213' , link: "/products/newProduct", linkCompare:"newProduct", text:'New Product'}]},
        
        //  Start of category 
        {id:'203' , link:"category", icon: <RxLayers className={`mt-0.5 text-lg `} />, text:'Category', children: [
            // Women's
            {id:'213' , link: "/category/women's", linkCompare:"women's", text:"Women's", children:[{id:'214' , link: "/category/women's/categoryList", linkCompare:"categoryList", text:'Category List'}, {id:'215' , link: "/category/women's/newCategory", linkCompare:"newCategory", text:'New Category'}]},
            // Men's
            {id:'216' , link: "/category/men's", linkCompare:"men's", text:"Men's", children:[{id:'217' , link: "/category/men's/categoryList", linkCompare:"categoryList", text:'Category List'}, {id:'218' , link: "/category/men's/newCategory", linkCompare:"newCategory", text:'New Category'}]},
            // Children
            {id:'219' , link: "/category/children", linkCompare:"children", text:"Children", children:[{id:'220' , link: "/category/children/categoryList", linkCompare:"categoryList", text:'Category List'}, {id:'221' , link: "/category/children/newCategory", linkCompare:"newCategory", text:'New Category'}]},
        ]},
        // End of category

        // Order
        {id:'222' , link:"order", icon: <HiOutlineDocumentAdd className={`mt-0.5 text-lg `} />, text:'Order', children: [{id:'223' , link: "/order/orderList", linkCompare:"orderList", text:'Order List'}]},
        
        {id:'224' , link:"user", icon: <FaRegUser className={`mt-0.5 text-lg `} />, text:'User', children: [{id:'225' , link: "/user/allUsers", linkCompare:"allUsers", text:'All Users'}, {id:'226' , link: "/user/newUser", linkCompare:"newUser", text:'New User'}]},
    ];
    
    
    const handleOpenList = (index) => { 
        setopenList(prevArray => {
            let list = [[prevArray.length].forEach(item => false)];
            list[index] = !prevArray[index];
            return list;
        })
    }
    const handleCategoryOpenList = (index) => { 
        setCategoryOpenList(prevArray => {
            let list = [[prevArray.length].forEach(item => false)];
            list[index] = !prevArray[index];
            return list;
        })
    }

    
    
    return (
        <div className={`${sidebar ? "z-20 w-screen max-[700px]:fixed top-0 left-0 backdrop-blur-lg min-[700px]:w-[32%] lg:w-1/4 xl:w-1/6 sm:shadow-[4px_0px_10px_0px_#B3B3B366] " : " shadow-none w-0"} py-5  min-h-screen overflow-x-hidden trans flex flex-col gap-5 `}>
            {<div className={`w-full ${sidebar ? "px-3" : "p-0"} trans   border-b-2`}>
                <button onClick={closeSidebar} className={` h-10  trans w-10 mb-5 rounded-md hover:bg-gray-200 flex items-center justify-center`}>
                    <TbLayoutSidebarLeftCollapseFilled className="text-3xl" />
                </button>
            </div>} 

            {<div className={`${sidebar ? "px-5  z-0 max-w-full" : "max-w-0 px-0 -z-0"} trans flex flex-col gap-5 `}>
                <div className='flex flex-col gap-3'>
                    <h2 className='text-sec-color text-sm'>Main Home</h2>
                    <NavLink to={'/'} onClick={() => {if (window.innerWidth < 768) closeSidebar()}} className={({ isActive }) => `hover:pl-2 ${isActive ? "pl-2 beforeElement bg-main-color text-white" : " hover:bg-gray-200 "} py-2 trans rounded-md font-semibold flex items-center gap-2`}>
                        <RxDashboard className='mt-0.5 text-lg' />
                        <p>Dashboard</p>
                    </NavLink>
                </div>
                <div className='flex flex-col gap-3'>
                    <h2 className='text-sec-color text-sm'>All pages</h2>
                    <div className='flex flex-col gap-2'>
                        {
                            links.map((link, index) => (
                                <div key={link.id} className='relative w-full flex flex-col gap-1'>
                                    <button to={link.link} onClick={() => handleOpenList(index)}  className={`outline-0 hover:pl-2  ${baseLink == link.link ? "pl-2 beforeElement bg-main-color text-white" : openList[index] ? "bg-gray-200 pl-2" : " hover:bg-gray-200"} flex w-full justify-between items-center    py-2 trans rounded-md font-semibold `}>
                                        <p className='flex gap-2 items-center '>
                                            {link.icon}
                                            {link.text}
                                        </p>
                                        <FaAngleDown  className={`mt-1 mr-1 ${openList[index]  ? "rotate-180" : ""} `}/>
                                    </button>
                                    <ul style={{maxHeight: openList[index] ? `${link.children.length * 28 + ((link.children.length - 1) * 4) + (index == 2 && ((categoryOpenList[0] || categoryOpenList[1] || categoryOpenList[2])) ? 60 : 0) }px` : "0px",}} 
                                    className={`flex flex-col gap-1 pl-2 text-sm trans overflow-y-hidden`}>
                                        {
                                            link.children.map((child, index) => (
                                                <li key={child.id} className='flex-col cursor-pointer trans flex items-center justify-between'>
                                                    <Link to={child.children && child.children.length > 0 ? location.pathname : child.link} onClick={() => {child.children ? handleCategoryOpenList(index) :  (window.innerWidth < 768) &&  closeSidebar() }} className={`w-full  trans py-1 ${ subLink == child.linkCompare ? "text-main-color pl-1" : " "} hover:bg-gray-200 hover:pl-1 rounded-sm outline-0 flex items-center justify-between`}>
                                                        <p className='flex gap-1 items-center   '>
                                                            <RxDot className={`text-xs  mt-0.5 `} />
                                                            {child.text}
                                                        </p>
                                                        {child.children && <FaAngleDown  className={`mt-1 mr-1 ${ categoryOpenList[index] ? "rotate-180" : "rotate-0 "} `}/>}
                                                    </Link>
                                                    <ul style={{maxHeight: child.children && categoryOpenList[index] ? `${child.children.length * 28 + ((child.children.length - 1) * 4) }px` : "0px",}} 
                                                        className={`flex flex-col gap-1 pl-3 text-sm trans w-full overflow-y-hidden`}>
                                                            {
                                                                child.children && child.children.map((grandChild) => (
                                                                    <Link to={grandChild.link} key={grandChild.id} onClick={() => {if (window.innerWidth < 768) closeSidebar()}} className={` cursor-pointer trans w-full ${(lastLink && lastLink == grandChild.linkCompare) && (subLink && child.linkCompare == subLink) ? "text-main-color pl-1" : "text-sec-color "} hover:bg-gray-200  rounded-sm py-1 hover:pl-1 flex items-center justify-between`}>
                                                                        <p className='flex gap-1 items-center '>
                                                                            <RxDot className={`text-xs  mt-0.5  `} />
                                                                            {grandChild.text}
                                                                        </p>
                                                                    </Link>
                                                                ))
                                                            }
                                                    </ul>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>}
            
        </div>
    )
})

export default Sidebar