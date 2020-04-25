import React from 'react';
import Box from "./Box";
import Toppings from "./Toppings/Toppings";

var sizes = [
    { option: 'Small', price: 8 },
    { option: 'Medium', price: 10 },
    { option: 'Large', price: 12 }
  ];
  
  var crust = [
    { option: 'Thin', price: 2 },
    { option: 'Thick', price: 4 }
  ];
  
  var toppings = [
    { option: 'Pepperoni', price: 2 },
    { option: 'Mushrooms', price: 2 },
    { option: 'Onions', price: 2 },
    { option: 'Sausage', price: 2 },
    { option: 'Bacon', price: 2 },
    { option: 'Extra cheese', price: 2 },
    { option: 'Black olives', price: 2 },
    { option: 'Green peppers', price: 2 },
    { option: 'Pineapple', price: 2 },
    { option: 'Spinach', price: 2 }
  ];

interface GroupProps {
    data:any; 
    nextButton:() => void; 
    modifyState:(stateName:string, value:any) => void;
    modifyToppings: (topping:string, add:boolean) => boolean;
  }
  
class GroupItems extends React.Component<GroupProps, {}> {
  renderData(currentStep:number) {
    let stuff = crust;
    let step = "";
    if(currentStep === 1) {
      stuff = sizes;
      step = "size";
    } else if(currentStep === 2) {
      stuff = crust;
      step = "crust";
    } else if(currentStep === 3) {
      stuff = toppings;
      step = "toppings";
      return stuff.map((base:any) => {
        return <Toppings data={this.props.data} step={step} option={base.option} price={base.price} nextButton={this.props.nextButton} modifyToppings={this.props.modifyToppings}/>
    });
    }
    return stuff.map((base:any) => {
      return <Box data={this.props.data} 
                  step={step} option={base.option} 
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