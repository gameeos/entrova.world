import credentialsProvider from "next-auth/providers/credentials";
import {
  type SIWESession,
  verifySignature,
  getChainIdFromMessage,
  getAddressFromMessage,
} from "@reown/appkit-siwe";
import { AuthOptions } from "next-auth";

declare module "next-auth" {
  interface Session extends SIWESession {
    address: string;
    chainId: number;
    userId: string;
  }
}

const nextAuthSecret = process.env.NEXTAUTH_SECRET;
if (!nextAuthSecret) {
  throw new Error("NEXTAUTH_SECRET is not set");
}

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
if (!projectId) {
  throw new Error("NEXT_PUBLIC_PROJECT_ID is not set");
}

const providers = [
  credentialsProvider({
    name: "Ethereum",
    credentials: {
      message: {
        label: "Message",
        type: "text",
        placeholder: "0x0",
      },
      signature: {
        label: "Signature",
        type: "text",
        placeholder: "0x0",
      },
    },
    async authorize(credentials) {
      try {
        if (!credentials?.message) {
          throw new Error("SiweMessage is undefined");
        }
        const { message, signature } = credentials;
        const address = getAddressFromMessage(message);
        const chainId = getChainIdFromMessage(message);

        const isValid = await verifySignature({
          address,
          message,
          signature,
          chainId,
          projectId,
        });

        const response = await fetch(
          `https://gameplus.ai/api/user/by/wallet/${address}`,
          {
            headers: {
              managetoken: "df32406c-13ba-4c85-8d75-27aba09a50ec",
            },
          }
        );
        const user = await response.json();

        if (isValid) {
          return {
            id: `${chainId}:${address}:${user.id}`,
          };
        }

        return null;
      } catch (e) {
        console.error(e);
        return null;
      }
    },
  }),
];

const authOptions: AuthOptions = {
  secret: nextAuthSecret,
  providers,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    session({ session, token }) {
      if (!token.sub) {
        return session;
      }

      const [, chainId, address, userId] = token.sub.split(":");
      if (chainId && address) {
        session.address = address;
        session.chainId = parseInt(chainId, 10);
        session.userId = userId;
      }

      return session;
    },
  },
};

export { authOptions };
