import axios from "axios";


const searchImages = async ()=>{


    const response = await axios.get("https://api.unsplash.com/search/photos",{
        headers:{
            Authorization:"Client-ID ATeuPXAgOapKUiaEFpVzLMNLOmhZJUn7oxDKOWy2frM"
        },
        params:{
            query:"Dogs"
        }
    })

    console.log(response.data.results);

    return response.data.results;

}


export default searchImages;