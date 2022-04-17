import { UserCommodity } from "../commodity-interfaces/user-commodity";

type Nullable<T> = T | null;
export interface UserChange{

    changeId: number | undefined;
    changeTime: Date;
    changeAmount: number;
    totalAmount: number;
    commodityId: number;
    commodity: Nullable<UserCommodity>;
    userId: string;

}