const form = document.forms['form']
let count = 0
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const movieTitle = form.querySelector('.answer').value
const sendData = async()=>{
    try{
        const allMovies = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieTitle}&api_key=1f4091b9f9262a90ac2b089bea81ccad`,{
            method:"GET",
            headers: {
                "Content-Type":"application/json",
            },
        });
            let movie = "";
            const allMoviesJson = await allMovies.json();
            const length = allMoviesJson.results.length
            console.log("All Avaliable movies ",allMoviesJson.results.length);
            console.log(allMoviesJson.results)
            
            document.getElementById('responses').innerHTML = allMoviesJson.results[count]
            console.log(count,allMoviesJson.results[count].overview)
            count+=1

            console.log("next")
            let movieTitle2
            if(form.addEventListener('submit', (e) => {
                        e.preventDefault()
            movieTitle2 = form.querySelector('.answer').value
        }))
        if (movieTitle == movieTitle2) {
            newSubmit(movieTitle, length, allMoviesJson,form)
        }
            
        
            
        
            // for(let index = 0; index < allMoviesJson.results.length;index++){
        //     const obj = allMoviesJson.results[index]
        //     movie += "<b>"+"<b/>" +"MOVIE TITLE : "+obj.title + '<br>'
        //     delete obj['title']
        
        //     for(let key in obj){
        //     movie += `${key}:${obj[key]}` +'<br>'
        // }   movie += '<br>' +'<br>'
        // }
        // document.getElementById('responses').innerHTML = movie
    
    }catch(error){
        console.error("Error:", error)
    }
}
sendData()
})








function newSubmit(movieTitle, length, allMoviesJson,form) {
        // const movieTitle2 = form.querySelector('.answer').value
        // if (movieTitle == movieTitle2) {
            if (length > 1 && count != length-1) {
                document.getElementById('responses').innerHTML = allMoviesJson.results[count]
                console.log(count, allMoviesJson.results[count].overview)
                count += 1
            }else{
                document.getElementById('responses').innerHTML = allMoviesJson.results[0]
                console.log(count, allMoviesJson.results[0].overview)
        }
    
        newSubmit(movieTitle,length,allMoviesJson)
    }

// let allMovies = ""
//             // const searchBar = document.forms['form'].querySelector('.answer')
//             // console.log("title",searchBar)
//             // searchBar.addEventListener('keyup',(e)=>{
//             //     let values = e.target.value.toLowerCase();
//             //     console.log("value",values)

//             const searchBar = document.forms['form']
//                 searchBar.addEventListener('submit',(e)=>{
//                         e.preventDefault()
//                         values = form.querySelector('.answer').value
//                         console.log(values)
            
//                 const sendData = async()=>{
//                 try{
//                  allMovies = await fetch(`https://api.themoviedb.org/3/search/movie?query=${values}&api_key=1f4091b9f9262a90ac2b089bea81ccad`,{
                     
//                     method:"GET",
//                         headers: {
//                             "Content-Type":"application/json",
//                         },
//                     })
//                     }catch(error){
//                             console.error("Error:", error)
//                         }
//                     console.log(allMovies)
            
//                     const text = String (allMovies.title)
//                     if(text.toLowerCase().includes(values)){
//                         // onemovies.style.display = "block"
//                         console.log(allMovies)
//                     }else{
//                         // onemovies.style.display = "none"
//                         console.log("none")
//                     }
//                 }
//                 sendData()
//             })
            // })

        
            // document.getElementById('responses').innerHTML = movie
        
    




// const searchBar = document.forms['form'].querySelector('answer')
// searchBar.addEventListener('keyup',(e)=>{
//     const value = e.target.value.toLowerCase();
//     const titles = books.getElementsByTagName("li");

//     Array.from(titles).forEach((title)=>{
//         const text = title.firstElementChild.textContent;
//         if(text.toLowerCase().includes(value)){
//             title.style.display = "block"
//         }else{
//             title.style.display = "none"
//         }


//     })

// })

