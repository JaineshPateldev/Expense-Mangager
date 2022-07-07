import "./ExpenseItem.css";

import ExpenseItemDate from "../date/ExpenseItemDate";
import Card from "../../UI/Card/Card";



function ExpenseItem(props) {
 
  return (
    <Card className='expense-item'>
      <ExpenseItemDate date={props.date} />
      <div className='expense-item__description' >
        <div>{props.title}</div>
        <div className='expense-item__price'> {props.amount}</div>
      </div>
    
    </Card>
  ); 
}

export default ExpenseItem;
