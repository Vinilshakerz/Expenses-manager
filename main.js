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

appData.moneyPerDay = (appData.budget / 30).toFixed();
alert("Ежедневный доход = " + appData.moneyPerDay);
if (appData.moneyPerDay <= 100) {
  console.log("Низкий уроверь достатка");
}
else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
}
else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
}
else {
  console.log("Ошибка ввода данных");
}

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("Сумма вашего депозита?"),
        percent = +prompt("Под какой процент?");
    appData.monthIncome = save/100/12*percent;
    alert("Ваш ежемесечный доход = " + appData.monthIncome);
  }
}

checkSavings();