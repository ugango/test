' use strict ';



let money = +prompt("Ваш бюджет на месяц?", 0), 
    time = prompt("Введите дату в формате YYYY-MM-DD", 0);
    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", '');
    let b = prompt("Во сколько обойдется?", '');

    appData.expenses[a] = b;
}

alert(+appData.budget / 30);
