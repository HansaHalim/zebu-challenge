import React from 'react';
import Box from "./Box";
import Toppings from "./Toppings/Toppings";
import {sizes} from "./constants";
import {crust} from "./constants";
import {toppings} from "./constants";

interface GroupProps {
    data:any; 
    nextButton:() => void; 
    modifyState:(stateName:string, value:any) => void;
    modifyToppings: (topping:string, add:boolean) => boolean;
}

interface GroupState {
  sizes:Array<any>;
  crusts:Array<any>;
  toppings:Array<any>;
}

/*
    GroupItems is to group items together, these items can include
    the toppings, all different sizes, and all crust types. This is just
    to wrap the individual items together.

    Note that three constant variables below ('sizes', 'crust', 'toppings')
    are obtained from constants, this can be changed to accept JSON formats if we were
    to link this to an actuall backend server. This allows dynamic modifications to update 
    pizza sizes, crusts, and toppings.
*/
  
class GroupItems extends React.Component<GroupProps, GroupState> {
  renderData(currentStep:number) {
    let stepSelection = crust;
    let step = "";
    if(currentStep === 1) {
      stepSelection = sizes;
      step = "size";
    } else if(currentStep === 2) {
      stepSelection = crust;
      step = "crust";
    } else if(currentStep === 3) {
      stepSelection = toppings;
      step = "toppings";
      return stepSelection.map((base:any) => {
        return <Toppings data={this.props.data} 
                         step={step} 
                         option={base.option} 
                         price={base.price} 
                         nextButton={this.props.nextButton} 
                         modifyToppings={this.props.modifyToppings}/>
      });
    }
    return stepSelection.map((base:any) => {
      return <Box data={this.props.data} 
                  step={step} 
                  option={base.option} 
                  price={base.price} 
                  nextButton={this.props.nextButton} 
                  modifyState={this.props.modifyState}/>
    });
  }

  render(){
    return (
        <div className="is-multiline" style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {this.renderData(this.props.data.currentStep)}
        </div>
    );
  }
}

export default GroupItems;