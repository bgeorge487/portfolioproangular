import { CommodityInterface } from "./commodity";
import { UserInterface } from "./user";

export interface ChangeInterface {

    changeId: number;
    changeTime: Date;
    changeAmount: number;
    totalAmount: number;
    user: UserInterface;
    commodity: CommodityInterface;
}