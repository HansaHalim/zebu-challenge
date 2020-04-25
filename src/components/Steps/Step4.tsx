import React from 'react';
import ToppingsSummary from "../Toppings/ToppingsSummary";

function Step4(props:any) {
  if (props.state.currentStep !== 4) {
    return null
  } 
  return(
    <div style={{
      display: 'flex',
      flexDirection:'column',
      alignItems: 'center',
      justifyContent:'space-around'}}>
      <div className="card">
        <img src={require(`../../static/Review.jpg`)} alt="Avatar" style={{width:'100%'}}/>
        <div className="container">
          <h3 style={{fontFamily:'Trebuchet MS'}}><b>{props.state.size} Size - {props.state.crust} Crust</b></h3> 
          <p>Total Price: ${props.state.totalPrice}</p>
          <ToppingsSummary data={props.state}></ToppingsSummary>
        </div>
      </div>
    </div>
  );
}

export default Step4;