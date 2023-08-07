import { GrClose } from 'react-icons/gr';
import { BsFacebook } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import Expand from './Expand';
import { NavbarItemType } from '@/components/typesandArrays/NavbarItems';

export default function OffCanvasSidebarMobile({ data, sidebar, setSidebar }: { data: Array<NavbarItemType>, sidebar: boolean, setSidebar:any}) {
  return (
    <>
      <div className={`overflow-x-hidden flex-col items-end fixed top-0 px-2 w-80 h-screen overflow-y-auto bg-white ${sidebar ? "right-0 visible" : "-right-[520px] invisible"} transition-all duration-500`}>
        <div className={`opacity-0 ${sidebar ? "opacity-100 duration-1000 translate-y-0" : "opacity-0 translate-y-20"}`}>
          <div className="bg-white active:bg-white flex justify-end w-full border-b-2 cursor-pointer py-5 transition duration-75 " >
            <div onClick={() => { setSidebar(!sidebar) }} className="p-4 active:bg-gray-200">
              <GrClose />
            </div>
          </div>
          <ul className={`w-full`}>
            {data.map((item: NavbarItemType, index: number) =>
              <li key={index}>
                <Expand items={item} sidebar={sidebar} setSidebar={setSidebar} />
              </li>
            )}
          </ul>
        </div>
        <div className="cursor-pointer flex justify-start w-full p-4 space-x-5 " >
          <BsFacebook size={25} />
          <FaTwitter size={25} />
        </div>
      </div>
    </>
  )
}