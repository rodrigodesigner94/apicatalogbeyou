/* eslint-disable prettier/prettier */
import * as bcrypt from 'bcrypt';
const salts = 10;

export function EncodePassword(rawPassword: string) {
  const salt = bcrypt.genSaltSync(salts);
  return bcrypt.hashSync(rawPassword, salt);
}
