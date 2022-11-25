import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState(new Date().getFullYear());
  const changeYearHandler = (year) => {
    setEnteredYear(year);
  };


  const filteredArray = props.items.filter((expense) => {
    return expense.date.getFullYear() == enteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeYear={changeYearHandler}
        enteredYear={enteredYear}
      />
      {filteredArray.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
