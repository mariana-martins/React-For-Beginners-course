import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = event => {
        {/* Stop the form from submitting */}
        event.preventDefault();
        {/* get the taxt from that input */}
        console.log(this);
        {/* Change the page to /store/whatever-they-enter */}
    };

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter a Store</h2>
                <input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()} />
                <button type="submit">Visit store &#x2192;</button>
            </form>
        )
    }
}

export default StorePicker;