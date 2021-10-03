import { RestaurantMenuSectionItem } from "./restaurant-menu-section-item.model";

export class RestaurantMenuSectionModel {
    menuId: string = "";
    sectionName: string = "";
    logoUri: string = "";
    menuItems:Array<RestaurantMenuSectionItem>=[];
}