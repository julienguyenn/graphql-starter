"use strict";
// src/schemas/Task.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const Project_1 = require("./Project");
let Task = class Task {
};
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int),
    __metadata("design:type", Number)
], Task.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Task.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(type => Project_1.default),
    __metadata("design:type", Project_1.default)
], Task.prototype, "project", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], Task.prototype, "completed", void 0);
Task = __decorate([
    type_graphql_1.ObjectType()
], Task);
exports.default = Task;
//# sourceMappingURL=Task.js.map