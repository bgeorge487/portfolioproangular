import { UserCommodity } from "./user-commodity";

export interface UserChange{

    changeId: number;
    changeTime: string;
    changeAmount: string;
    totalAmount: number;
    commodityId: number;
    commodity: UserCommodity;

}