import { UserCommodity } from "./user-commodity";

type Nullable<T> = T | null;

export interface UserCommodityResolved {
    userCommodity:Nullable<UserCommodity>;
    error?: any;
} 