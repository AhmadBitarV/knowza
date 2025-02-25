import { isValidEmail } from "../../../utils/isEmailValid";
import { ErrorTypes, LoginErrors, LoginPayload } from "../constants";

export const validateUserInput = (payload: LoginPayload) => {
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

  return errors;
};
