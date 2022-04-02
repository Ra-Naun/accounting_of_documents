import bcrypt from "bcryptjs";

// Encrypting password before saving user
const preparePassword = async (password) => await bcrypt.hash(password, 10)

// Compare user password
const comparePassword = async (enteredPass, password) => await bcrypt.compare(enteredPass, password)

const ID_MATCHER = {
    'Работник склада': 1,
    'Экспедитор': 2,
    'Продавец': 3,
    'Администратор': 4
}

export {
    preparePassword,
    comparePassword,
    ID_MATCHER,
}