import { BiLibrary } from 'react-icons/bi';
import { AiOutlineArrowRight, AiOutlinePlus } from 'react-icons/ai';

const LibraryHeader = () => {
  return (
    <div className="pt-2 text-white ease-in-out duration-300">
      <header className="text-secondary-color flex justify-between items-center px-4 py-2 gap-3 w-full">
        <div className="flex gap-3 cursor-pointer hover:text-primary-color ">
          <BiLibrary size={25} />
          <p>Library</p>
        </div>
        <div className="flex gap-1">
          <button className="flex justify-center items-center hover:text-primary-color hover:bg-slate-800 w-7 h-7 rounded-full">
            <AiOutlinePlus className="text-[1.125rem]" />
          </button>
          <button className="hidden xl:flex justify-center items-center hover:text-primary-color hover:bg-slate-800 w-7 h-7 rounded-full">
            <AiOutlineArrowRight className="text-[1.125rem]" />
          </button>
        </div>
      </header>
      <div>FilterGenreBox</div>
    </div>
  );
};

export default LibraryHeader;
