import React from "react";
import data from "./Country.json";
import { Component } from "react";
 class Form extends Component{

    constructor(){
        super();
    }
    render(){
        
            return (
                <section className="form-blk">
                    <form >
                        <label htmlFor="search">
                            Search Country</label>
                        <input type="text"
                            placeholder="Search here....."
                            id="search"
                            list="country"
                        />
                        <datalist id="country">
                            {data.map(value => {
                                return(
                                    <option value ={value.code} key={value.name}>
                                        {value.name}
                                    </option>
                                );
                            })}
                        </datalist>
                        <button>Submit</button>
                    </form>
                </section>
            );
        }
        
    }
 
   
export default Form;