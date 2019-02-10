"use strict";
let money, time;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    sumExpenses: 0,
};

let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
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

btnExpensesItem.setAttribute('disabled', '');
btnOptionalExpenses.setAttribute('disabled', '');
btnCountBudget.setAttribute('disabled', '');

startBtn.addEventListener('click', function() {
    time = prompt("Введите дату в формате", "YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?", "");
    btnExpensesItem.removeAttribute('disabled', '');
    btnOptionalExpenses.removeAttribute('disabled', '');
    btnCountBudget.removeAttribute('disabled', '');

    while(isNaN(money) || money=="" || money==null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

btnExpensesItem.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
    
        if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
            && a != '' && b != '' && a.length < 50) {
                console.log("Done!");
                appData.expenses[a] = b;
                sum += +b;
            } else {
                console.log("You need take me two answer!");
                i--;
            }
    }
    expensesValue.textContent = sum;
    appData.sumExpenses = sum;
});

btnOptionalExpenses.addEventListener('click', function() {
    for (let q = 0; q < optionalExpensesItem.length; q++) {
        let opt = optionalExpensesItem[q].value;
        appData.optionalExpenses[q] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[q] + "  ";
        }
});

btnCountBudget.addEventListener('click', function() {
    appData.moneyPerDay = ((appData.budget - appData.sumExpenses)/ 30).toFixed(1);
    dayBudgetValue.textContent = appData.moneyPerDay;

    if(appData.moneyPerDay < 100) {
        levelValue.textContent = "Minimal MAN";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 200) {
        levelValue.textContent = "Medium MAN";
    } else if (appData.moneyPerDay > 200) {
        levelValue.textContent = "HARD MAN";
    } else {
        levelValue.textContent = "oops";
    }
});

chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

savings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

savings.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;
            
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;
            
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});