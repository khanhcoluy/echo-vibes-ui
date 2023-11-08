import Library from './sidebarLibrary/Library';
import Navigation from './sidebarNavigation/SidebarNavigation';

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-y-2 w-[450px] h-screen">
      <Navigation />
      <Library />
    </div>
  );
};

export default Sidebar;
