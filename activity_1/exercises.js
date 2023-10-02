// 1. (5 + 3 * 2) + 9 > 3 * 5 * 14 % 3
let result;
result=(5+3*2)+9>3*5*14%3;
// (5+3*2)+9>3*5*14%3
// 20>0
// true
console.log(result);

// 2. 2 *(4 – 10 + 8)/2* 36 *(1/2) 
let result_2;
result_2= 2*(4-10+8)/2*36*(1/2);
console.log(result_2);

// 3. 260 / 12 + 54 % 3 – 85 % 7 
let result_3;
result_3= 260/12+54%3-85%7;
console.log(result_3);

// 4. (48 < 2 * 3) | | (2 * 7 < 12) 
let result_4;
result_4=(48<2*3)||(1*7<12);
// (48<2*3) || (1*7<12)
// (48<6) || (7<12)
// false || true
// true 
console.log(result_4);

// 5. ((8 > 2) | | (932 < 23) ) && 4 == 2
let result_5;
result_5=((8>2)||(932<23))&&4==2
// ((8>2)||(932<23))&&4==2
//  (true || false )&& false
//  true && false
//    false
console.log(result_5);

// 6. Dado a=3 y b=7, encuentra el valor de y = 2 * a + b - a mod 3.
let value_y;
let a=3,b=7;
value_y=2*a+b-a % 3;
console.log(`${value_y}`);

// 7. Si a=10 y b=4, calcula el valor de z = a * b + 3 mod a + b.
let value_z;
let a_2=10,b_2=4;
value_z=a_2*b_2+3%a_2+b_2;
console.log(value_z);

// 8. Con a=6 y b=2, determina el valor de w = a - b + 2 * a mod b.
let value_w;
let a_3=6,b_3=2;
value_w=a_3-b_3+2*a_3%b_3;
console.log(value_w)

// 9. Para a=8 y b=5, encuentra el valor de v = 2 * b + a div 2 + 4 * b mod a. 
let value_v;
let a_4=8,b_4=5;
value_v=2*b_4+a_4/2+4*b_4%a_4;
console.log(value_v);

// 10. Si a=12 y b=9, calcula el valor de u = b - a + 3 * a mod b.
let value_u;
let a_5=12,b_5=9;
value_u=b_5-a_5+3*a_5%b_5;
console.log(value_u);

// 11. Suma de dos números: Escribe un programa que tome dos números y muestre su suma. 
let number_1=3,number_2=2;
let sum=0;
sum=number_1+number_2;
console.log(`la suma de ${number_1} mas ${number_2} es :${sum}`);

// 12. Área de un triángulo: Indique la base y la altura de un triángulo, luego calcula y muestra su area
let base=10,height=15;
let area=0;
area =(base*height)/2;
console.log(area);

// 13. Número par o impar: Declara un número e indica si es par o impar. 
let number_3=4;
if(number_3%2==0){
    console.log(`el numero ${number_3} es par`);
}else{
    console.log(`el numero ${number_3} no es par`);
}

// 14. Calculadora simple: Crea una calculadora que realice operaciones básicas como suma, resta,
// multiplicación y división, según la elección del usuario.
let number_4=2,number_5=10;

console.log(`Escoja: 1)suma, 2)resta, 3)multiplicacion, 4)divicion`);
let menu=5;

switch(menu){
    case 1:
    console.log(`la suma de ${number_4} y ${number_5} es igual a `,number_4+number_5);
    break;
    case 2:
    console.log(`la resta de ${number_4} y ${number_5} es igual a `,number_4-number_5);
    break;
    case 3:
    console.log(`la multiplicacion de ${number_4} y ${number_5} es igual a `,number_4*number_5);
    break;
    case 4:
    console.log(`la divicion de ${number_4} y ${number_5} es igual a `,number_4/number_5);
    break;
    default:
        console.log(`La opcion ${menu} no esta en el menu`);
}

// 15. Tabla de multiplicar: Declara un número y muestra su tabla de multiplicar del 1 al 10. 
let number_6=6;
let multiplication=0;
for(let i=1;i<=10;i++){
    multiplication=number_6*i;
    console.log(`${number_6} * ${i} = ${multiplication}`);
}

//16. Copiar palabra: Escribe un programa que lea dos palabras y concatena en otra variable las dos palabras
let word_1="hola",word_3=" mundo";
let phrase;
phrase=word_1+ word_3;
console.log(phrase);

// 17. Mayor de tres números: Establece tres números y determina cuál es el mayor de ellos.
let number_7=1,number_8=2,number_9=3,number_store=number_9;
if(number_7>number_store){
number_store=number_7;
}else if(number_8>number_store){
    number_store=number_8;
}
console.log(number_store);

