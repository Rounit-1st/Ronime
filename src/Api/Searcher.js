// https://api.jikan.moe/v4/anime?q=attack&sj=sd

export default async function Searcher(query){
    
    class Result {
        constructor(title,description,type,tag,rating,year,image,id,trailer){
            this.title = title||"";
            this.description = description||"";
            this.type = type||"";
            this.rating = rating||"";
            this.tag = tag||"";
            this.year = year||"";
            this.image = image||"";
            this.id = id||"";
            this.trailer = trailer||"";
        }
    }

    var result_array =  [];

    await fetch(`https://api.jikan.moe/v4/anime?q=${query}&limit=24`)
        .then ((response)=>{
            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then (data=>{
            console.log(data.data);
            data.data.forEach(element => {
                var result = new Result();
                result.title = (element.title_english)?element.title_english:element.title;
                result.rating = element.score;
                result.type = element.type;
                result.year = element.year;
                result.description = element.synopsis;
                result.image = element.images.jpg.large_image_url;
                result.id = element.mal_id;
                result.trailer = element.trailer.url;
                let tag_array=[];
                element.themes.forEach(theme=>{
                    tag_array.push(theme.name);
                })
                element.genres.forEach(genre=>{
                    tag_array.push(genre.name);
                })
                result.tag = tag_array;
                result_array.push(result);
            })
            
        }) 
        .catch((error) => {
        console.error('Search Fetch Error:', error); // catch errors
        });
    console.log("searcher",result_array)
    return result_array;
}