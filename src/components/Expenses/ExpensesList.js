import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList(props) {
    if (props.items.length === 0) {
        return <p className="expenses-list__fallback">No expenses found.</p>
    }
    return (
        <ul className="expenses-list">
            {props.items.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    date={expense.date}
                    amount={expense.amount}
                />
            ))}
        </ul>
    );
}
