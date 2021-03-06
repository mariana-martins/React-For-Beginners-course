import React from "react";
import PropTypes from "prop-types";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  static protoTypes = {
    history: PropTypes.object
  };

  myInput = React.createRef();

  goToStore = event => {
    {
      /* Stop the form from submitting */
    }
    event.preventDefault();
    {
      /* get the taxt from that input */
    }
    const storeName = this.myInput.value.value;
    {
      /* Change the page to /store/whatever-they-enter */
    }
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit store &#x2192;</button>
      </form>
    );
  }
}

export default StorePicker;
