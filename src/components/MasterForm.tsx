import React from 'react';
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import {toppingsList} from "./constants";

interface FormState {
    currentStep: number;
    basePrice: number;
    totalPrice: number;
    size: string;
    crust: string;
    toppings: Map<string, boolean>;
    usedToppings: number;
}

/*  
    Masterform is the multi step form containing 4 distinct
    steps to allow the user to switch screens between selecting
    their pizza size, crust and toppings to finally see their confirmation
*/
  
class MasterForm extends React.Component<{}, FormState> {
  constructor(props:any) {
    super(props)
    this.state = {
      currentStep: 1,
      basePrice: 0, // This is to keep track the price of size + crust only
      totalPrice: 0, // Total price with toppings
      size: "",
      crust: "",
      toppings: new Map(),
      usedToppings: 0
    };

    // Below is to copy the toppings hashmap from a
    // constant into the hashmap in this FormState
    const toppings = this.state.toppings;
    toppingsList.forEach((base:any) => {
      toppings.set(base.topping, base.selected);
    });
    this.setState({toppings: toppings});
  }
  
  // To move into the next page/step
  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 3 ? 4: currentStep + 1
    console.log("next page")
    this.setState({
      currentStep: currentStep
    })
  }

  // We pass this function to the Topping class to allow it
  // to modify the state in this MasterForm
  // Add == true means add topping, false is to remove.
  modifyToppings = (topping:string, add:boolean) => {
    let maxTop = 5;
    if (this.state.size === "Medium") {
      // Max is 7
      maxTop = 7;
    } else if (this.state.size === "Large") {
      // Large pizza Max is 9
      maxTop = 9;
    }

    const toppings = this.state.toppings;
    var usedToppings = this.state.usedToppings;
    if(add) {
      if(this.state.usedToppings >= maxTop) {
        let error = "Maximum toppings for " + this.state.size + " Pizza is " + maxTop;
        alert(error)
        return false;
      }
      if(toppings.get(topping) === false) { // Making sure topping was not selected
        toppings.set(topping, true);
        usedToppings = usedToppings + 1;
        this.setState({toppings: toppings, usedToppings: usedToppings});
      }
    } else {
      // Remove topping
      if(toppings.get(topping) === true) { // Making sure topping is selected
        toppings.set(topping, false);
        usedToppings = usedToppings - 1;
        this.setState({toppings: toppings, usedToppings: usedToppings});
      }
    }
    
    // Update total price:
    if(usedToppings > 3) {
      const totalPrice = this.state.basePrice + (usedToppings - 3)*0.5;
      this.setState({totalPrice: totalPrice});
    } else {
      // less than or equal to 3 toppings are free
      this.setState({totalPrice: this.state.basePrice});
    }

    return true;
  }

  // We pass this function as props to allow other
  // classes to modify the state in this MasterForm
  modifyState = (stateName:string, value:any) => {
    this.setState({[stateName]: value} as Pick<FormState, keyof FormState>);
  }

  // Review Button will only be shown on toppings page (Step 3)
  reviewButton() {
    let currentStep = this.state.currentStep;
    if(currentStep === 3){
      return (
        <button
          className="button"
          type="button" onClick={this._next}>
            Review
          </button>
      )
    }
    return null;
  }
  
  render() {    
    return (
      <React.Fragment>
        <Step1
          state={this.state} nextButton={this._next} modifyState={this.modifyState}
        />
        <Step2
          state={this.state} nextButton={this._next} modifyState={this.modifyState}
        />
        <Step3
          state={this.state} nextButton={this._next} modifyToppings={this.modifyToppings}
        />
        <Step4
          state={this.state} nextButton={this._next} modifyToppings={this.modifyToppings} 
        />
        {this.reviewButton()}
      </React.Fragment>
    );
  }
}

export default MasterForm;