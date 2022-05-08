import { Component } from "react";
import DetailPhone from "./DetailPhone";
import Header from "./Header";
import ListPhone from "./ListPhone";

export default class PhoneStore extends Component {
  state = {
    data: [
      {
        id: 1,
        name: "Samsung Galaxy A10",
        price: "40906000",
        img: "assets/img/huawei.jpg",
        info: {
          screen: "AMOLED Full HD 9.0",
          os: "Android 9.0",
          frontCamera: "20MP",
          backCamera: "Chính 48MB, phụ 30MP",
        },
        ram: "4 GB",
        rom: "64 GB",
      },
      {
        id: 2,
        name: "IPhone12",
        price: "200306000",
        img: "assets/img/iphone.jpg",
        info: {
          screen: "Full HD 12.0",
          os: "IOS 14",
          frontCamera: "20MP",
          backCamera: "Chính 100MB, phụ 30MP",
        },
        ram: "16 GB",
        rom: "32 GB",
      },
      {
        id: 3,
        name: "Xiaomi Note 10",
        price: "10005000",
        img: "assets/img/samsung.jpg",
        info: {
          screen: "OLED 10.0",
          os: "Android 8.0",
          frontCamera: "69MP",
          backCamera: "Chính 96MB, phụ 30MP",
        },
        ram: "10 GB",
        rom: "64 GB",
      },
    ],
    detailPhone: null,
  };

  getItemById = (id) => {
    const item = this.state.data.find((item) => item.id === id);
    this.setState({
      detailPhone: item,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <ListPhone getItemById={this.getItemById} listPhone={this.state.data} />
        <DetailPhone phone={this.state.detailPhone} />
      </div>
    );
  }
}
