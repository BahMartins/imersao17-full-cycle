import { OrderItem } from './order-item.entity';
export declare enum OrderStatus {
    PENDING = "pending",
    PAID = "paid",
    FAILED = "failed"
}
export type CreateOrderCommand = {
    client_id: number;
    items: {
        product_id: string;
        quantity: number;
        price: number;
    }[];
};
export declare class Order {
    id: string;
    total: number;
    client_id: number;
    status: OrderStatus;
    created_at: Date;
    items: OrderItem[];
    static create(input: CreateOrderCommand): Order;
}
