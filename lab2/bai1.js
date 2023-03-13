// enter a, b, c
let a1 = prompt("Enter a: ");
let b1 = prompt("Enter b: ");
let c1 = prompt("Enter c: ");

let a = parseInt(a1)
let b = parseInt(b1)
let c = parseInt(c1)

let delta = b*b - 4*a*c;

if(delta < 0) { // truong hop delta < 0
    document.write("Phuong trinh vo nghiem");
}else /*delta > hoac =0*/ if(delta == 0){// delta = 0
    let x = -(b/(2*a));
    document.write("Phuong trinh co nghiem kep:" + x);
}else{//delta > 0
    // nghiem thu 1
    let x1 = (-b + Math.sqrt(delta))/(2*a);
    // nghiem thu 2
    let x2 = (-b - Math.sqrt(delta))/(2*a);
}