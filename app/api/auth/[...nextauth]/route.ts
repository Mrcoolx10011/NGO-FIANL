import { NextRequest, NextResponse } from "next/server";
import NextAuth, { NextAuthOptions, Account, User as AuthUser, Profile } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "@/utils/db";
import { AdapterUser } from "next-auth/adapters";
import { NextApiRequest, NextApiResponse } from "next";

// Define the auth options with the correct types
 const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("Credentials are missing");
        }

        try {
          const user = await prisma.user.findFirst({
            where: { email: credentials.email },
          });

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password!);
            if (isPasswordCorrect) {
              return user;
            }
          }
          return null;
        } catch (err) {
          throw new Error(err as string);
        }
      },
    }),
    // Uncomment and configure additional providers if needed
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID ?? "",
    //   clientSecret: process.env.GITHUB_SECRET ?? "",
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID ?? "",
    //   clientSecret: process.env.GOOGLE_SECRET ?? "",
    // }),
  ],
  callbacks: {
    async signIn() {
      return true; 
    },    
  },
};
    // async signIn({ user, account }: { user: AuthUser; account: Account }) {
    //   if (account?.provider == "credentials") {
    //     return true;
    //   }
    //   // Add logic for other providers if needed
    //   // if (account?.provider === "github" || account?.provider === "google") {
    //   //   try {
    //   //     const existingUser = await prisma.user.findFirst({ where: { email: user.email! } });
    //   //     if (!existingUser) {
    //   //       await prisma.user.create({
    //   //         data: {
    //   //           id: nanoid(),
    //   //           email: user.email!,
    //   //         },
    //   //       });
    //   //     }
    //   //     return true;
    //   //   } catch (err) {
    //   //     console.log("Error saving user", err);
    //   //     return false;
    //   //   }
    //   // }

    // },
secret: process.env.NEXTAUTH_SECRET ;
DATABASE_URL:process.env.DATABASE_URL;
NEXTAUTH_URL:process.env.NEXTAUTH_URL;


// Define the handler using NextRequest and NextResponse
const authHandler =  NextAuth( authOptions);
export { authHandler as GET, authHandler as POST };
