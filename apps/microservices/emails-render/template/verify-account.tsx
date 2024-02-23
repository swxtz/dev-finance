import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Section,
    Tailwind,
    Text,
} from "@react-email/components";

interface VerifyAccountProps {
    name: string;
    inviteLink: string;
    code: string;
}

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";

export default function VerifyAccount({
    name,
    inviteLink,
    code,
}: VerifyAccountProps) {
    const year = new Date().getFullYear();

    return (
        <Html className="bg-zinc-600">
            <Head />
            <Preview>Codigo de Verificação</Preview>
            <Tailwind>
                <Body className="bg-[#0A0A0A] text-[#eaeaea] my-[200px]">
                    <Container className="border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
                        <Section className="mt-[32px]">
                            <Img
                                src={`${baseUrl}/static/logo.png`}
                                width="222"
                                height="28"
                                alt="Dev.Finance"
                                className="my-0 mx-auto"
                            />
                        </Section>

                        <Heading className="text-[#eaeaea] text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                            Bem-vindo ao <strong>dev.finance</strong>
                        </Heading>

                        <Text className="text-[#eaeaea] text-[24px] leading-[24px]">
                            Olá <strong>{name}</strong>, obrigado por criar sua
                            conta.
                        </Text>

                        <Text className="text-[#eaeaea] text-[16px] leading-[24px]">
                            Você está a um passo de organizar sua vida
                            financeira, para continuar, por favor, confirme seu
                            e-mail.
                        </Text>

                        <Text className="mt-[48px] text-[28px]">
                            <strong>Seu Codígo de Verificação:</strong>
                        </Text>

                        <Text className="mt-[48px] text-center uppercase tracking-[.30em]">
                            <strong className="py-4 px-8 text-[28px] border border-solid border-[#eaeaea]">
                                {code}
                            </strong>
                        </Text>

                        {/* <Container className="my-4">
                            <Hr />
                        </Container> */}

                        <Container className="mt-4 text-center">
                            <Text className="mt-4 text-[#eaeaea] text-[16px] leading-[24px]">
                                Ou se preferir, clique no botão abaixo para
                                confirmar
                            </Text>

                            <Button
                                className="bg-[#062D15] mx-auto rounded text-white text-[16px] font-semibold no-underline text-center px-5 py-3"
                                href={inviteLink}
                            >
                                Verificar Conta
                            </Button>
                        </Container>

                        <Section className="mt-[80px] border-t border-solid border-zinc-500">
                            <Text className="mt-8 text-[16px] leading-[24px] text-gray-400 text-center">
                                Todos os direitos reservados &copy; dev.finance${" "}
                                {year}.
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
