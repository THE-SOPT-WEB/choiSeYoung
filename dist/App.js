"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
const Game_1 = __importDefault(require("./pages/Game"));
const GlobalStyle_1 = __importDefault(require("./style/GlobalStyle"));
const react_1 = __importDefault(require("react"));
function App() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(GlobalStyle_1.default, null),
        react_1.default.createElement(Game_1.default, null)));
}
exports.default = App;
//# sourceMappingURL=App.js.map