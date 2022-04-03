import NextAuth from "next-auth";
import Providers from "next-auth/providers";

import db from '../../../db/models';
import { comparePassword, ID_MATCHER } from '../../../utils/cryptoUtils'

const { models: { User } } = db;

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {

        const { login, password } = credentials;

        // Check if email and password is entered
        if (!login || !password) {
          throw new Error("Please enter email or password");
        }

        // Find user in the database
        const user = await User.findOne({ where: { email: login } });

        if (!user) {
          throw new Error("Invalid Email or Password");
        }

        if (!user.dataValues.isActive) {
          throw new Error("User must be activated by admin");
        }

        // Check if password is correct or not
        const isPasswordMatched = await comparePassword(password, user.dataValues.password);

        if (!isPasswordMatched) {
          throw new Error("Invalid Email or Password");
        }

        return Promise.resolve(user);
      },
    }),
  ],
  callbacks: {
    jwt: async (token, user) => {
      if (user) {
        const { isActive, role_id, id } = user.dataValues
        token.user = { isActive, role_id, id }
      }
    
      return Promise.resolve(token);
    },
    session: async (session, user) => {
      session.user = user.user;
      return Promise.resolve(session);
    },
  },
});