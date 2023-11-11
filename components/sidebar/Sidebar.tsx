'use client';

import React, { useState, useEffect } from 'react';

import Library from './sidebarLibrary/Library';
import Navigation from './sidebarNavigation/SidebarNavigation';

const sidebarResizerWidth = 8;

const Sidebar = () => {
  const [isResizing, setIsResizing] = useState(false);

  useEffect(() => {
    if (isResizing) {
      const onMouseMove = (e: MouseEvent) => {
        const sidebar = document.querySelector('.sidebar') as HTMLDivElement;
        sidebar.style.width = `${e.clientX - sidebarResizerWidth}px`;
      };

      const onMouseUp = () => {
        setIsResizing(false);
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }
  }, [isResizing]);

  return (
    <div className="relative sidebar w-[350px] h-screen">
      <div
        style={{ width: 'inherit' }}
        className="sidebar-content flex flex-col gap-y-2 h-full"
      >
        <Navigation />
        <Library />
      </div>
      <div
        className={`resize-bar absolute right-[-4px] top-0 h-full w-[${sidebarResizerWidth}px] cursor-col-resize group`}
        onMouseDown={() => setIsResizing(true)}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-[1px] group-hover:bg-[#a7a7a7] group-hover:opacity-40"></div>
      </div>
    </div>
  );
};

export default Sidebar;
