import { Category } from "./Category";

export class Product {
    id!: number
    name!: string
    price!: number
    description!: string
    category!: Category

    amount: number = 0
    total_price: number = 0
 }