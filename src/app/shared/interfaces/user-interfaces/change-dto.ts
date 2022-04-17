export interface ChangeDto{

    changeTime: Date;
    changeAmount: number;
    totalAmount: number;
    commodityId?: number;
    userId: string;

}