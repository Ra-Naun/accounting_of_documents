import bcrypt from "bcryptjs";

// Encrypting password before saving user
const preparePassword = async (password) => await bcrypt.hash(password, 10)

// Compare user password
const comparePassword = async (enteredPass, password) => await bcrypt.compare(enteredPass, password)

export default {
    preparePassword,
    comparePassword
}