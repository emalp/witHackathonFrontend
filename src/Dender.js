import React from 'react';
//import ReactSearchBox from 'react-search-box';
import SearchField from 'react-search-field';
import {checkboxes} from './CharacterObj';
import Checkbox from './CheckBox';
import Result from './Result';

import cover_image from "./different1.jpg";

import {searchAPI} from './serviceFunctions';

class Dender extends React.Component {

    constructor() {
        super();

        this.state = {
            result: [],
            params: {
                query: "",
                characters: {
                    1: false,
                    2: false,
                    3: false,
                    4: false,
                    5: false,
                    6: false,
                    7: false,
                    8: false

                }
            },
        }

        this.search = this.search.bind(this);
        this.tickAndSearch = this.tickAndSearch.bind(this);
        this.changeAndSearch = this.changeAndSearch.bind(this);

        this.middleWare = this.middleWare.bind(this);

    }

    async changeAndSearch(search_term){

        try {
            
            await this.setState({
                query: search_term
            });
    
            //await this.search();

        } catch (err) {
            console.log("Error: "+ err);
        }

        

    }

    async tickAndSearch(e) {

        const item = e.target.name;
        const check_val = e.target.checked;

        let new_params = {...this.state.params}
        
        new_params.characters[item] = check_val;
        await this.setState({
            params: new_params
        });


        await this.changeAndSearch();
        // try{
        //     await this.search();

        // } catch(err) {
        //     console.log(err);
        // }
    }

    async search(){
        let search_char = [];

        for(let property in this.state.params.characters){
            if(this.state.params.characters[property] == true){
                search_char.push(Number(property));
            }
        }

        let final_search_query = {
            query: this.state.params.query,
            characters: search_char
        }

        console.log("Inside search, calling searchAPI");
        console.log(this.state.params.query);

        try{
            let result = await searchAPI(final_search_query);
            
            await this.setState({
                result: result.data
            });


        } catch(err){
            console.log(err);
        }
        
    }

    middleWare(text){
        
        this.search(text);

        //sleep
        //return new Promise(resolve => setTimeout(resolve, 2000));
        
    }

    render(){

        return (
            <div>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#">SelectAblilty</a>
            </div>
            </nav>
            <header class="bg-primary text-white">
                <div class="container text-center">
                    <br></br>
                <h1>Welcome to SelectAblilty</h1>
                <p class="lead">.......Text to add..........</p>
                <br></br><br></br>
                </div>
            </header>

            <br></br>
            <div class="col">
                <div class="card">
                <div class="card-header">
                    Search
                </div>
                    <div class="card-body">
                        <div class="card-text">
                        <div class="input-group mb-3"> 
                            <SearchField 
                                placeholder='Enter search term'
                                onChange={this.middleWare}
                                onEnter={this.middleWare}
                                onSearchClick={this.middleWare}
                            />
                        </div>
                                <div class="input-group mb-3"> 
                                {
                                        checkboxes.map(item => (
                                            <div>
                                            <Checkbox name={item.name} onChange={this.tickAndSearch} label={item.label}/>
                                            </div>
                                        ))
                                }
                                
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>

                {
                         this.state.result.map(item => (
                            <Result data={item}/>
                        ))
                }
            </div>
          )
    }



}

export default Dender;