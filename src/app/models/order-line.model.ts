export interface OrderLine {
    id: number | undefined,
    orderSessionId: string,
    //1: New, 2: Preparing, 3: Ready, 4: Delivered, 5: Cancelled, 6: Deleted By Customer
    statusId: 1 | 2 | 3 | 4 | 5 | 6,
    itemId: string,
    quantity: number,
    price: string,
    note: string
}