export declare class CreateOrderDto {
    items: OrderItemDto[];
    card_hash: string;
}
export declare class OrderItemDto {
    quantity: number;
    product_id: string;
}
