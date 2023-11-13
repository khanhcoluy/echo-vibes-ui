import LibraryHeader from './header/LibraryHeader';
import LibraryPlaylist from './header/LibraryPlaylist';

const Library = () => {
  return (
    <div className="bg-primary w-full h-full">
      <LibraryHeader />
      <LibraryPlaylist />
    </div>
  );
};

export default Library;
