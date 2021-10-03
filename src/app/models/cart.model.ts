export class CartItem {
    itemId: string
    quantity: number

    constructor() {
        this.itemId = ''
        this.quantity = 0
    }
}
export class Cart {
    items: Array<CartItem>

    constructor() {
        this.items = []
    }
}
