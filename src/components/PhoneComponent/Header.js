import { Component } from "react";

export default class Header extends Component{
    render(){
        return(
            <div className="header">
                <img className="headerLogo" src="assets/img/Logo-Thegioididong.jpg" alt="avatarLogo" width={140} height={100}/>
                <a href="/#" className="header_customerName">K.Hang Khoa dep trai</a>
            </div>
        )
    }
}