import React from 'react';

interface BoxProps {
    data:any;
    step:string;
    option:string;
    price:number;
    nextButton: () => void;
    modifyState: (stateName:string, value:any) => void;
}

class Box extends React.Component<BoxProps,{}> {
addOption(step:string, option:string, price:number) {
  // Do something to place order
  this.props.modifyState(step, option);
  this.props.modifyState("basePrice", this.props.data.basePrice + price);
  this.props.modifyState("totalPrice", this.props.data.totalPrice + price);
  this.props.nextButton();
}

renderImage(step:string, option:string) {
    if(step === "size") {
        return <img style={{height: '100px'}} src={require(`../static/size/${this.props.option}.svg`)} alt="logo"/>;
    } else if(step === "crust") {
        return <img style={{height: '100px'}} src={require(`../static/crust/${this.props.option}.svg`)} alt="logo"/>;
    }
    return null;
}

  render() {
      return (
            <div className="rotate" onClick={() => this.addOption(this.props.step, this.props.option, this.props.price)}>
                <div
                    className="box"
                    style={{
                        display: 'flex',
                        flexDirection:'column',
                        alignItems: 'center',
                        justifyContent:'space-around',
                        padding: '50px'}}>
                        {this.renderImage(this.props.step, this.props.option)}
                    <p>
                        {this.props.option + " $" + this.props.price}
                    </p>
                </div>
            </div>
      );
  }
}

export default Box;
