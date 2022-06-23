import { Address } from "./Address";
import { Product } from "./Product";
import { Store } from "./Store";

export interface Order {
    id: number,
    address: Address,
    products: Product[],
    deliveryId: number,
    deliveryTimestamp: string,
    orderTimestamp: string,
    store: Store,
    status: string,
 }