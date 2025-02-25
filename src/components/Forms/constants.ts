export const PASSWORD_REQUIRED_LENGTH = 8;

export enum ErrorTypes {
  Required = 'required',
  InvalidEmail = 'invalidEmail',
  PasswordsNoMatch = 'passwordsNoMatch',
  ShortPassword = 'shortPassword',
  NoneExistingEmail = 'noneExistingEmail',
  IncorrectPassword = 'incorrectPassword',
  EmailAlreadyTaken = 'emailAlreadyTaken',
}

export const ERROR_MESSAGES = {
  required: 'This field is required.',
  invalidEmail: 'The email is not valid.',
  noneExistingEmail: "This email address doesn't exist in our database.",
  incorrectPassword: 'Wrong Password, please try again!',
  emailAlreadyTaken: 'This email address is already registered.',
  passwordsNoMatch: "Passwords don't match!",
  shortPassword: `Password must be at least ${PASSWORD_REQUIRED_LENGTH} characters.`,
};

export type SignUpErrors = {
  email: ErrorTypes | undefined;
  password: ErrorTypes | undefined;
  confirm_password?: ErrorTypes | undefined;
};

export type LoginErrors = {
  email: ErrorTypes | undefined;
  password: ErrorTypes | undefined;
};

export type SignUpPayload = {
  email: string | undefined;
  password: string | undefined;
  confirm_password?: string | undefined;
};

export type LoginPayload = {
  email: string | undefined;
  password: string | undefined;
};
