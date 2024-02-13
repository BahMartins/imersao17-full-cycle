"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Order_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.OrderStatus = void 0;
const typeorm_1 = require("typeorm");
const order_item_entity_1 = require("./order-item.entity");
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING"] = "pending";
    OrderStatus["PAID"] = "paid";
    OrderStatus["FAILED"] = "failed";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
let Order = Order_1 = class Order {
    constructor() {
        this.status = OrderStatus.PENDING;
    }
    static create(input) {
        const order = new Order_1();
        order.client_id = input.client_id;
        order.items = input.items.map((item) => {
            const ordemItem = new order_item_entity_1.OrderItem();
            ordemItem.product_id = item.product_id;
            ordemItem.quantity = item.quantity;
            ordemItem.price = item.price;
            return ordemItem;
        });
        order.total = order.items.reduce((sum, item) => {
            return sum + item.price * item.quantity;
        }, 0);
        return order;
    }
};
exports.Order = Order;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Order.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Order.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Order.prototype, "client_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Order.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_item_entity_1.OrderItem, (item) => item.order, { cascade: ['insert'] }),
    __metadata("design:type", Array)
], Order.prototype, "items", void 0);
exports.Order = Order = Order_1 = __decorate([
    (0, typeorm_1.Entity)()
], Order);
//# sourceMappingURL=order.entity.js.map