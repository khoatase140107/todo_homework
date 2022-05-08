import { Component } from "react";
import Phone from "./Phone";

export default class ListPhone extends Component {
  render() {
    const { listPhone, getItemById } = this.props;
    //console.log(listPhone)
    return (
      <div className="listPhone">
        {listPhone.map((phone, index) => {
          return <Phone getItemById={getItemById} phone={phone} />;
        })}
      </div>
    );
  }
}
