"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ProductsController_1 = __importDefault(require("../controllers/ProductsController"));
var productsRouter = express_1.Router();
var productsController = new ProductsController_1.default();
productsRouter.get('/:id', productsController.getProductsDetail);
productsRouter.get('/', productsController.getProductsSummary);
exports.default = productsRouter;
