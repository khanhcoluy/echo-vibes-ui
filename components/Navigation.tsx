'use client';

import { GoHome, GoHomeFill } from 'react-icons/go';
import { BiSearch, BiSearchAlt } from 'react-icons/bi';
import { usePathname } from 'next/navigation';
import NavigationItem from './NavigationItem';

const Navigation: React.FC = () => {
  const pathName = usePathname();

  const navigationMenu = [
    {
      label: 'Home',
      active: pathName === '/',
      icon: pathName === '/' ? GoHomeFill : GoHome,
      href: '/',
    },
    {
      label: 'Search',
      active: pathName === '/search',
      icon: pathName === '/search' ? BiSearchAlt : BiSearch,
      href: '/search',
    },
  ];

  return (
    <>
      <div className="bg-primary w-full h-[130px] justify-center">
        <ul className="h-full flex flex-col px-[12px] py-[8px] justify-around">
          {navigationMenu.map((navigationItem, index) => (
            <NavigationItem
              key={index}
              icon={navigationItem.icon}
              label={navigationItem.label}
              active={navigationItem.active}
              href={navigationItem.href}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navigation;
