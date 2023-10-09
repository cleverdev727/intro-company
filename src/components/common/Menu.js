import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowDown from "../../assets/imgs/arrow-down.png";

const Menu = ({data}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <li className="w-full border-t last:border-b border-light-white">
      {
        data.link
          ?
            <Link to={data.link} className="flex items-center w-full h-[45px] pl-6 text-[15px]">{ data.label }</Link>
          :
            <div>
              <div className="flex h-[45px] justify-between items-center pl-6 pr-2">
                <span className="text-[15px]">{ data.label }</span>
                <div className="flex w-8 h-8 justify-center items-center bg-light-white rounded">
                  <img src={ArrowDown} alt="arrow-down" className={`w-3 invert transition-all ${isOpen ? 'rotate-90' : 'rotate-0'}`} onClick={handleOpen} />
                </div>
              </div>
              <ul className={`transition-all overflow-hidden ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
                {
                  data.childs?.map((child, i) => {
                    return (
                      <li className="flex w-full h-[45px] items-center pl-12 border-t border-light-white" key={i}>
                        <Link to={child.link}>{ child.label }</Link>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
      }
    </li>
  );
};
export default Menu;