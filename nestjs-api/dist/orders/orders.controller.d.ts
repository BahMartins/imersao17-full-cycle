import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Request } from 'express';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: CreateOrderDto, req: Request): Promise<import("./entities/order.entity").Order>;
    findAll(req: Request): Promise<import("./entities/order.entity").Order[]>;
    findOne(id: string, req: Request): Promise<import("./entities/order.entity").Order>;
}
