import {
  Account,
  Avatars,
  Client,
  TablesDB,
  ID,
  Query,
} from "react-native-appwrite";
import { CreateUserParams, SignInParams } from "@/type";
import { User } from "@/type";

export const appwriteConfig = {
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  projectName: process.env.EXPO_PUBLIC_APPWRITE_PROJECT,
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  platform: process.env.EXPO_PUBLIC_APPWRITE_PLATFORM,
  databaseId: process.env.EXPO_PUBLIC_APPWRITE_DB_ID,
  userTableId: process.env.EXPO_PUBLIC_APPWRITE_USER_TABLE_ID,
};

export const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint!)
  .setProject(appwriteConfig.projectId!)
  .setPlatform(appwriteConfig.platform!);

export const account = new Account(client);
export const tablesDB = new TablesDB(client);
const avatars = new Avatars(client);

export const createUser = async ({
  email,
  password,
  name,
}: CreateUserParams) => {
  try {
    const newAccount = await account.create({
      userId: ID.unique(),
      email,
      password,
      name,
    });

    if (!newAccount) throw Error;

    await signIn({
      email,
      password,
    });

    const avatarUrl = avatars.getInitialsURL(name);
    return await tablesDB.createRow({
      databaseId: appwriteConfig.databaseId!,
      tableId: appwriteConfig.userTableId!,
      rowId: ID.unique(),
      data: {
        accountId: newAccount.$id,
        email,
        name,
        avatar: avatarUrl,
      },
    });
  } catch (e) {
    throw new Error(e as string);
  }
};

export const signIn = async ({ email, password }: SignInParams) => {
  try {
    return await account.createEmailPasswordSession({ email, password });
  } catch (e) {
    throw new Error(e as string);
  }
};

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();

    if (!currentAccount) throw Error;

    const currentUser = await tablesDB.listRows<User>({
      databaseId: appwriteConfig.databaseId!,
      tableId: appwriteConfig.userTableId!,
      queries: [Query.equal("accountId", currentAccount.$id)],
    });
    if (!currentUser) throw Error;

    return currentUser.rows[0];
  } catch (e) {
    throw new Error(e as string);
  }
};
