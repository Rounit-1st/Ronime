// https://api.jikan.moe/v4/anime?q=attack&sj=sd

export default async function DetailsFetcher(id){
    
    class Result {
        constructor(title,description,type,tag,rating,year,image,id,trailer,dates,status){
            this.title = title||"";
            this.description = description||"";
            this.type = type||"";
            this.rating = rating||"";
            this.tag = tag||"";
            this.year = year||"";
            this.image = image||"";
            this.id = id||"";
            this.trailer = trailer||"";
            this.dates = dates || "";
            this.status = status ||"";
        }
    }

    var result = new Result();

    await fetch(`https://api.jikan.moe/v4/anime/${id}`)
        .then ((response)=>{
            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then (data=>{
        
            const element = data.data;
            
            result.title = (element.title_english)?element.title_english:element.title;
            result.rating = element.score;
            result.type = element.type;
            result.year = element.year;
            result.description = element.synopsis;
            result.image = element.images.jpg.large_image_url;
            result.id = element.mal_id;
            result.trailer = element.trailer.url;
            result.dates = element.aired.string;
            let tag_array=[];
            element.themes.forEach(theme=>{
                tag_array.push(theme.name);
            })
            element.genres.forEach(genre=>{
                tag_array.push(genre.name);
            })
            if(element.airing===true)result.status='Airing'
            else result.status='Ended'
            result.tag = tag_array;
        }) 
        .catch((error) => {
        console.error('Search Fetch Error:', error); // catch errors
        });
    return result;
}