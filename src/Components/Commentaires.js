import React from "react";

export class Commentaires extends React.Component{
    render(){
        return(
            <div className="container justify-content-center mt-5 border-left border-right">
    <div className="d-flex justify-content-center pt-3 pb-2"> <input type="text" name="text" placeholder="+ Ajouter un commentaire" className="form-control addtxt"/> </div>
    <div className="d-flex justify-content-center py-2">
        <div className="second py-2 px-2"> 
            <div className="d-flex justify-content-between py-1 pt-2">
                <div><img src="https://i.imgur.com/AgAC1Is.jpg" width="18"/><span className="text2">Martha</span></div>
                <div><span className="text3">Upvote?</span><span className="thumbup"><i className="fa fa-thumbs-o-up"></i></span><span className="text4">3</span></div>
            </div>
        </div>
    </div>
    <div className="d-flex justify-content-center py-2">
        <div className="second py-2 px-2"> 
            <div className="d-flex justify-content-between py-1 pt-2">
                <div><img src="https://i.imgur.com/tPvlEdq.jpg" width="18"/><span className="text2">Curtis</span></div>
                <div><span className="text3">Upvote?</span><span className="thumbup"><i className="fa fa-thumbs-o-up"></i></span><span className="text4">3</span></div>
            </div>
        </div>
    </div>
    <div className="d-flex justify-content-center py-2">
        <div className="second py-2 px-2"> 
            <div className="d-flex justify-content-between py-1 pt-2">
                <div><img src="https://i.imgur.com/gishFbz.png" width="18" height="18"/><span className="text2">Beth</span></div>
                <div><span className="text3 text3o">Upvoted</span><span className="thumbup"><i className="fa fa-thumbs-up thumbupo"></i></span><span className="text4 text4i">1</span></div>
            </div>
        </div>
    </div>
    <div className="d-flex justify-content-center py-2">
        <div className="second py-2 px-2"> 
            <div className="d-flex justify-content-between py-1 pt-2">
                <div><img src="https://i.imgur.com/gishFbz.png" width="18" height="18"/><span className="text2">Beth</span></div>
                <div><span className="text3 text3o">Upvoted</span><span className="thumbup"><i className="fa fa-thumbs-up thumbupo"></i></span><span className="text4 text4i">1</span></div>
            </div>
        </div>
    </div>
    </div>
    
        )
    }
}