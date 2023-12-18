import {useState} from 'react';
import { Link } from 'react-router-dom';
import { links } from './NavLinks';
const Header = () => {
  const [active , setActive] = useState(1)
  return (
    <div className=' w-full flex justify-between items-center h-[17vh] px-[73px]'>
      {/* logo landed here */}
      <div>
        <img src='./logo.png' alt='logo' />
      </div>
      {/* nav links landed here */}
      <div>
        <ul className='flex justify-evenly gap-[40px]'>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id} className='' >
                <Link className={`${active == id && "gradient-border"} gradient-border-hover py-1 px-3 text-white text-[17px] !rounded-lg`} to={url}>{text}</Link>
              </li>
            );
          })}
        
        </ul>
      </div>
    </div>
  );
}

export default Header;
