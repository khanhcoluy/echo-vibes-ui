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
  modalType: string;
}

export interface LoginFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const LOGIN_URL = 'auth/authenticate';
const SIGNUP_URL = 'auth/register';

const LoginModal: React.FC<LoginModalProps> = ({
  isOpen = false,
  onOpenChange,
  onClose,
  modalType,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [value, setValue] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  const { setAuth } = useAuth() as AuthContextType;

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleConfirmPasswordVisibility = () =>
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isEmailInvalid = useMemo(() => {
    if (value === '') return false;
    return validateEmail(value) ? false : true;
  }, [value]);

  const checkPasswordMatch = (): boolean => {
    if (!confirmPassword) {
      return true;
    }
    return password === confirmPassword;
  };

  const onSubmit: SubmitHandler<LoginFormData> = async ({
    firstName,
    lastName,
    email,
    password,
  }) => {
    try {
      const {
        data: { accessToken },
      } =
        modalType === 'signup'
          ? await axios.post(SIGNUP_URL, {
              firstName,
              lastName,
              email,
              password,
            })
          : await axios.post(LOGIN_URL, {
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
              {modalType === 'signup' ? 'Sign up' : 'Login'}
            </ModalHeader>
            <ModalBody className="w-full text-white">
              {modalType === 'signup' && (
                <>
                  <Input
                    {...register('firstName')}
                    type="text"
                    label="First name"
                    placeholder="Enter your first name"
                    color="secondary"
                    isRequired
                    variant="bordered"
                  />
                  <Input
                    {...register('lastName')}
                    type="text"
                    label="Last name"
                    placeholder="Enter your last name"
                    color="secondary"
                    isRequired
                    variant="bordered"
                  />
                </>
              )}
              <Input
                {...register('email')}
                type="email"
                label="Email"
                placeholder="Enter your email"
                isInvalid={isEmailInvalid}
                color={isEmailInvalid ? 'danger' : 'secondary'}
                isRequired
                variant="bordered"
                errorMessage={isEmailInvalid && 'Please enter a valid email'}
                onValueChange={setValue}
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
                onValueChange={setPassword}
              />
              {modalType === 'signup' && (
                <Input
                  {...register('confirmPassword')}
                  label="Cornfirm password"
                  placeholder="Confirm your password"
                  variant="bordered"
                  color="secondary"
                  isRequired
                  isInvalid={!checkPasswordMatch()}
                  errorMessage={
                    !checkPasswordMatch() && 'Passwords do not match'
                  }
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleConfirmPasswordVisibility}
                    >
                      {isConfirmPasswordVisible ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isConfirmPasswordVisible ? 'text' : 'password'}
                  onValueChange={setConfirmPassword}
                />
              )}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button type="submit" className="bg-[#1ed760]">
                {modalType === 'signup' ? 'Sign up' : 'Login'}
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;
