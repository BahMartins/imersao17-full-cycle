import { Product } from 'src/products/entities/product.entity';
import { Order } from './order.entity';
export declare class OrderItem {
    id: number;
    quantity: number;
    price: number;
    product: Product;
    product_id: string;
    order: Order;
}
