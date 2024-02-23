import { Resend } from "resend";
import express from "express";

import { render } from "@react-email/render";
import VerifyAccount from "./template/verify-account";

const resend = new Resend("re_hbcaSuzW_Dqac7r5zEt1ULVGshKG7VCwM");

const app = express();

app.get("/email", async (req, res) => {
    const html = render(VerifyAccount({ code:"asdasd", inviteLink:"link", name:"nome" }), {
        pretty: true,
    });

    console.log(html);
});

const port = 3001;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
