import React, { Component } from 'react';
import {BrowserRouter as Router,
Route,
Link,
NavLink,
Redirect
}from 'react-router-dom';
import {browserHistory} from 'react-router';
import './customers.css';
import Customers2 from './customers2'  ;

// const Child =({match}) => {
//     <div>
//         ID:{match.params.id};
//     </div>
// }

const Main= () =>{
    return(<div></div>)
};


const dataClick= () =>{
    return(<h1>Welocme User vaibhav</h1>)
};


class Customers extends Component {
    constructor() {
        super();
        this.state = {
            customers: [],
            category1: "Auto",
            gender1: "Male",
            zip1: 90293,
            age1: 22

        };
    }

//http://localhost:5000/api/customers/Auto/90293/35/Male
    componentDidMount() {
        // fetch('/api/customers/'+this.state.category1+'/'+this.state.zip1+'/'+this.state.age1+'/'+this.state.gender1)
        //    .then(res => res.json())
        //    .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
     }


    performTask(event) {

        browserHistory.push("/data/"+this.state.category1+'/'+this.state.zip1+'/'+this.state.age1+'/'+this.state.gender1);
        console.log(this);
        console.log(this.state.zip1);
        console.log(this.state.age1);
        console.log("asd");
        console.log(window.location.href);
        // fetch('/api/customers/'+this.state.category1+'/'+this.state.zip1+'/'+this.state.age1+'/'+'/'+this.state.gender1)
        //     .then(res => res.json())
        //     .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
        // event.preventDefault();
    }

    dataSubmitted(event) {

    }

    changeZipCode(event) {
        this.setState({zip1: event.target.value});
    }
    changeAge1(event) {
        this.setState({age1: event.target.value});
    }

    changeCategory1(event) {
        this.setState({category1: event.target.value});
    }

    changeGender1(event) {
        this.setState({gender1: event.target.value});
    }

    render() {
        return (
            <Router>
                <div>
                    <Route path="/" exact render={
                        () => {
                            return(

                                <div className="container">

                                    <br/>
                                    <form onSubmit={this.performTask.bind(this)} className="form-group">




                                        <div className="form-group">
                                            Category
                                        </div>
                                        <div className="boundary1">

                                            <select  value={this.state.category1}  onChange={this.changeCategory1.bind(this)} className="form-control form-control-md w-50">
                                                <option >Auto</option><option>Life</option>
                                            </select>
                                        </div>
                                        <br/>
                                        <div className="form-group">
                                            <label >Zip Code</label>
                                            <br/>
                                            <div className="boundary1">

                                    <input type="text" ref="zipcoderef1" className="form-control center1 w-50" onChange={this.changeZipCode.bind(this)} placeholder="90293"   role="combobox" dir="auto" />

                                            </div>
                                            <br/>

                                            <div className="form-group  ">

                                                <label className="text1" >Gender</label>
                                                <div className="boundary1">
                                                <br/>
                                                    <select name="gender"  className="form-control w-50 form-control-md "><option>Male</option><option>Female</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="form-group  " >Age</div>

                                            <div className="boundary1">
                                                <input type="text" ref="ageref1"  onChange={this.changeAge1.bind(this)} placeholder="35" className="form-control w-50 form-control-md "  role="combobox"  />
                                            </div>
                                            <br/>
                                            <div className="boundary1">
                                                <button type="submit" className=" btn btn-success   btn-lg btn-block w-50">Submit</button>
                                            </div>
                                        </div>
                                    </form>

                                </div>

                            )
                        }
                    }
                    />
                    <Route path="/data/:category1/:zip1/:age1/:gender1" exact  render={
                        () => {
                            return(
                                <div >


                                     <Customers2/>

                                </div>
                                  );
                            }}
                            />
                </div>
            </Router>


        );
    }
}

export default Customers;

