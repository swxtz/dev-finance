export interface VerifyAccountEmail {
    code: string;
    link: string | URL;
    sendTo: string;
    name: string;
}
