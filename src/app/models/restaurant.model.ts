import { RestaurantMenuModel } from "./restaurant-menu.model";

export class Restaurant {
    chainName: string = "";
    logoUri: string = "";
    menus: Array<RestaurantMenuModel> = [];

    constructor() {
        this.chainName = ""
        this.menus = []
        this.logoUri = ""
    }
}