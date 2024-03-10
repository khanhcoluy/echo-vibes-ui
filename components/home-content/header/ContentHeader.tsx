'use client';

import { twMerge } from 'tailwind-merge';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { useRouter } from 'next/navigation';
import { FaRegUser } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import Button from '@/components/common/Button';
import AuthModal from '@/components/modal/AuthModal';
import {
  useDisclosure,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react';
import useAuth from '@/components/hooks/useAuth';
import { AuthContextType } from '@/components/hooks/useAuthContext';
import { isEmpty } from 'lodash';
import { useState } from 'react';

interface ContentHeaderProps {
  className?: string;
}

type ModalType = 'login' | 'signup';

const ContentHeader: React.FC<ContentHeaderProps> = ({ className }) => {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { auth, setAuth } = useAuth() as AuthContextType;
  const [modalType, setModalType] = useState<ModalType>('login');

  const onLoginModalClick = () => {
    setModalType('login');
    onOpen();
  };

  const onSignupModalClick = () => {
    setModalType('signup');
    onOpen();
  };

  return (
    <div
      className={twMerge(
        `
        h-fit 
        bg-gradient-to-b 
        from-sky-600
        px-5
        py-3
        `,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className="
              rounded-full 
              bg-black 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            "
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className="
              rounded-full 
              bg-black 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            "
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button
            onClick={() => router.push('/')}
            className="
              rounded-full 
              p-2 
              bg-white 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            "
          >
            <HiHome className="text-black" size={20} />
          </button>
          <button
            onClick={() => router.push('/search')}
            className="
              rounded-full 
              p-2 
              bg-white 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            "
          >
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          {!isEmpty(auth) ? (
            <Dropdown className="flex items-center bg-[#282828] rounded text-white">
              <DropdownTrigger>
                <Button className="bg-black p-3">
                  <FaRegUser className="text-white" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="User profile dropdown actions">
                <DropdownItem
                  className="rounded"
                  key="logout"
                  onClick={() => setAuth({})}
                >
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <>
              <div>
                <Button
                  onClick={onSignupModalClick}
                  className="
                    bg-transparent 
                    text-neutral-300 
                    font-medium
                  "
                >
                  Sign up
                </Button>
              </div>
              <div>
                <Button
                  onClick={onLoginModalClick}
                  className="bg-white px-6 py-2"
                >
                  Log in
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      <AuthModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
        modalType={modalType}
      />
    </div>
  );
};

export default ContentHeader;
