' use strict ';

let buttonStart = document.getElementById('start'),
    budget = document.querySelector(`.budget-value`),
    budgetDay = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value');

let input = document.getElementsByClassName('expenses-item'),
    btnApprove = document.querySelector('.expenses-item-btn'),
    btnApprove2 = document.querySelector('.optionalexpenses-btn'),
    btnСalculate = document.querySelector('.count-budget-btn'),
    inputs = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    savings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePersent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;


btnApprove.disabled = true;
btnApprove2.disabled = true;
btnСalculate.disabled = true;

buttonStart.addEventListener('click', (enent) => {
    btnApprove.disabled = false;
    btnApprove2.disabled = false;
    btnСalculate.disabled = false;

    time = prompt("Введите дату в формате YYYY-MM-DD", 0);
    money = +prompt("Ваш бюджет на месяц?", 0);

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", 0);
    }

    appData.budget = money;
    appData.timeData = time;
    budget.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() +1 ;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

btnApprove.addEventListener('click', () => {
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        let a = input[i].value,
            b = input[++i].value;
    
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50  ) {
            // console.log('done');
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i--;
        }
        
    }

    expensesValue.textContent = sum; 
}); 

btnApprove2.addEventListener('click', () => {
    btnApprove2.disabled = true;
    for (let i = 0; i < inputs.length; i++) {
        let opt = inputs[i].value;
        appData.optionalExpenses[i] = opt;   
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

btnСalculate.addEventListener('click', () => {
    btnСalculate.disabled = true;
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - expensesValue.textContent) / 30).toFixed();
        budgetDay.textContent = appData.moneyPerDay;
    
        if (appData.moneyPerDay < 100) {
            levelValue.textContent ='Минимум';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            levelValue.textContent = 'Средний';
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'Высокий';
        } else {
            levelValue.textContent = 'Ошибка';
        }
    } else {
        budgetDay.textContent = 'Ошибка';
    }


}); 

chooseIncome.addEventListener('input', () => {
    let intems = chooseIncome.value;
    appData.income = intems.split(', ');
    incomeValue.textContent = appData.income;
});

savings.addEventListener('click', () => {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', () => {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePersent.value;
        
        appData.monthInCome = sum/100/12 * percent;
        appData.yearInCome = sum/100 * percent;

        monthSavingsValue.textContent = appData.monthInCome.toFixed(1);
        yearSavingsValue.textContent = appData.yearInCome.toFixed(1);
    }
});

choosePersent.addEventListener('input', () => {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePersent.value;
    
        appData.monthInCome = sum/100/12 * percent;
        appData.yearInCome = sum/100 * percent;

        monthSavingsValue.textContent = appData.monthInCome.toFixed(1);
        yearSavingsValue.textContent = appData.yearInCome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};