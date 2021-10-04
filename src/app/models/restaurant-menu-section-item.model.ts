export class RestaurantMenuSectionItem {
    id: string | number = "";
    itemName: string = "";
    description: string | undefined | null;
    imageUri: string | null | undefined;
    price: number | undefined;
    isFeatured: boolean = false;
    sectionId: number | undefined;
    orderLines: Array<any> = []
}