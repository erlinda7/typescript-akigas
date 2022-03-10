// # es la nueva forma de declarar variables o funciones como privadas 
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Rectangulo_instances, _Rectangulo_alto, _Rectangulo_perimetro;
var Rectangulo = /** @class */ (function () {
    function Rectangulo(ancho, alto) {
        _Rectangulo_instances.add(this);
        _Rectangulo_alto.set(this, void 0);
        console.log('contructor');
        this.ancho = ancho;
        __classPrivateFieldSet(this, _Rectangulo_alto, alto, "f");
    }
    Rectangulo.prototype.area = function () {
        console.log('area');
        return this.ancho * __classPrivateFieldGet(this, _Rectangulo_alto, "f");
    };
    return Rectangulo;
}());
_Rectangulo_alto = new WeakMap(), _Rectangulo_instances = new WeakSet(), _Rectangulo_perimetro = function _Rectangulo_perimetro() {
    return this.ancho * 2 + __classPrivateFieldGet(this, _Rectangulo_alto, "f") * 2;
};
var r1 = new Rectangulo(10, 15);
var r2 = new Rectangulo(4, 3);
console.log(r1.area());
console.log(r2.area());
