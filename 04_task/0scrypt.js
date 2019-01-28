"use strict";
let money, time;
function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате", "YYYY-MM-DD");

    while(isNaN(money) || money=="" || money==null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = +prompt("Во сколько обойдется?", "");
    
        if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
            && a != '' && b != '' && a.length < 50) {
                console.log("Done!");
                appData.expenses[a] = b;
            } else {
                console.log("You need take me two answer!");
                i--;
            }
    }
}

chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(1);
    alert("Ваш бюджет на один день составляет " + appData.moneyPerDay + " гривен");
}

detectDayBudget();

function detectLevel() {
    if(appData.moneyPerDay < 100) {
        console.log("Minimal MAN");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 200) {
        console.log("Medium MAN");
    } else if (appData.moneyPerDay > 200) {
        console.log("HARD MAN");
    } else {
        console.log("oops");
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("How much money you have?"),
            percent = +prompt("Say your Persent, please");

        appData.monthIncome = save/100/12*percent;
        alert("You have " + appData.monthIncome + "money from your Deposit");
    }
}

checkSavings();

function chooseOptExpenses(){
    for (let q = 1; q < 4; q++) {
        let ans = prompt("Статья необязательных расходов?", "");
        if (typeof(ans) === 'string' && typeof(ans) != null && ans != '' && ans.length < 50) {
                console.log("Done!");
                appData.optionalExpenses[q] = ans;
            } else {
                console.log("You need take me three answer!");
                q--;
            }
    }
}

chooseOptExpenses();

console.log ('appData is', appData);

