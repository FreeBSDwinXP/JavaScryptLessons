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
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        alert("Ваш бюджет на один день составляет " + appData.moneyPerDay + " гривен");
    },
    detectLevel: function(){
        if(appData.moneyPerDay < 100) {
            console.log("Minimal MAN");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 200) {
            console.log("Medium MAN");
        } else if (appData.moneyPerDay > 200) {
            console.log("HARD MAN");
        } else {
            console.log("oops");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("How much money you have?"),
                percent = +prompt("Say your Persent, please");
    
            appData.monthIncome = save/100/12*percent;
            alert("You have " + appData.monthIncome + "money from your Deposit");
        }
    },
    chooseOptExpenses: function() {
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
    },
    chooseIncome: function() {
        for (let q = 0; q < 1; q++) {
            let items = prompt("Что принесет допольнительный доход? - Перечислите через запятую!", "");
            if (typeof(items) === 'string' && typeof(items) != null && items != '') {
                    appData.income = items.split(', ');
                    let newItems = prompt("Может что-то еше?");
                    appData.income.push(newItems);
                    appData.income.sort();
                } else {
                    console.log("Just Do it without mistake!");
                    q--;
                }
        }
        appData.income.forEach(function(item, i, arr) {
            alert("Способы доп. заработка: " + (i + 1) + item);
        }
        );
    }
};

function allAppData() {
    for (let key in appData) {
        console.log("Наша программа включает в себя данные: " + key + " значение " + appData[key]);
    }
}

appData.chooseExpenses();

appData.chooseOptExpenses();

appData.checkSavings();

appData.chooseIncome ();

appData.detectDayBudget();

appData.detectLevel();

allAppData();

console.log ('appData is', appData);

