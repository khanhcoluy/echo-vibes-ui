import Library from "./Library";
import Navigation from "./Navigation";

const Sidebar = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div>
        <Library/>
      </div>
    </div>
  );
};

export default Sidebar;
