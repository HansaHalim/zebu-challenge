import React from 'react';

interface ToppingsProps {
  data:any;
  step:string;
  option:string;
  price:number;
  nextButton: () => void;
  modifyToppings: (topping:string, add:boolean) => boolean;
}

interface ToppingsState {
  color:string;
}
  
class Toppings extends React.Component<ToppingsProps,ToppingsState> {
  constructor(props:any) {
    super(props)
    this.state = {
      color: ""
    }
  }

  addOption(step:string, option:string, price:number) {
    console.log(this.props.option);
    if(this.state.color === "Peru") {
      // Unselect Topping
      if(!this.props.modifyToppings(option, false)) {
        return; // Return if topping was never selected
      }
      this.setState({color:""});
    } else {
      // Select Topping
      if(!this.props.modifyToppings(option, true)) {
        return; // if topping was already selected
      }
      this.setState({color:"Peru"});
    }
  }

  render() {
    return (
      <div className="topping" onClick={() => this.addOption(this.props.step, this.props.option, this.props.price)}>
        <div
          className="box"
          style={{display: 'flex',
                  flexDirection:'column',
                  alignItems: 'center',
                  justifyContent:'space-around',
                  padding: '10px',
                  backgroundColor:this.state.color}}>
          <img style={{height: '90px'}} src={require(`../../static/toppings/${this.props.option}.svg`)} alt="logo"/>
          <p>
            {this.props.option}
          </p>
        </div>
      </div>
    );
  }
}

export default Toppings;