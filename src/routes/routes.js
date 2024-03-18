import CartContainer from "../Components/pages/cart/CartContainer";
import ItemDetailContainer from "../Components/pages/itemDetail/ItemDetailContainer";
import { ItemListContainer } from "../Components/pages/itemList/ItemListContainer";

export const routes = [
    {
        id: "home",
        path: "/",
        Element: ItemListContainer
    },
    {
        id: "categories",
        path: "/category/:categoryName",
        Element: ItemListContainer
    },
    {
        id: "detalle",
        path: "/item/:id",
        Element: ItemDetailContainer
    },
    {  
         id:"carrito",
         path:"/cart",
         Element:CartContainer 
    }

]