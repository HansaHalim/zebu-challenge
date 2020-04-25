import React from 'react';
import GroupItems from "../GroupItems";

function Step2(props:any) {
  if (props.state.currentStep !== 2) {
    return null
  } 
  return(
    <div>
      <p style={{margin:'0px'}}>Choose Pizza Crust</p> 
      <GroupItems data={props.state} nextButton={props.nextButton} modifyState={props.modifyState} modifyToppings={props.modifyToppings}></GroupItems>
      <p>Subtotal: ${props.state.basePrice}</p>
    </div>
  );
}

export default Step2;