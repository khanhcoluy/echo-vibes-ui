import { BiLibrary } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';

const LibraryHeader = () => {
  return (
    <div className="pt-2">
      <header className="flex justify-between items-center px-4 py-2 gap-3 w-full">
        <div className="flex cursor-pointer px-">
          <BiLibrary size={25} />
          <p>Library</p>
        </div>
        <button>
          <AiOutlinePlus />
        </button>
      </header>
      <div>FilterGenreBox</div>
    </div>
  );
};

export default LibraryHeader;
