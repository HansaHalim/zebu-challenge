import React from 'react';
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";

var toppingsList = [
    { topping: 'Pepperoni', selected: false },
    { topping: 'Mushrooms', selected: false },
    { topping: 'Onions', selected: false },
    { topping: 'Sausage', selected: false },
    { topping: 'Bacon', selected: false },
    { topping: 'Extra cheese', selected: false },
    { topping: 'Black olives', selected: false },
    { topping: 'Green peppers', selected: false },
    { topping: 'Pineapple', selected: false },
    { topping: 'Spinach', selected: false }
  ];

interface FormState {
    currentStep: number;
    basePrice: number;
    totalPrice: number;
    size: string;
    crust: string;
    toppings: Map<string, boolean>;
    usedToppings: number;
}
  
class MasterForm extends React.Component<{}, FormState> {
  constructor(props:any) {
    super(props)
    this.state = {
      currentStep: 1,
      basePrice: 0,
      totalPrice: 0,
      size: "",
      crust: "",
      toppings: new Map(),
      usedToppings: 0
    };

    const toppings = this.state.toppings;
    toppingsList.forEach((base:any) => {
      toppings.set(base.topping, base.selected);
    });
    this.setState({toppings: toppings});
  }
  
  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2 ? 3: currentStep + 1
    console.log("next page")
    this.setState({
      currentStep: currentStep
    })
  }

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
      if(toppings.get(topping) === false) {
        toppings.set(topping, true);
        usedToppings = usedToppings + 1;
        this.setState({toppings: toppings, usedToppings: usedToppings});
      }
    } else {
      // Remove topping
      if(toppings.get(topping) === true) {
        toppings.set(topping, false);
        usedToppings = usedToppings - 1;
        this.setState({toppings: toppings, usedToppings: usedToppings});
      }
    }
    
    // Update price:
    if(usedToppings > 3) {
      const totalPrice = this.state.basePrice + (usedToppings - 3)*0.5;
      this.setState({totalPrice: totalPrice});
    } else {
      // less than or equal to 3 toppings are free
      this.setState({totalPrice: this.state.basePrice});
    }

    console.log("Toppings now: " + this.state.usedToppings)
    return true;
  }

  // Allows to modify the state in MasterForm
  modifyState = (stateName:string, value:any) => {
    this.setState({[stateName]: value} as Pick<FormState, keyof FormState>);
    console.log(this.state.size);
    console.log(this.state.crust);
    console.log(this.state.totalPrice);
  }

  _review = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 3 ? 4: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

reviewButton() {
  let currentStep = this.state.currentStep;
  if(currentStep === 3){
    return (
      <button
        className="button"
        type="button" onClick={this._review}>
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
          state={this.state} nextButton={this._next} modifyToppings={this.modifyToppings} reviewButton={this._review}
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