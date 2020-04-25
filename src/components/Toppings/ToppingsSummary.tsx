import React from 'react';

class ToppingsSummary extends React.Component<{data:any},{}> {
  renderToppings(stuff:any) {
    let buffer:any = []
    // We use buffer since forEach doesn't return anything
    stuff.forEach((value: boolean, key: string) => {
      if(value === true) {
        buffer.push(<li>{key}</li>);
      }
    });

    if(buffer.length === 0) {
      return (
        <p>With No Toppings</p>
      )
    }

    return (
      <ul style={{width:'80%'}}> <h4 style={{fontFamily:'Geneva', margin:'15px'}}><b>Toppings:</b></h4>
          {buffer}
      </ul>
    );
  }
  
  render() {
    return(
      <div>
        {this.renderToppings(this.props.data.toppings)}
      </div>
    );
  }
}

export default ToppingsSummary;