// 18. Edad mínima para votar: Ingrese una edad y verifica si es elegible para votar (18 años o más).
let age=18;
if(age >=18){
    console.log(`es mayor de edad`);
}else{
    console.log(`no es mayor de edad`);
}

// 19. Calculadora de BMI: Crea un programa que calcule el índice de masa corporal (BMI) a partir
// del peso y la altura del usuario, y luego indique si está en una categoría de peso saludable.
let height_m=1.50, weight=20,imc;
imc=weight/(height_m**2);
if (imc <= 18.5 ){
    console.log(`peso bajo: ${imc}`);
}else if(imc <= 24.9){
    console.log(`peso normal: ${imc}`);
 }else if(imc <= 29.9){
    console.log(`peso sobrepeso: ${imc}`);
 }else{
    console.log(`peso obesidad: ${imc}`);
}            
    
// 20. Número positivo, negativo o cero: Declare un número y muestra si es positivo, negativo o cero.
let number_10=0;
if(number_10>0){
    console.log(`el numero ${number_10} es positivo`);
}else if(number_10<0){
    console.log(`el numero ${number_10} es negativo`);
}else{
     console.log(`el numero ${number_10} es 0`);
    
}

// 21. Año bisiesto: Declara un año y determina si es un año bisiesto o no. Un año bisiesto es divisible
// por 4, pero no por 100, a menos que también sea divisible por 400.
let year=2013;
console.log(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ?`el año ${year} es un año bisiesto`:`el año ${year} no es un año bisiesto`);

// 22. Signo zodiacal: Pide al usuario que ingrese su mes y día de nacimiento en variables, luego
// determina su signo zodiacal. Puedes usar una serie de declaraciones if para comparar las
// fechas ingresadas con las fechas límite de cada signo zodiacal.
let month=9, day=27;
if ((month === 3 && day >= 21) || (month === 4 &&  day <= 19 )){
    console.log(`es Aries`);
    }else if((month === 4 && day >= 20) || (month === 5 &&  day <= 20 )){
      console.log(`es Tauro`);
    }else if((month === 5 && day >= 21) || (month === 6 &&  day <= 20 )){
      console.log(`es Géminis`);
    }else if((month === 6 && day >= 21) || (month === 7 &&  day <= 22 )){
      console.log(`es Cáncer `);
    }else if((month === 7 && day >= 23) || (month === 8 &&  day <= 22 )){
      console.log(`es Leo `);
    }else if((month === 8 && day >= 23) || (month === 9 &&  day <= 22 )){
      console.log(`es Virgo `);
    }else if((month === 9 && day >= 23) || (month === 10 &&  day <= 22 )){
      console.log(`es Libra`);
    }else if((month === 10 && day >= 23) || (month === 11 &&  day <= 21 )){
      console.log(`es Escorpio` );
    }else if((month === 11 && day >= 22) || (month === 12 &&  day <= 21 )){
      console.log(`es Sagitario` );
    }else if((month === 12 && day >= 22) || (month === 1 &&  day <= 19 )){
      console.log(`es Capricornio` );
    }else if((month === 1 && day >= 20) || (month === 2 &&  day <= 18 )){
      console.log(`es Acuario `);
    }else if((month === 2 && day >= 19) || (month === 3 &&  day <= 20 )){
      console.log( `es Piscis`);
    }else{
        console.log(`el mes o dia ingresado no esta en el rengo`);
    }

// 23. Declare un número de día del mes (por ejemplo, del 1 al 31) y verifica si ese día pertenece a la
// primera quincena (días 1-15) o a la segunda quincena (días 16- 31).
let number_11=1;
if(number_11>=1 &&number_11<=31){
    if(number_11<=15){
        console.log(`es de la primera quincena`);
    }else{
        console.log(`pertenece a la segunda quincena`);
    }
}else{
    console.log(`el numero ${number_11} no esta en el rango permitido`);
}

// 24. Día de la semana: Ingrese un número del 1 al 7, donde 1 representa el domingo, 2 el lunes, 3
// el martes, y así sucesivamente. Luego, uti una estructura switch para mostrar el nombre
// del día de la semana correspondiente al número lizaingresado.
let day_2=9;
switch (day_2) {
    case 1:
      console.log('El dia es Domingo');
      break;
      case 2:
      console.log('El dia es Lunes');
      break;
      case 3:
      console.log('El dia es Martes');
      break;
      case 4:
      console.log('El dia es Miercoles');
      break;
      case 5:
      console.log('El dia es Jueves');
      break;
      case 6:
      console.log('El dia es Viernes');
      break;
      case 7:
        console.log('El dia esSabado');
        break;
    default:
      console.log(`El numero ${day_2} ingresado no esta en el rando de 1-7`);
  }

