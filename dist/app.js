"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const livro_route_1 = require("./routes/livro-route");
const swagger_json_1 = __importDefault(require("./swagger.json"));
const app = (0, express_1.default)();
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.use(body_parser_1.default.json());
app.use("/v1", livro_route_1.livroRouter);
app.listen(3000, () => console.log("Server is running on http://localhost:3000"));
