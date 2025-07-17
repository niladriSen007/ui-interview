var p = 1;
function outerFn() {
    var p = 2;
    function innterFn() {
        p++;
        console.log(p); // NaN
        var p = 3
        console.log(p) // 3
    }
    innterFn()
    console.log(p) // 2
}
outerFn()