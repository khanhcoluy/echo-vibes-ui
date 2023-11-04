import { GoHomeFill } from 'react-icons/go';
import { BiSearch } from 'react-icons/bi';
import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
    <>
      <div className="bg-[#121212] w-full h-[130px] justify-center">
        <ul className="h-full flex flex-col px-[12px] py-[8px] justify-around">
          <li className="flex items-center">
            <Link
              href="/"
              className="flex items-center px-[12px] py-[4px] gap-3 cursor-pointer w-full"
            >
              <GoHomeFill />
              <p>Home</p>
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              href="/search"
              className="flex items-center px-[12px] py-[4px] gap-3 cursor-pointer w-full"
            >
              <BiSearch />
              <p>Search</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
