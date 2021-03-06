import React, { Component } from 'react';

// import API from "../../utils/API";

class ResultListItem extends Component {

    state = {
        mounted: true,
        bgColor: "",
        color: "",
        text: "add to favorite"
    }
    
    componentDidMount = () => {
        this.setState({
            mounted: true
        })
 
    }

    getStyle = () => {
        if (this.state.text === "add to favorite") {
            this.setState({
                bgColor: "#03F050",
                color: "white",
                text: "Saved to favorite"
            })
        }
        else {
            this.setState({
                bgColor: "",
                color: "",
                text: "add to favorite"
            })
        }   
    }



    onClickFunc = () => {
        this.props.saveGoogleBook(this.props)
        this.getStyle();
    }

    
    render () {
        
       

        return (

            <div>
                <div className="card">
                    <div className="card-header"></div>
                    <div className="card-body">
                       
                        <img src={this.props.image} style={{maxWidth: "100px"}} alt="book"/>
                       
                        <h5 className="card-title" style={{margin: "10px 0"}}>{this.props.title}</h5>
                       
                        <p className="card-text" >{this.props.description}</p>
                        <p style={{fontStyle: "italic"}}>Author(s): {this.props.authors}</p>
                        <a href={this.props.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{marginRight: "6px"}}>View Book</a>
                        <button onClick={this.onClickFunc} style={{ backgroundColor: this.state.bgColor, color: this.state.color }} className="btn">{this.state.text}</button>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default ResultListItem;