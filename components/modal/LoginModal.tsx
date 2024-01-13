import { useMemo, useState } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from '@nextui-org/react';

import { EyeFilledIcon } from '../custom-icons/EyeFilledIcon';
import { EyeSlashFilledIcon } from '../custom-icons/EyeSlashFilledIcon';
import { MailIcon } from '../custom-icons/MailIcon';

export interface LoginModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  isOpen = false,
  onOpenChange,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState('');

  const toggleVisibility = () => setIsVisible(!isVisible);
  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (value === '') return false;
    return validateEmail(value) ? false : true;
  }, [value]);

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="bg-[#262626]">
      <ModalContent className="d-flex ">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-white">
              Login
            </ModalHeader>
            <ModalBody className="w-full text-white">
              <Input
                type="email"
                label="Email"
                placeholder="Enter your email"
                isInvalid={isInvalid}
                color={isInvalid ? 'danger' : 'secondary'}
                isRequired
                variant="bordered"
                errorMessage={isInvalid && 'Please enter a valid email'}
                onValueChange={setValue}
                endContent={
                  <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
              <Input
                label="Password"
                placeholder="Enter your password"
                variant="bordered"
                color="secondary"
                isRequired
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isVisible ? 'text' : 'password'}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button onPress={onClose} className="bg-[#1ed760]">
                Login
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;
