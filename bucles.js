//FOR se usa cuando se sabe con antelacion la cantidad de pasos que vamos a ejecutar
//La cantidad de paso va entre los parentesis
for (let i = 0; i < 5; i++) {
    suma = suma + i;
    console.log('Variable de iteración: ', i);
 }
 console.log('Variable suma: ', suma); 


 //WHILE no tenemos certeza de cuantos pasos se necesitan hasta terimnar la ejecucion
while(suma < 3) {
    suma = suma + 1;
        console.log(suma);
    };