// 25. Frases iguales: Escribir un programa que ingrese dos frases e indique si son iguales
let word_4="hola mundo",word_5="holA   mundo";
let word_changed="",word_changed_2="";
let remove_space="",remove_space_2="";
word_changed=word_4.toLowerCase();
word_changed_2=word_5.toLowerCase();
remove_space=word_changed.replace(/\s/g, '')
remove_space_2=word_changed_2.replace(/\s/g, '')

if(remove_space==remove_space_2){
    console.log(`la frase o palabra "${word_4}" es igual a "${word_5}"`);
}else {
    console.log(`la frase o palabra "${word_4}" no es igual a "${word_5}"`);
}

// 26. Calculadora de precio con descuento: Crea un programa que permita declarar el precio de un
// artículo y un porcentaje de descuento. El programa debe calcular y mostrar el precio final
// después del descuento.
var price=50,percentage=12,price_percentage=0;
percentage=(percentage/100)*price;
price_percentage=price-percentage;
console.log(`el precio con el descuento es ${price_percentage}`);

// 27. Calculadora de factura con impuestos: Declare el total de una factura y el porcentaje de
// impuestos aplicado. Luego, calcula y muestra el monto total a pagar, incluyendo los impuestos.
price=300;
percentage=20;
percentage=(percentage/100)*price;
price_percentage=price+percentage;
console.log(`el total con el impuesto a pagar es: ${price_percentage}`);

// 28. Calculadora de sueldo con aumento: Declare un salario actual y el porcentaje de aumento que
// recibirá. Calcula y muestra el nuevo salario después del aumento.
price=200;
percentage=20;
percentage=(percentage/100)*price;
price_percentage=price+percentage;
console.log(`EL salio con el au,emtopp es: ${price_percentage}`);
// 29. Calculadora de compra con múltiples artículos: Declare el precio y la cantidad de varios
// artículos que está comprando. Calcula el total de la compra y aplica un descuento del 10% si
// el total es mayor a cierta cantidad (por ejemplo, $100).
let item_price=40,number_item=3
var total=0;
total=item_price*number_item;
percentage=10;
if(total>100){
    percentage=(percentage/100)*total;
    total=total-percentage;
    console.log(total);
}else{
    console.log(total);
}

// 30. Descuento por antigüedad en la empresa: Pregunta al usuario cuántos años ha estado
// trabajando en una empresa y calcula su bono de antigüedad. Si ha trabajado más de 5 años,
// otorga un bono del 5% sobre su salario.
let year_2=10;
price=300;
let bond=price*0.05;
if(year_2>5){
    price_percentage=price+bond;
    console.log(`su bono de antiguedad es de ${bond} eso significa que su pago total es de ${price_percentage}`);
}else{
    console.log(`no tiene bono de antiguedad`);
}

// 31. Calculadora de envío con tarifas diferentes: Crea un programa que permita al usuario ingresar
// la distancia de envío y calcule el costo del envío. Si la distancia es inferior a 50 km, el costo es
// de $10. Si la distancia es de 50 km o más, el costo es de $20.
let distance=55,cost;
if(distance<50){
    cost =10;
    console.log(`el costo a pagar por el envio es de ${cost}`);
}else{
    cost=20;
    console.log(`el costo a pagar por el envio es de ${cost}`);
}

// 32. Calculadora de descuento por lealtad del cliente: Pide al usuario que ingrese el total de sus
// compras mensuales durante un año. Si el total es superior a $500, aplica un descuento del 10%
// en la próxima compra.
price=501;
if(price>500){
    console.log(`su total es mayor a 500 asi que es su proxima compra tendra un descuento de 10%`);
}else{
    console.log(`no alcanza el monto necesario`);
}

// 33. Calculadora de descuento por volumen de compra: Permite al usuario ingresar la cantidad de
// unidades de un producto que va a comprar y el precio unitario. Aplica descuentos por volumen
// de compra según las siguientes reglas:
// 10-50 unidades: 5% de descuento
// 51-100 unidades: 10% de descuento
// Más de 100 unidades: 15% de descuento
let units=10;
price=3;
total=units*price;
if(units>=10 && units<=50){
    percentage=total*0.05;
    total=total-percentage;
    console.log(`se le aplico un descuento del 5% ya que su cantidad de produstos esta ene l rango de 10-50 su valor a pagar es de ${total}`);
}else if(units>=51 && units<=100){
    percentage=total*0.1;
    total=total-percentage;
    console.log(`se le aplico un descuento del 10% ya que su cantidad de produstos esta ene l rango de 51-100 su valor a pagar es de ${total}`);
}else if(units>100){
    percentage=total*0.15;
    total=total-percentage;
    console.log(`se le aplico un descuento del 15% ya que su cantidad de produstos esta ene l rango de 51-100 su valor a pagar es de ${total}`);
}else{
    console.log(`el valor a pgar es de ${total}`);
}

