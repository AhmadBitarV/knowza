import { isValidEmail } from "../../../utils/isEmailValid";
import {
  ErrorTypes,
  SignUpErrors,
  PASSWORD_REQUIRED_LENGTH,
  SignUpPayload,
} from "../constants";

export const validateUserInput = (payload: SignUpPayload) => {
  const errors: SignUpErrors = {
    email: undefined,
    password: undefined,
    confirm_password: undefined,
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

  if (!payload.confirm_password) {
    errors.confirm_password = ErrorTypes.Required;
  }

  if (
    payload.confirm_password &&
    payload.confirm_password.length < PASSWORD_REQUIRED_LENGTH
  ) {
    errors.confirm_password = ErrorTypes.ShortPassword;
  }

  if (payload.password !== payload.confirm_password) {
    errors.password = ErrorTypes.PasswordsNoMatch;
    errors.confirm_password = ErrorTypes.PasswordsNoMatch;
  }

  if (!payload.firstName) {
    errors.firstName = ErrorTypes.Required;
  }

  if (!payload.lastName) {
    errors.lastName = ErrorTypes.Required;
  }

  return errors;
};
