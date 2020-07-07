import React from "react";


function SearchForm(props) {
    return (
        <form>
            <div className="form-group container">
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search"
                    type="text"
                    className="form-control text-center"
                    placeholder="Search For a Employee"
                    id="search"
                />
                <br />
                <button onClick={props.handleFormSubmit} className="btn btn-primary">
                    Search
        </button>
            </div>
        </form>
    );
}

export default SearchForm;