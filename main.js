let money, time;
function start() {
  money = +prompt("Ваш бюджет на месяц");
  time = prompt("Введите дату в формате DD-MM-YYYY");
  while ( isNaN(money) || (money == '') || (money == null) ) {
    money = +prompt("Ваш бюджет на месяц");
  }
}
start();
let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: {},
  savings: false,
};
function chooseExpenses() {
  for ( let i = 0; i < 2; i++ ) {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = +prompt("Во сколько обойдется?");
    if ( (typeof(a) === "string") && (typeof(a) != null) && (typeof(b) != null) &&
    (a != b != '')  && (a.length <= 50)) {
      appData.expenses[a] = b;
      console.log("done");
    }
    else {
      console.log("Некорректные значения. Повторите ввод");
      i--;
    }
  }
}
chooseExpenses();
// let i = 0;
// while (i < 2) {
//   a = prompt("Введите обязательную статью расходов в этом месяце");
//   b = prompt("Во сколько обойдется?");
//   appData.expenses[a] = b;
//   i++;
// }

// do {
//   a = prompt("Введите обязательную статью расходов в этом месяце");
//   b = prompt("Во сколько обойдется?");
//   appData.expenses[a] = b;
//   i++;
// } while (i < 2);
appData.moneyPerDay = (appData.budget / 30).toFixed();
alert("Ежедневный доход = " + appData.moneyPerDay);
switch(Number(appData.moneyPerDay)) {
  case '<= 100' :
    console.log("Низкий уроверь достатка");
    break;
  case '> 100' : 
    console.log("Средний уровень достатка");
    break;
  case '> 2000' : 
    console.log("Высокий уровень достатка");
    break;
  default : 
    console.log("Ошибка ввода данных");
}