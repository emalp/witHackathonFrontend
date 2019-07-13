import axios from 'axios';

export async function searchAPI(search_query){
    // let param = {
    //     search: search_query.search_name
    // }

    // let characters = search_query.characters;

    // let result = await axios.post("/api/search", characters, {
    //     params:param
    // });

    console.log("Inside service functions.");

    let some_result = [
            {
                "name": "Restuarant-1",
                "reviews": 673,
                "price": "$236",
                "address": "Address 1",
                "image": "https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg"
            }
        ]
    

    return some_result;

}