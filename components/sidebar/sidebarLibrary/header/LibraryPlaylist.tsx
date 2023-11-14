import Image from 'next/image';
import { RiPushpinFill } from 'react-icons/ri';

const LibraryPlaylist = () => {
  return (
    <div className="h-full px-3 py-2 bg-primary">
      <ul>
        <li className="flex p-2">
          <Image
            src="/images/liked.png"
            alt="Liked songs"
            width={50}
            height={50}
            className="rounded"
          />
          <div className="ml-3 text-secondary-color">
            <p className="text-white">Liked Songs</p>
            <div className="flex items-center text-sm">
              <span>Playlist</span>
              <div className="w-1 h-1 bg-secondary mx-1 rounded-full"></div>
              <span>129 songs</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LibraryPlaylist;
