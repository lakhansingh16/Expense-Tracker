import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpensesChart";
import React, { useState } from "react";

export default function Expenses(props) {
    
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.expenses.filter(
        (expense) => expense.date.getFullYear().toString() === filteredYear
    );

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter
                    selected={filteredYear}
                    onChangeYear={filterChangeHandler}
                />
                <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
}
