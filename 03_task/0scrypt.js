'use strict';

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате", "YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = +prompt("Во сколько обойдется?", "");

    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
        && a != '' && b != '' && a.length < 50) {
            console.log("Done!");
            appData.expenses[a] = b;
        } else {
            console.log("You need take me two answer!")
            i--;
        }
};

/*let i = 0;
while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = +prompt("Во сколько обойдется?", "");
    i++;
    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
        && a != '' && b != '' && a.length < 50) {
            console.log("Done!");
            appData.expenses[a] = b;
        } else {
            console.log("You need take me two answer!")
            i--;
        }
};*/

/*let i=0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = +prompt("Во сколько обойдется?", "");
    i++;
    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
        && a != '' && b != '' && a.length < 50) {
            console.log("Done!");
            appData.expenses[a] = b;
        } else {
            console.log("You need take me two answer!")
            i--;
        }
}
while (i < 2);*/

appData.moneyPerDay = appData.budget / 30;

alert("Ваш бюджет на один день составляет " + appData.moneyPerDay + " гривен");

if(appData.moneyPerDay < 100) {
    console.log("Minimal MAN");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 200) {
    console.log("Medium MAN");
} else if (appData.moneyPerDay > 200) {
    console.log("HARD MAN");
} else {
    console.log("oops")
};

console.log ('appData is', appData);

