// sumar
function sumar(m, n) {
    var suma = m + n;
    console.log("".concat(m, " + ").concat(n, " = ").concat(suma));
    return suma;
}
// sumar(3,4);
var restar = function (m, n) {
    var resta = m - n;
    console.log("".concat(m, " - ").concat(n, " = ").concat(resta));
    return resta;
};
// (5,4);
var multiplicar;
multiplicar = function (m, n) {
    return m * n;
};
// console.log(multiplicar(4,5));
var multiplicar2;
multiplicar2 = function (a, b, callback) { return callback(a * b); };
multiplicar2(4, 5, function (result) {
    console.log("Resultado: ".concat(result));
});
