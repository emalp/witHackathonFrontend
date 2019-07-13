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
                    4: false
                }
            },
        }

        this.search = this.search.bind(this);
        this.tickAndSearch = this.tickAndSearch.bind(this);
        this.changeAndSearch = this.changeAndSearch.bind(this);

        this.middleWare = this.middleWare.bind(this);

    }

    async changeAndSearch(search_term){
        console.log("change and search");
        console.log(search_term);

        try {
            await this.setState({
                query: search_term
            });
    
            await this.search();

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


        try{
            await this.search();

        } catch(err) {
            console.log(err);
        }
    }

    async search(){
        let search_char = [];

        for(let property in this.state.params.characters){
            if(this.state.params.characters[property] == true){
                search_char.push(property);
            }
        }

        let final_search_query = {
            query: this.state.params.query,
            characters: search_char
        }

        try{
            let result = await searchAPI(final_search_query);
            
            await this.setState({
                result: result
            });


        } catch(err){
            console.log(err);
        }
        
    }

    middleWare(text){

        this.changeAndSearch(text);
        
    }

    render(){

        return (
            <div>

            <img src={cover_image}/><br/>

                <SearchField 
                    placeholder='Enter search term'
                    onChange={this.middleWare}
                    onEnter={this.middleWare}
                    onSearchClick={this.middleWare}
                />

                <br/>
                <br/>

                {
                        checkboxes.map(item => (
                            <Checkbox name={item.name} onChange={this.tickAndSearch} label={item.label}/>
                        ))
                }

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