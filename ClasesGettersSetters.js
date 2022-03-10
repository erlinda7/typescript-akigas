// get por dentro es una funcion , hacia afuera se comporta como un atributo
var _Rectangulo_instances, _Rectangulo_perimetro;
var Rectangulo = /** @class */ (function () {
    function Rectangulo(ancho, alto) {
        _Rectangulo_instances.add(this);
        console.log('contructor');
        this.ancho = ancho;
        this.alto = alto;
    }
    Object.defineProperty(Rectangulo.prototype, "area", {
        get: function () {
            console.log('area');
            return this.ancho * this.alto;
        },
        enumerable: false,
        configurable: true
    });
    return Rectangulo;
}());
_Rectangulo_instances = new WeakSet(), _Rectangulo_perimetro = function _Rectangulo_perimetro() {
    return this.ancho * 2 + this.alto * 2;
};
var r1 = new Rectangulo(10, 15);
var r2 = new Rectangulo(4, 3);
console.log(r1.area);
console.log(r2.area);
