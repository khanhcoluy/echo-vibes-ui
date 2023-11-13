import Image from 'next/image';

const LibraryPlaylist = () => {
  return (
    <div className="bg-red-50 h-full px-3 py-2">
      <ul>
        <li className="flex bg-secondary">
          <Image
            src="/images/liked.png"
            alt="Liked songs"
            width={60}
            height={60}
          />
          <div>
            <p>Liked Songs</p>
            <span>Playlist</span>
            <span>129 songs</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LibraryPlaylist;
