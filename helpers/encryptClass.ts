const bcrypt = require('bcryptjs');
const saltRounds = 10;

export const encryptPassword = (password): string => {
  try{
    const salt = bcrypt.genSaltSync(saltRounds);
    const passwordEncrypt = bcrypt.hashSync(password, salt);
    return passwordEncrypt;
  }catch(e) {
    throw new Error("Error when generate the password");
  }
}

export const comparePassword = (password: string,passwordFromDB: string): string => {
    const isCorrectPassword = bcrypt.compareSync(password, passwordFromDB);
    return isCorrectPassword;
}