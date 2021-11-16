import { MenuItem } from "./restaurant.model";

export class CartItem {
    itemId: string = '';
    item = new MenuItem();
    quantity: number = 0;
    message: string = '';
}
export class Cart {
    customerName: string = '';
    customerPhoneNumber: string = ';'
    customMessage: string = '';
    tableNumber: string = '';
    items: Array<CartItem> = [];
}
