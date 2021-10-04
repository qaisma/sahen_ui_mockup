import { RestaurantMenuSectionItem } from "./restaurant-menu-section-item.model";

export class RestaurantMenuSectionModel {
    id: number | undefined;
    menuId: string | number = "";
    sectionName: string = "";
    logoUri: string | undefined | null;
    menuItems: Array<RestaurantMenuSectionItem> = [];
    sort: number | undefined;
}