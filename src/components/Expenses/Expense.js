import Card from "../UI/Card/Card";
import ExpenseItem from './ExpenseItem/ExpenseItem';

function Expense(props) {
  return (
    <Card>
   
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      >
      </ExpenseItem>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      >
      </ExpenseItem>
    </Card>
  );
}

export default Expense;
