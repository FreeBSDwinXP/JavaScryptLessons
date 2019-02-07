"use strict";
let money, time;
function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате", "YYYY-MM-DD");

    while(isNaN(money) || money=="" || money==null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

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

/*
start();

appData.chooseExpenses();

appData.chooseOptExpenses();

appData.checkSavings();

appData.chooseIncome ();

appData.detectDayBudget();

appData.detectLevel();

allAppData();*/

let comput = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value'),
    dayBudgetValue = document.getElementsByClassName('daybudget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expensesValue = document.getElementsByClassName('expenses-value'),
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('income-value'),
    monthSavingsValue = document.getElementsByClassName('monthsavings-value'),
    yearSavingsValue = document.getElementsByClassName('yearsavings-value'),
    expensesItem = document.getElementsByClassName('expenses-item'),
    btnExpensesItem = document.getElementsByTagName('button')[0],
    btnOptionalExpenses = document.getElementsByTagName('button')[1],
    btnCountBudget = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    savings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


console.log ('appData is', appData);
console.log ('comput is', comput);
console.log ('budgetValue is', budgetValue);
console.log ('dayBudgetValue is', dayBudgetValue);
console.log ('levelValue is', levelValue);
console.log ('expensesValue is', expensesValue);
console.log ('optionalExpensesValue is', optionalExpensesValue);
console.log ('incomeValue is', incomeValue);
console.log ('monthSavingsValue is', monthSavingsValue);
console.log ('yearSavingsValue is', yearSavingsValue);
console.log ('expensesItem is', expensesItem);
console.log ('btnExpensesItem is', btnExpensesItem);
console.log ('btnOptionalExpenses is', btnOptionalExpenses);
console.log ('btnCountBudget is', btnCountBudget);
console.log ('optionalExpensesItem is', optionalExpensesItem);
console.log ('chooseIncome is', chooseIncome);
console.log ('savings is', savings);
console.log ('chooseSum is', chooseSum);
console.log ('choosePercent is', choosePercent);
console.log ('yearValue is', yearValue);
console.log ('monthValue is', monthValue);
console.log ('dayValue is', dayValue);