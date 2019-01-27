'use strict';

/*Задачи на понимание основ JS (с реальных собеседований)
Ответьте на вопросы. Если возникают затруднения - 
воспользуйтесь выводом в консоль (console.log())
Вопросы к этому заданию
Какое будет выведено значение: let x = 5; alert( x++ ); ?
5
*/
//let x = 5;
//console.log(x++);

/*Чему равно такое выражение: [ ] + false - null + true ?
NaN*/
//let two = [ ] + false - null + true;
//console.log(two);

/*Что выведет этот код: let y = 1; let x = y = 2; alert(x);
2*/
//let y = 1;
//let x = y = 2;
//console.log(x);

/*Чему равна сумма [ ] + 1 + 2?
Nan----NO --- 12!!!*/ 
//let three = [ ] + 1 + 2;
//console.log(three);

/*Что выведет этот код: alert( "1"[0] )?
1*/
//alert( "1"[0] );

/*Чему равно 2 && 1 && null && 0 && undefined ?
0----NO --- null!!!*/
//let four = 2 && 1 && null && 0 && undefined;
//console.log(four);

/*Есть ли разница между выражениями? !!( a && b ) и (a && b)?
No----YES!! ---
console.log(!!"string")
console.log(!!null)
console.log(!"string")
console.log(!null)
console.log("string")
console.log(null)*/

/*Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
null  ---- NO ------ 3!!!*/
//alert( null || 2 && 3 || 4 );

/*a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
True -------NO--- !! False------*/
//let a = [1, 2, 3];
//let b = [1, 2, 3];
//console.log(a == b);

/*Что выведет этот код: alert( +"Infinity" ); ?
Na----- No!!------Infinity*/
//alert( +"Infinity" );

/*Верно ли сравнение: "ёжик" > "яблоко"?
False-----------NO!!----True*/
//console.log("ёжик" > "яблоко");

/*Чему равно 0 || "" || 2 || undefined || true || falsе ?
""--------NO!!----------------2*/
//console.log( 0 || "" || 2 || undefined || true || falsе);
//console.log( 0 || "" );
//console.log( "" || 2 );
//console.log( 2 || undefined );
