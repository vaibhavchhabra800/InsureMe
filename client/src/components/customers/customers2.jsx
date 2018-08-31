import React, { Component } from 'react';
import {BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Redirect
}from 'react-router-dom';
import {browserHistory} from 'react-router';






class Customers2 extends Component {
    constructor() {
        super();
        this.state = {
            customers: [],
            category1: "Auto",
            gender1: "Male",
            zip1: 90293,
            age1: 22

        };
        console.log(this);
    }
    componentDidMount() {
        var str1=window.location.href.substr(27);
        console.log(str1);
        var res = str1.split("/");
        console.log("Mounted");
        var ans=0;
        if(res[0][0]=='M')
            ans="Male";
        else
            ans='Female';
        fetch('/api/customers/'+res[0]+'/'+res[1]+'/'+res[2]+'/'+ans)
           .then(res => res.json())
           .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
    }



    performTask(event) {

        browserHistory.push("/data/"+this.state.category1+'/'+this.state.zip1+'/'+this.state.age1+'/'+'/'+this.state.gender1);
        console.log(this);
        console.log(this.state.zip1);
        console.log(this.state.age1);
        console.log("asd");
        console.log(window.location.href);
        // fetch('/api/customers/'+this.state.category1+'/'+this.state.zip1+'/'+this.state.age1+'/'+'/'+this.state.gender1)
        //     .then(res => res.json())
        //     .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
        //event.preventDefault();
    }




    render() {
        console.log("ss" );
        console.log(this.props);
        //const User = ({ match }) => {
        //    return <h1>Hello {match.params}!</h1>
        //};
       // console.log(User);
        console.log("Bhai Print hoja");
        console.log(window.location.href);

        var str1=window.location.href.substr(27);
        console.log(str1);
        var res = str1.split("/");
        console.log(res);
        //console.log(match);
        return (
                <div>

                    <h1>bhaui bhai</h1>
                    <div className="container">

                        <br/>
                        <table className="table ">
                            <thead className="thead-dark">
                            <tr>
                                <th scope="col">Carrier Name</th>
                                <th scope="col">Confidence</th>
                                <th scope="col">Price Per Month</th>


                            </tr>
                            </thead>

                            <tbody>
                            {this.state.customers.map(customer =>

                                <tr key={customer.carrier_id}>

                                    <td >{customer.carrier_name} </td>
                                    <td>{customer.confidence}</td>
                                    <td>{customer.price_per_month}</td>


                                </tr>
                            )}
                            </tbody>
                        </table>



                    </div>

                </div>



        )
    }
}

export default Customers2;

