/* eslint-disable prettier/prettier */
import * as bcrypt from 'bcrypt';

export function EncodePassword(rawPassword: string) {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(rawPassword, salt);
}
