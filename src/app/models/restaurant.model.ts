import { RestaurantMenuModel } from "./restaurant-menu.model";

export class Restaurant {
    chainName: string = "";
    logoUri: string = "";
    menus: Array<RestaurantMenuModel> = [];
    id: number | undefined;
    orderId: number | undefined;
    changeUserId: number | null | undefined;
    changeUser: any;
    restaurants: Array<any> = [];

    constructor() {
        this.chainName = ""
        this.menus = []
        this.logoUri = ""
    }
}