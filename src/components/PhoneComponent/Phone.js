import { Component } from "react";

export default class Phone extends Component{
    render(){
        const {phone , getItemById} = this.props;
         const {id,name,img} = phone;
        return(
            <div key={id} className="Phone">
                <img src={img} alt="myPhone" width={200} height={300} />
                <h1>{name}</h1>
                <button onClick={() => {
                    getItemById(id)
                }} className="phonebtn">Xem chi tiết</button>
            </div>
        )
    }
}