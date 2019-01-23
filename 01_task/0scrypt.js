'use strict';

//1) Создать HTML страницу и подключить к ней файл скрипта


/*2) В файле скрипта создать 2 переменные (money и time), которые будут получать данные от пользователя:
·      Первая будет спрашивать "Ваш бюджет на месяц?"
·      Вторая "Введите дату в формате YYYY-MM-DD"*/
let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате", "YYYY-MM-DD");

/*4) Задать пользователю по 2 раза вопросы:
    “Введите обязательную статью расходов в этом месяце”
    “Во сколько обойдется?”
    Записать ответы в объект expenses в формате: 
    expenses: {
    “ответ на первый вопрос” : “ответ на второй вопрос”
    }*/
let question1 = prompt("Введите обязательную статью расходов в этом месяце");
let answer1 = +prompt("Во сколько обойдется?");
let question2 = prompt("Введите обязательную статью расходов в этом месяце");
let answer2 = +prompt("Во сколько обойдется?");
let expenses1 = {
    question1:answer1,
    question2:answer2,
};

/*3) Создать объект appData, который будет содержать такие данные:
·      бюджет (передаем сюда переменную из п.2)
·      данные времени - timeData (передаем сюда переменную из п.2)
·      объект с обязательными расходами - expenses (смотри пункт 4)
·      объект с необязательными расходами - optionalExpenses (оставляем пока пустым)
·      массив данных с доп. доходом - income (оставляем пока пустым)
·      свойство savings (выставляем его как false)*/
let appData = {
    budget: money,
    timeData: time,
    expenses: expenses1,
    optionalExpenses: {},
    income: [],
    savings: false,
};

/*5) Вывести на экран пользователя бюджет на 1 день
 (брать месяц за 30 дней, использовать alert)*/
let mainExpenses = expenses1.question1 + expenses1.question2;
let oneday = ((appData.budget - mainExpenses)/30);
alert("Ваш бюджет на один день составляет " + oneday + " гривен");

/*6) Проверить, чтобы все работало без ошибок в консоли*/
console.log ('money is', money, 'time is', time);
console.log ('expenses is', expenses1);
console.log ('appData is', appData);
console.log ('question1 is ', question1, 'answer1 is ', answer1);
console.log ('question2 is ', question2, 'answer2 is ', answer2);
console.log ('mainExpenses is', mainExpenses);
console.log ('oneday is', oneday);