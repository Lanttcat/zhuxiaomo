"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("React");
var styled_components_1 = require("styled-components");
var Button = styled_components_1["default"].button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  border: 2px solid ", ";\n  background: ", ";\n\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border-radius: 3px;\n"], ["\n  color: ", ";\n  border: 2px solid ", ";\n  background: ", ";\n\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border-radius: 3px;\n"])), function (props) { return props.theme.fg; }, function (props) { return props.theme.fg; }, function (props) { return props.theme.bg; });
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Input;
}(React.Component));
exports["default"] = Input;
var templateObject_1;