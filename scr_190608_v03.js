'use strict';
//console.log('Проверка');
var money = +prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD'),
    questionsQuantity = 2,
    appData = {
        moneyData: money,
        timeData: time,
        expenses: {},
        optionalExpences: {},
        income: [],
        savings: false
    };

// F O R ====================
/* for (let i = 0; i <= questionsQuantity - 1; i++) { 
    console.log('i = ' + i);
    let p1 = 'expenseRow' + i;
    let p2 = 'payment' + i;
    appData.expenses[p1] = prompt('Введите обязательную статью расходов в этом месяце');
    // console.log(typeof(appData.expenses[p1]));
    appData.expenses[p2] = +prompt('Во сколько обойдется?');
    // console.log(typeof(appData.expenses[p2]));
    if ((typeof(appData.expenses[p1]) === 'string') &&
        (typeof(appData.expenses[p1]) != null) &&
        (typeof(appData.expenses[p2]) != null) &&
        (appData.expenses[p1] != '') &&
        (appData.expenses[p2] != '') &&
        (appData.expenses[p1].length < 50)) {
        alert('Введено верно');
        console.log('Платеж ' + appData.expenses[p1]);
        console.log('Сумма ' + appData.expenses[p2] + ' ₽');
        console.log(appData.expenses[p1] + ' | ' + appData.expenses[p2]);
    } else {
        alert('Введенные данные неверны');
        delete appData.expenses[p1];
        delete appData.expenses[p2];
        i--;
    }
} */


// D 0   W H I L E ===============
/* let i = 0; 
do {
    let p1 = 'expenseRow' + i;
    let p2 = 'payment' + i;
    appData.expenses[p1] = prompt('Введите обязательную статью расходов в этом месяце');
    // console.log(typeof(appData.expenses[p1]));
    appData.expenses[p2] = +prompt('Во сколько обойдется?');
    // console.log(typeof(appData.expenses[p2]));
    if ((typeof(appData.expenses[p1]) === 'string') &&
        (typeof(appData.expenses[p1]) != null) &&
        (typeof(appData.expenses[p2]) != null) &&
        (appData.expenses[p1] != '') &&
        (appData.expenses[p2] != '') &&
        (appData.expenses[p1].length < 50)) {
        alert('Введено верно');
        console.log('Платеж ' + appData.expenses[p1]);
        console.log('Сумма ' + appData.expenses[p2] + ' ₽');
        console.log(appData.expenses[p1] + ' | ' + appData.expenses[p2]);
    } else {
        alert('Введенные данные неверны');
        delete appData.expenses[p1];
        delete appData.expenses[p2];
        i--;
    }
    i++;
} while (i < questionsQuantity); */

// W H I L E ====================
let i = 0;
while (i < questionsQuantity) {
    let p1 = 'expenseRow' + i;
    let p2 = 'payment' + i;
    appData.expenses[p1] = prompt('Введите обязательную статью расходов в этом месяце');
    // console.log(typeof(appData.expenses[p1]));
    appData.expenses[p2] = +prompt('Во сколько обойдется?');
    // console.log(typeof(appData.expenses[p2]));
    if ((typeof(appData.expenses[p1]) === 'string') &&
        (typeof(appData.expenses[p1]) != null) &&
        (typeof(appData.expenses[p2]) != null) &&
        (appData.expenses[p1] != '') &&
        (appData.expenses[p2] != '') &&
        (appData.expenses[p1].length < 50)) {
        alert('Введено верно');
        console.log('Платеж ' + appData.expenses[p1]);
        console.log('Сумма ' + appData.expenses[p2] + ' ₽');
        console.log(appData.expenses[p1] + ' | ' + appData.expenses[p2]);
    } else {
        alert('Введенные данные неверны');
        delete appData.expenses[p1];
        delete appData.expenses[p2];
        i--;
    }
    i++;
}


console.log(appData.expenses);
alert('Бюджет на день ' + (appData.moneyData / 30).toFixed(2) + " ₽");