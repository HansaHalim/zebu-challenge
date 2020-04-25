import React from 'react';
import GroupItems from "../GroupItems";

function Step3(props:any) {
  if (props.state.currentStep !== 3) {
    return null
  } 
  return(
    <div>
      <p style={{margin:'0px'}}>Choose Toppings</p> 
      <GroupItems data={props.state} nextButton={props.nextButton} modifyState={props.modifyState} modifyToppings={props.modifyToppings}></GroupItems>
      <p>Choose up to 3 toppings for free! Then $0.5 each.</p> {/*Maximum of x toppings for size pizza*/}
      <p>Subtotal: ${props.state.totalPrice}</p>
    </div>
  );
}

export default Step3;