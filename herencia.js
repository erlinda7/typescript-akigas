var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehiculo = /** @class */ (function () {
    function Vehiculo(fabricante) {
        this.fabricante = fabricante;
    }
    Vehiculo.prototype.moverse = function () {
        console.log("el vehiculo ".concat(this.fabricante, " se ha movido magicamente"));
    };
    return Vehiculo;
}());
var VehiculoTerreste = /** @class */ (function (_super) {
    __extends(VehiculoTerreste, _super);
    function VehiculoTerreste() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VehiculoTerreste.prototype.moverse = function () {
        console.log('brum brum');
        _super.prototype.moverse.call(this);
    };
    return VehiculoTerreste;
}(Vehiculo));
var VehiculoAereo = /** @class */ (function (_super) {
    __extends(VehiculoAereo, _super);
    function VehiculoAereo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VehiculoAereo.prototype.moverse = function () {
        console.log('niuuuuuuuuuuuuuuuuu');
    };
    return VehiculoAereo;
}(Vehiculo));
var VehiculoMaritimo = /** @class */ (function (_super) {
    __extends(VehiculoMaritimo, _super);
    function VehiculoMaritimo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VehiculoMaritimo.prototype.moverse = function () {
        console.log('* el ruido maritimo');
    };
    return VehiculoMaritimo;
}(Vehiculo));
var vehiculo = new VehiculoTerreste("AIRbUS");
vehiculo.moverse();
