import { FormEvent, useState, useRef } from "react";

import { Input } from "../../Input";
import { Link } from "react-router-dom";
import { Text } from "../../Text";
import { Button } from "../../Button";

import IconEmail from "../../../assets/images/icon-email.svg";
import IconPassword from "../../../assets/images/icon-password.svg";

import { ErrorTypes, LoginErrors, LoginPayload } from "../constants";
import { validateUserInput } from "./validateUserInput";

export interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
  action: string;
}

export const LoginForm: React.FC<Props> = ({ action, ...props }) => {
  const formEl = useRef<HTMLFormElement>(null);

  const [payload, setPayload] = useState<LoginPayload>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<LoginErrors>({
    email: undefined,
    password: undefined,
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

      if (data.error) {
        setErrors({ email: ErrorTypes.Invalid, password: ErrorTypes.Invalid });
        formEl.current.reset();
        formEl.current.querySelector("input")?.focus();
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
          setPayload({ email: value, password: payload?.password });
        }}
        onChange={() => {
          setErrors({ ...errors, email: undefined });
        }}
      />

      <Input
        name="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        icon={{ src: IconPassword, height: 16, width: 16 }}
        autoComplete="current-password"
        error={errors.password}
        onData={(_, value) => {
          setPayload({ email: payload?.email, password: value });
        }}
        onChange={() => {
          setErrors({ ...errors, password: undefined });
        }}
      />

      <Button type="submit">Login</Button>

      <span className="text-center">
        <Text className="text-grey inline">Don’t have an account?</Text>{" "}
        <Link
          className="text-purple hover:text-purple-hover ease-out transition-colors duration-300 sm:inline block"
          to={"/sign-up"}
        >
          Create account
        </Link>
      </span>
    </form>
  );
};
