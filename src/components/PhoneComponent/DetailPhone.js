import { Component } from "react";

export default class DetailPhone extends Component{
    render(){
        const {phone} = this.props
        console.log(phone)
        // if(phone != null){
        //     const {id,name,img,price,ram,rom,info} = phone;
        // }
        return(
            <div className="detailPhone">
                {
                    phone != null ?
                    <div>
                    <div className="imgName">{phone.name}
                    </div>
                    <div className="detailInfor"></div> 
                    </div>
                    
                    : 
                    <div></div>
                }
                    
                
            </div>
        )
    }
}