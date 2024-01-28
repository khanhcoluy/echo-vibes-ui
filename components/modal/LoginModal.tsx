import { useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from '../api/axios';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from '@nextui-org/react';

import { EyeFilledIcon } from '../../app/custom-icons/EyeFilledIcon';
import { EyeSlashFilledIcon } from '../../app/custom-icons/EyeSlashFilledIcon';
import { MailIcon } from '../../app/custom-icons/MailIcon';
import useAuth from '../hooks/useAuth';
import { AuthContextType } from '../hooks/useAuthContext';

export interface LoginModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onClose: () => void;
}

export interface LoginFormData {
  email: string;
  password: string;
}

const LOGIN_URL = 'auth/authenticate';

const LoginModal: React.FC<LoginModalProps> = ({
  isOpen = false,
  onOpenChange,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState('');
  const { register, handleSubmit } = useForm<LoginFormData>();
  const { setAuth } = useAuth() as AuthContextType;

  const toggleVisibility = () => setIsVisible(!isVisible);
  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (value === '') return false;
    return validateEmail(value) ? false : true;
  }, [value]);

  const onSubmit: SubmitHandler<LoginFormData> = async ({
    email,
    password,
  }) => {
    try {
      const {
        data: { accessToken },
      } = await axios.post(LOGIN_URL, {
        email,
        password,
      });

      setAuth({ accessToken, email });
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className="bg-[#262626]"
      backdrop="blur"
    >
      <ModalContent className="d-flex ">
        {(onClose) => (
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader className="flex flex-col gap-1 text-white">
              Login
            </ModalHeader>
            <ModalBody className="w-full text-white">
              <Input
                {...register('email')}
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
                {...register('password')}
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
              <Button type="submit" className="bg-[#1ed760]">
                Login
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;
