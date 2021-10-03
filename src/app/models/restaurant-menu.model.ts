import { RestaurantMenuSectionModel } from "./restaurant-menu-section.model";

export class RestaurantMenuModel {
    id: string = "";
    name: string = "";
    menuSections: Array<RestaurantMenuSectionModel> = [];

    constructor() {
        this.id = ''
        this.name = ''
        this.menuSections = []
    }
}