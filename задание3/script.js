' use strict ';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", 0);
    time = prompt("Введите дату в формате YYYY-MM-DD", 0);

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", 0);
    }
}
start();

    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

function shooseExspenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", '');
        let b = prompt("Во сколько обойдется?", '');
    
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) !=null 
            && a != '' && b != '' && a.length < 50  ) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            i--;
        }
        
    }
}
shooseExspenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();

    alert('Ежедневный бюджет: ' + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Минимум');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        console.log('Средний');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий');
    } else {
        console.log('Ошибка');
    }
}
detectLevel();

function checkSavings() {
    appData.savings = confirm('у вас есть сбережения');
    if (appData.savings) {
        let save = +prompt('Сколько у вас сбережений', 0),
        procent = +prompt('Какой у вас процент', 0);
        appData.monthInCome = save/100/12 * procent;
        alert('Доход с вашего депозита: ' + (appData.monthInCome).toFixed() );
    }
}
checkSavings();

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        appData.optionalExpenses[i] = prompt('Статья необязательных расходов?', 0);   
    }
    
}