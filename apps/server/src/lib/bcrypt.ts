import { hash } from "bcrypt";
import { promisify } from "util";

const hashPromise = promisify(hash);
const salts = Number(process.env.SALT_ROUNDS);

export async function getPwdHash(pwd: string) {
  const hashPwd = await hashPromise(pwd, salts);
  return hashPwd;
}
