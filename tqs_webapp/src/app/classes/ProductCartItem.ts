import { List } from "./List";
import { Product } from "./Product";

export class ProductCartItem {
    id!: number
    amount!: number
    list!: List
    product!: Product
 }