// 34. Calculadora de costo de servicio: Pregunta al usuario cuántas horas de servicio necesita y
// calcula el costo total. Si las horas son más de 10, aplica un descuento del 20%.
let hours=10;
price=10;
total=hours*price;
if(hours>10){
    percentage=total*0.2;
    total=total-percentage;
    console.log(`su valor a pagar es de ${total}`);
}else{
    console.log(`su valor a pagar es de ${total}`);
}


// 35. Suma de números pares: Utiliza un bucle for para calcular la suma de los números pares del 1
// al 50.
let sum_pair=0;
for(let i=1;i<=50;i++){
    if(i%2==0){
    sum_pair+=+i  ;  
    }
}
console.log(`la suma de los numeros pares del 1 al 50 es ${sum_pair}`);

// 36. Tabla de multiplicar: Utiliza un bucle for para imprimir la tabla de multiplicar de un número
// ingresado por el usuario del 1 al 12
let number_12=6;
let Multiplication_table;
for(let i=1;i<=12;i++){
    Multiplication_table=number_12*i;
    console.log(`${number_12} * ${i}= ${Multiplication_table}`);
}

//37. Contador de vocales: Utiliza un bucle while para contar el número de vocales en una palabra ingresada por el usuario. 
let word="hola mundo";
let number_vowels = 0;
let vowels=["a","A","e","E","i","I","o","O","u","U"];
let counter=-1;
while(counter<word.length){
    counter++;
    if(vowels.includes(word[counter])){
        number_vowels++;
    }
}
console.log(`El numero de vocales es: ${number_vowels}`);

// 38. Contador de digitos: Utiliza un bucle for para contar el numero de dígitos en una palabra
// ingresada por el usuario.
let word_6="mundo1234",cont=0;

for(let i=0;i<word_6.length;i++){
    let character=word_6.charAt(i);
    if(character>=0||character<=9){
        cont++;
    }
}
console.log(`la cantidad de digitos de la palabra "${word_6}" es : ${cont}`);

// 39. Adivina el número: Genera un número aleatorio y pide al usuario que adivine el número.
// Utiliza un bucle while para repetir la solicitud hasta que adivine correctamente.
let random,number_13=2;
random=Math.floor(Math.random()*10);
console.log(random);
if(number_13==random){
    console.log(`adivinaste el numero ${number_13} es el correcto`);
}else{
    console.log(`no adivinaste el numero ${number_13} no es el correcto`);
}
// 40. Contador de Alfabeto: Utiliza un bucle for para contar el número de letras del alfabeto(a..z) en
// una palabra ingresada por el usuario.
let word_2="holA, como estas";
let letters=0;
for(let i=0;i<word_2.length;i++){
let character=word_2.charAt(i);
    if(character>="a"&& character<="z"||character>="A"&& character<="Z"){
        letters++;
    }
}
console.log(`la cantidad de caracteres es: ${letters}`);

// 41. Suma de números impares: Utiliza un bucle while para calcular la suma de los números
// impares del 1 al 100.
let sum_odd=0;
for(let i=1;i<=100;i++){
    if(i%2!=0){
    sum_odd+=+i   ; 
    }
}
console.log(`la suma de los numeros impares del 1 al 100 es ${sum_odd}`);
// 42. Contador de caracteres: Escribir un programa que lea una palabra y presenta cuantos caracteres hay en dicha palabra. 
let word_7="hola mundo";
let amount=word_7.length;
console.log(`la cantida de caracteres es : ${amount}`);

// 43. Suma de números: Pide al usuario que ingrese números enteros positivos uno por uno y utiliza
// un bucle while para calcular la suma de estos números. El ciclo debe terminar cuando el
// usuario ingrese un número negativo.
function result_array(array_numbers){
    while(i < array_numbers.length){
        console.log(array_numbers[i]);
        if(array_numbers[i] >= 0){
            addition_2 += + array_numbers[i];
            console.log(addition_2);
            i++
        }else{
            console.log(addition_2);
            return addition_2;
        }
    }
}
let array_numbers = [2,6,-2,1,2];
let addition_2 = 0;
let i = 0;
result = result_array(array_numbers);
console.log("la suma es: " + addition_2);
// 44. Cuenta regresiva: Pide al usuario que ingrese un número entero positivo y utiliza un bucle
// while para mostrar una cuenta regresiva desde ese número hasta 1.
let number_14 = 5;
while(number_14 >= 1){
    console.log(number_14);
    number_14--;
}

