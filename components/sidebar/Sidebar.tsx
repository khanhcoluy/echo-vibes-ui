'use client';

import React, { useState, useEffect } from 'react';

import Library from './sidebarLibrary/Library';
import Navigation from './sidebarNavigation/SidebarNavigation';

const Sidebar = () => {
  const [isResizing, setIsResizing] = useState(false);

  useEffect(() => {
    if (isResizing) {
      const onMouseMove = (e: MouseEvent) => {
        const sidebar = document.querySelector('.sidebar') as HTMLDivElement;
        sidebar.style.width = `${e.clientX}px`;
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
    <div className="relative sidebar w-[450px] h-screen">
      <div className="flex flex-col gap-y-2 h-full">
        <Navigation />
        <Library />
      </div>
      <div
        className="resize-bar absolute right-0 top-0 h-full hover:border-dotted w-2 cursor-col-resize"
        onMouseDown={() => setIsResizing(true)}
      ></div>
    </div>
  );
};

export default Sidebar;
