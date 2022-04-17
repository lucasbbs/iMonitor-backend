"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const path_1 = __importDefault(require("path"));
require("dotenv/config");
// const db = knex({
//   client: 'pg',
//   connection: {
//     host : process.env.PG_HOST,
//     user : process.env.PG_USER,
//     password : process.env.PG_PASSWORD,
//     database : process.env.PG_DATABASE,
//   },
//   useNullAsDefault: true,
// });
const db = (0, knex_1.default)({
    client: 'sqlite3',
    connection: {
        filename: path_1.default.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true,
});
exports.default = db;
