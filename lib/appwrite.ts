import {
  Account,
  Avatars,
  Client,
  TablesDB,
  ID,
  Query,
  Storage,
} from "react-native-appwrite";
import {
  Category,
  CreateUserParams,
  GetMenuParams,
  SignInParams,
} from "@/type";
import { User, MenuItem } from "@/type";

export const appwriteConfig = {
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  projectName: process.env.EXPO_PUBLIC_APPWRITE_PROJECT,
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  platform: process.env.EXPO_PUBLIC_APPWRITE_PLATFORM,
  databaseId: process.env.EXPO_PUBLIC_APPWRITE_DB_ID,
  bucketId: process.env.EXPO_PUBLIC_APPWRITE_BUCKET_ID,
  userTableId: process.env.EXPO_PUBLIC_APPWRITE_USER_TABLE_ID,
  categoriesTableId: process.env.EXPO_PUBLIC_APPWRITE_CATEGORIES_TABLE_ID,
  menuTableId: process.env.EXPO_PUBLIC_APPWRITE_MENU_TABLE_ID,
  customizationsTableId:
    process.env.EXPO_PUBLIC_APPWRITE_CUSTOMIZATIONS_TABLE_ID,
  menuCustomizationsTableId:
    process.env.EXPO_PUBLIC_APPWRITE_MENU_CUSTOMIZATIONS_TABLE_ID,
};

export const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint!)
  .setProject(appwriteConfig.projectId!)
  .setPlatform(appwriteConfig.platform!);

export const account = new Account(client);
export const tablesDB = new TablesDB(client);
export const storage = new Storage(client);

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

export const getMenu = async ({ category, query, limit }: GetMenuParams) => {
  try {
    const queries: string[] = [];

    if (category) queries.push(Query.equal("categories", category));
    if (query) queries.push(Query.search("name", query));
    if (limit) queries.push(Query.limit(limit));

    const menus = await tablesDB.listRows<MenuItem>({
      databaseId: appwriteConfig.databaseId!,
      tableId: appwriteConfig.menuTableId!,
      queries: queries,
    });

    return menus.rows;
  } catch (e) {
    throw new Error(e as string);
  }
};

export const getCategories = async () => {
  try {
    const categories = await tablesDB.listRows<Category>({
      databaseId: appwriteConfig.databaseId!,
      tableId: appwriteConfig.categoriesTableId!,
    });
    return categories.rows;
  } catch (e) {
    throw new Error(e as string);
  }
};
