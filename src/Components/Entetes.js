import React from "react"


export class Entete extends React.Component{
    render(){
        return (
        <div className="entete" >
        <h1>{this.props.titre}</h1>
        </div>
        )
        
    }
}