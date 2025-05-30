// fetch 5 trending title img des of anime
async function request(limit){

    class Result {
        constructor(title,description,type,tag,rating,year,image){
            this.title = title||"";
            this.description = description||"";
            this.type = type||"";
            this.rating = rating||"";
            this.tag = tag||"";
            this.year = year||"";
            this.image = image||"";
        }
    }

    var result_array =  []; 

    await fetch(`https://api.jikan.moe/v4/top/anime?filter=airing&sfw=true&limit=${limit}`)
        .then ((response)=>{
            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then (data=>{
            data.data.forEach(element => {
                var result = new Result();
                result.title = element.title_english;
                result.rating = element.score;
                result.type = element.type;
                result.year = element.year;
                result.description = element.synopsis;
                result.image = element.images.jpg.large_image_url;
                let tag_array=[];
                element.themes.forEach(theme=>{
                    tag_array.push(theme.name);
                })
                element.genres.forEach(genre=>{
                    tag_array.push(genre.name);
                })
                result.tag = tag_array;
                result_array.push(result);
            });
        }) 
        .catch((error) => {
        console.error('Fetch error:', error); // catch errors
        });  
    
    console.log(result_array);
    return result_array;  

}

export default request;



