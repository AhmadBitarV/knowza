import { isValidEmail } from '../../../utils/isEmailValid';
import {
  ErrorTypes,
  LoginErrors,
  PASSWORD_REQUIRED_LENGTH,
  SignUpPayload,
} from '../constants';

export const validateUserInput = (payload: SignUpPayload) => {
  const errors: LoginErrors = {
    email: undefined,
    password: undefined,
  };

  if (!payload.email) {
    errors.email = ErrorTypes.Required;
  }

  if (payload.email && !isValidEmail(payload.email)) {
    errors.email = ErrorTypes.InvalidEmail;
  }

  if (!payload.password) {
    errors.password = ErrorTypes.Required;
  }

  if (payload.password && payload.password.length < PASSWORD_REQUIRED_LENGTH) {
    errors.password = ErrorTypes.ShortPassword;
  }

  return errors;
};
