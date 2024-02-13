import { CreateOrderDto } from './dto/create-order.dto';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { Product } from 'src/products/entities/product.entity';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
export declare class OrdersService {
    private orderRepo;
    private productRepo;
    private ampqConnection;
    constructor(orderRepo: Repository<Order>, productRepo: Repository<Product>, ampqConnection: AmqpConnection);
    create(createOrderDto: CreateOrderDto & {
        client_id: number;
    }): Promise<Order>;
    findAll(client_id: number): Promise<Order[]>;
    findOne(id: string, client_id: number): Promise<Order>;
}
