import { FormEvent, useState, useRef } from "react";

import IconEmail from "../../../assets/images/icon-email.svg";
import IconPassword from "../../../assets/images/icon-password.svg";

import { Input } from "../../Input";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
import { Text } from "../../Text";

import {
  PASSWORD_REQUIRED_LENGTH,
  SignUpErrors,
  SignUpPayload,
} from "../constants";
import { validateUserInput } from "./validateUserInput";

export interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
  action: string;
}

export const SignUpForm: React.FC<Props> = ({ action, ...props }) => {
  const formEl = useRef<HTMLFormElement>(null);

  const [payload, setPayload] = useState<SignUpPayload>({
    email: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState<SignUpErrors>({
    email: undefined,
    password: undefined,
    confirm_password: undefined,
  });

  const onSubmitHandler = async (e: FormEvent, action: string) => {
    if (!formEl.current) return;
    e.preventDefault();

    const clientSideErrors = validateUserInput(payload);
    setErrors(clientSideErrors);
    const isFormValid = Object.values(clientSideErrors).every(
      (value) => value === undefined
    );

    if (!isFormValid) return;

    try {
      const res = await fetch(action, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.errors) {
        setErrors({ ...data.errors });
      }
    } catch (err) {
      throw new Error(err as string);
    }
  };

  return (
    <form
      noValidate
      ref={formEl}
      className="flex flex-col gap-6"
      method="POST"
      action={action}
      onSubmit={(e) => onSubmitHandler(e, action)}
      {...props}
    >
      <Input
        name="email"
        type="email"
        label="Email address"
        placeholder="e.g. alex@email.com"
        autoComplete="email"
        icon={{ src: IconEmail, height: 16, width: 16 }}
        error={errors.email}
        onData={(_, value) => {
          setPayload({ ...payload, email: value });
        }}
        onChange={() => {
          setErrors({ ...errors, email: undefined });
        }}
      />

      <Input
        name="password"
        label="Create Password"
        type="password"
        placeholder="At least 8 characters"
        icon={{ src: IconPassword, height: 16, width: 16 }}
        autoComplete="current-password"
        error={errors.password}
        onData={(_, value) => {
          setPayload({ ...payload, password: value });
        }}
        onChange={() => {
          setErrors({ ...errors, password: undefined });
        }}
      />

      <Input
        name="confirm_password"
        label="Confirm Password"
        type="password"
        placeholder="At least 8 characters"
        icon={{ src: IconPassword, height: 16, width: 16 }}
        autoComplete="current-password"
        error={errors.confirm_password}
        onData={(_, value) => {
          setPayload({ ...payload, confirm_password: value });
        }}
        onChange={() => {
          setErrors({ ...errors, confirm_password: undefined });
        }}
      />

      <Text variant="body-sm" className="text-grey">
        Password must contain at least {PASSWORD_REQUIRED_LENGTH} characters
      </Text>

      <Button type="submit">Create new account</Button>

      <span className="text-center">
        <Text className="text-grey inline">Already have an account?</Text>{" "}
        <Link
          className="text-purple hover:text-purple-hover ease-out transition-colors duration-300 sm:inline block"
          to={"/login"}
        >
          Login
        </Link>
      </span>
    </form>
  );
};
