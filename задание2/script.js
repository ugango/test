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

    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) !=null 
        && a != '' && b != '' && a.length < 50  ) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        i--;
    }
    
}

appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Минимум');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log('Средний');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий');
} else {
    console.log('Ошибка');
}

// let i = 0;
// while(i < 2){
//     let a = prompt("Введите обязательную статью расходов в этом месяце", '');
//     let b = prompt("Во сколько обойдется?", '');

//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) !=null 
//         && a != '' && b != '' && a.length < 50  ) {
//         console.log('done');
//         appData.expenses[a] = b;
//         i++;
//     } else {
//         i--;
//     }
// }

// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", '');
//     let b = prompt("Во сколько обойдется?", '');

//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) !=null 
//         && a != '' && b != '' && a.length < 50  ) {
//         console.log('done');
//         appData.expenses[a] = b;
//         i++;
//     } else {
//         i--;
//     }

// } while (i < 2);