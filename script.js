const expenseList = document.getElementById('expense-list');
const expenseName = document.getElementById('expense-name');
const expenseAmount = document.getElementById('expense-amount');
const totalAmount = document.getElementById('total-amount');
const addExpenseButton = document.getElementById('add-expense');

let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

function displayExpenses() {
  expenseList.innerHTML = '';
  let total = 0;

  expenses.forEach(expense => {
    const expenseItem = document.createElement('li');
    expenseItem.textContent = `${expense.name}: $${expense.amount}`;
    expenseList.appendChild(expenseItem);
    total += expense.amount;
  });

  totalAmount.textContent = total;
}

function addExpense() {
  const name = expenseName.value;
  const amount = parseFloat(expenseAmount.value);

  if (name && amount) {
    expenses.push({ name, amount });
    localStorage.setItem('expenses', JSON.stringify(expenses));
    expenseName.value = '';
    expenseAmount.value = '';
    displayExpenses();
  }
}

addExpenseButton.addEventListener('click', addExpense);

displayExpenses();
