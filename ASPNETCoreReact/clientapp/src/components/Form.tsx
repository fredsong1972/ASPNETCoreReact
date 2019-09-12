import React from "react";
interface IFormProps {
    /* The http path that the form will be posted to */
    getWeather: any;
  }
   

class Form extends React.Component<IFormProps> {
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="City..." />
                <input type="text" name="country" placeholder="Country..." />
                <button>Get Weather</button>
            </form>
        );
    }
};

export default Form;