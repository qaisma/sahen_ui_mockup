export class Restaurant {
    RestaurantChain: RestaurantChain = new RestaurantChain();
    Menu: Menu = new Menu();
}

export class Menu {
    MenuSections: MenuSection[] = [];
}

export class MenuSection {
    SectionName: string = '';
    LogoUri: string = '';
    Sort: number = -1;
    MenuItems: MenuItem[] = [];
}

export class MenuItem {
    Id: number = -1;
    ItemName: string = '';
    Description: null | string = null;
    ImageUri: string = '';
    Price: number = -1;
    IsFeatured: number | null = null;
}

export class RestaurantChain {
    ChainName: string = '';
    LogoUri: string = '';
}
