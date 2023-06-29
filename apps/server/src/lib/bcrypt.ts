import { hash, compare } from "bcrypt";
import { promisify } from "util";

const hashPromise = promisify(hash);
const comparePromise = promisify(compare);
const salts = Number(process.env.SALT_ROUNDS);

export async function getPwdHash(pwd: string):Promise<string> {
  const hashPwd = await hashPromise(pwd, salts);
  return hashPwd;
}

export async function verifyPwdHash(pwd: string, hash: string):Promise<boolean> {
  const compareHash = await comparePromise(pwd, hash); 
  return compareHash;
}
