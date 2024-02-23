import { SociaisButton } from "../SociaisButton/SociaisButton";
import GithubLogo from "../../../assets/github-logo.svg";
import GoogleLogo from "../../../assets/google-logo.svg";
import FacebookLogo from "../../../assets/facebook-logo.svg";

export function SociaisButtons() {

    return (
        <div className="flex flex-col justify-center items-center gap-6">
            <SociaisButton imgSource={GithubLogo} href="#" variant="github" text="github">
                Continue com Github
            </SociaisButton>
            <SociaisButton imgSource={GoogleLogo} href="#" variant="google" text="google">
                Continue com Google
            </SociaisButton>
            <SociaisButton imgSource={FacebookLogo} href="#" variant="facebook" text="facebook">
                Continue com Facebook
            </SociaisButton>
        </div>
    );
}