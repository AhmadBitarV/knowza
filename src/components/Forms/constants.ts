export const PASSWORD_REQUIRED_LENGTH = 8;

export enum ErrorTypes {
  Required = "required",
  InvalidEmail = "invalidEmail",
  PasswordsNoMatch = "passwordsNoMatch",
  ShortPassword = "shortPassword",
  NoneExistingEmail = "noneExistingEmail",
  IncorrectPassword = "incorrectPassword",
  EmailAlreadyTaken = "emailAlreadyTaken",
}

export const ERROR_MESSAGES = {
  required: "This field is required.",
  invalidEmail: "The email is not valid.",
  noneExistingEmail: "This email address doesn't exist in our database.",
  incorrectPassword: "Wrong Password, please try again!",
  emailAlreadyTaken: "This email address is already registered.",
  passwordsNoMatch: "Passwords don't match!",
  shortPassword: `Password must be at least ${PASSWORD_REQUIRED_LENGTH} characters.`,
};

export type SignUpErrors = {
  email?: ErrorTypes.Required | ErrorTypes.InvalidEmail;
  password?:
    | ErrorTypes.Required
    | ErrorTypes.ShortPassword
    | ErrorTypes.PasswordsNoMatch;
  confirm_password?:
    | ErrorTypes.Required
    | ErrorTypes.PasswordsNoMatch
    | ErrorTypes.ShortPassword;
  firstName?: ErrorTypes.Required;
  lastName?: ErrorTypes.Required;
  phoneNumber?: ErrorTypes.Required;
};

export type LoginErrors = {
  email?:
    | ErrorTypes.Required
    | ErrorTypes.InvalidEmail
    | ErrorTypes.NoneExistingEmail;
  password?: ErrorTypes.Required;
};

export type SignUpPayload = {
  email: string;
  password: string;
  confirm_password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  login_automatically: boolean;
};

export type LoginPayload = {
  email: string;
  password: string;
};
