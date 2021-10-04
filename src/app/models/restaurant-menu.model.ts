import { RestaurantMenuSectionModel } from "./restaurant-menu-section.model";

export class RestaurantMenuModel {
    id: string | number = "";
    menuName: string = "";
    menuSections: Array<RestaurantMenuSectionModel> = [];
    chainId: number | undefined;
    
    restaurants: Array<any> = []

    constructor() {
        this.id = ''
        this.menuName = ''
        this.menuSections = []
    }
}