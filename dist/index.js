"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = __importDefault(require("./models/index"));
const index_2 = __importDefault(require("./Routes/index"));
class Server {
    constructor() {
        this.api = {
            user: '/api/user'
        };
        dotenv_1.default.config();
        this.app = (0, express_1.default)();
        this.port = parseInt(process.env.PORT);
        this.Middlewares();
        this.Listen();
        this.DbInithialize();
        this.Routes();
    }
    Listen() {
        this.app.listen(this.port, () => {
            console.log(`Starting Server on Port --> ${this.port}`);
        });
    }
    Middlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    DbInithialize() {
        index_1.default.sequelize.sync().then(() => console.log('Database Connected Successful'));
    }
    Routes() {
        this.app.use(this.api.user, index_2.default);
    }
}
new Server();
//# sourceMappingURL=index.js.map