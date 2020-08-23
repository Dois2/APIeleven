"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var products_routes_1 = __importDefault(require("../../../../modules/products/infra/http/routes/products.routes"));
var users_routes_1 = __importDefault(require("../../../../modules/users/infra/http/routes/users.routes"));
var routes = express_1.Router();
routes.use('/api/v1/products', products_routes_1.default);
routes.use('/api/v1/user', users_routes_1.default);
exports.default = routes;
