import { Icon } from "../components/Icon";
import LogoDevLinksIcon from "../assets/images/logo-devlinks-large.svg";
import { Text } from "../components/Text";
import { LoginForm } from "../components/Forms/Login";
import { Link } from "react-router-dom";
import { Section } from "../components/Section";

export const LoginPage: React.FC = () => {
  return (
    <main className="sm:bg-white-primary bg-white-secondary items-center">
      <Section className="flex flex-col sm:justify-center items-center justify-start sm:min-h-screen">
        <Link to="/" className="mb-10 self-start sm:self-auto">
          <Icon src={LogoDevLinksIcon} width={180} height={40} />
        </Link>

        <div className="bg-white-secondary sm:p-10 rounded-xl sm:min-w-[476px] min-w-full sm:border border-grey-light">
          <Text
            text="Login"
            variant="heading-md"
            className="mb-2 text-grey-dark"
          />

          <Text
            text="Add your details below to get back into the app"
            variant="body-md"
            className="text-grey mb-10"
          />

          <LoginForm action="http://localhost:5000/login" />
        </div>
      </Section>
    </main>
  );
};
