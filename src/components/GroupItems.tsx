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
  
class GroupItems extends React.Component<GroupProps, {}> {
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