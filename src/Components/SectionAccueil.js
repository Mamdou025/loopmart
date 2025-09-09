import React from "react";


export class SectionAccueil extends React.Component{
    render(){
        return(
            <div className="sectionaccueil">
                   <div className="overlap-group">
                       <input 
                         className="inputtext"
                         value={this.props.searchQuery || ''}
                         onChange={(e) => this.props.onSearch && this.props.onSearch(e.target.value)}
                       />
                      <button className="rectangle-66" onClick={() => this.props.onSearch && this.props.onSearch(this.props.searchQuery || '')}><i className="bi bi-search "></i></button>
                   </div>
            </div>

        )

        
    
    }
        
}


export class SectionAccueil2 extends React.Component{
    render(){
        return(
            <div className="sectionaccueil2">
                   
            </div>

        )
        
        
    
    }
        
}
