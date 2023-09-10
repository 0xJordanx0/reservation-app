import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

import CredentialsProvider from "next-auth/providers/credentials";
const options = {
  pages: {
    signIn: "/auth/signin"
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        const {username, password} = credentials as {username: string, password: string}
        const user = await prisma.user.findFirst({
          where: {
            username,
          },
          select: {
            id: true,
            username: true,
            password: true,
            first_name: true,
            last_name: true,
          },
        });
        if(user && credentials){
          const isValid = await bcrypt.compare(password.toString()!, user?.password);
          if(isValid){
            return {...user, id: user.id.toString()};
          }
        }      
        return null;
        }
    }),
  ],
  callbacks: {
    async jwt({ user, token }:any) {
      if (user) {
        token.user = { ...user };
      }
      return token;
    },
    async session({ session, token }:any) {
      if (token?.user) {
        session.user = token.user;
      }
      return session;
    },
  },
};

export default options;
