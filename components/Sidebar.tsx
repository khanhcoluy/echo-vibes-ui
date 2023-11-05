import Library from './Library';
import Navigation from './Navigation';

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-y-2 w-[450px] h-screen">
      <Navigation />
      <Library />
    </div>
  );
};

export default Sidebar;
