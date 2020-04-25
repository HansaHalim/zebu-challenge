import React from 'react';

interface ToppingsProps {
  data:any;
  step:string;
  option:string;
  price:number;
  nextButton: () => void;
  modifyToppings: (topping:string, add:boolean) => boolean;
}
  
class Toppings extends React.Component<ToppingsProps,{color:string}> {
  constructor(props:any) {
    super(props)
    this.state = {
      color: ""
    }
  }

  addOption(step:string, option:string, price:number) {
    console.log(this.props.option);
    if(this.state.color === "Peru") {
      // Remove
      if(!this.props.modifyToppings(option, false)) {
        return;
      }
      this.setState({color:""});
    } else {
      // Add
      if(!this.props.modifyToppings(option, true)) {
        return;
      }
      this.setState({color:"Peru"});
    }
  }

  render() {
      return (
    <div className="topping" onClick={() => this.addOption(this.props.step, this.props.option, this.props.price)}>
              <div
                  className="box"
                  style={{
                      display: 'flex',
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