import Link from 'next/link';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

interface NavigationItemProps {
  href: string;
  active: boolean;
  icon: IconType;
  label: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  href,
  active,
  icon: Icon,
  label,
}) => {
  return (
    <Link
      href={href}
      className="flex items-center text-secondary-color hover:text-primary-color ease-in-out duration-300 px-1.5 py-2 gap-3 cursor-pointer w-full"
    >
      <Icon className={twMerge(active && 'text-white')} size={25} />
      <p className={twMerge('font-semibold', active && 'text-white')}>
        {label}
      </p>
    </Link>
  );
};

export default NavigationItem;
