import React from 'react';
import GroupItems from "../GroupItems";

function Step1(props:any) {
  if (props.state.currentStep !== 1) {
    return null
  } 
  return(
    <div>
      <p style={{margin:'0px'}}>Choose Pizza Size</p> 
      <GroupItems data={props.state} nextButton={props.nextButton} modifyState={props.modifyState} modifyToppings={props.modifyToppings}></GroupItems>
      <p>Subtotal: ${props.state.basePrice}</p>
    </div>
  );
}

export default Step1;