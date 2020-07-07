import React, { Component } from "react";
import SearchForm from "./SearchForm";
import Header from "./Header";
import Row from "./Row";
import data from "../data.json";

class DirectoryParent extends React.Component {
    dataToDisplay = data;
    constructor() {
        super()
        this.state = {

            data: this.dataToDisplay,
            search: ""
        }



    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    // When the form is submitted, search the OMDB API for the value of `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployee(this.state.search);
    };

    searchEmployee(search) {
        let results = this.dataToDisplay.filter(item => {
            return item.name === search;

        })

        this.setState({ data: results });
    }


    render() {
        console.log(this.state);
        return (
            <div className="App">
                <div className="jumbotron">
                    <h1>Employee Directory</h1>
                    <p>Click on carrots to filter by heading or use the search box to narrow your results</p>


                </div>

                <SearchForm
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />

                <table className="table">

                    <Header />

                    <tbody>

                        {this.state.data.map(item => {

                            return (<Row image={item.image} name={item.name} phone={item.phone} email={item.email} dob={item.dob} />)
                        })}




                    </tbody>

                </table>





            </div>
        );


    }








}

export default DirectoryParent;