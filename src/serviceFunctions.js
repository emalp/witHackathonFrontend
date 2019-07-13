import axios from 'axios';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export async function searchAPI(search_query){
    //await sleep(2000); 

    let param = {
        search: search_query.query
    }

    console.log("Inside searchAPI");
    console.log(search_query.query);

    let characters = search_query.characters;

    let some_result;
    try{

        console.log('---' + param.search);

        some_result = await axios.post("http://localhost:6969/filteredData", characters, {
            params:{
                search: search_query.query
            }
        });

    } catch(err) {
        console.log(err);
    }
    
    console.log("after searchAPI:");
    console.log(some_result);

    // console.log("Inside service functions.");

    // let some_result = [
    //         {
    //             "name": "Restuarant-1",
    //             "reviews": 673,
    //             "price": "$236",
    //             "address": "Address 1",
    //             "image": "https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg"
    //         }
    //     ]
    

    return some_result;

}