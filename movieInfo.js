// const form = document.forms['form']

// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     const movieTitle = form.querySelector('.answer').value
// const sendData = async()=>{
//     try{
//         const allMovies = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieTitle}&api_key=1f4091b9f9262a90ac2b089bea81ccad`,{
//             method:"GET",
//             headers: {
//                 "Content-Type":"application/json",
//             },
//         });
//             let movie = "";
//             const allMoviesJson = await allMovies.json();
//             console.log("All Avaliable movies ",allMoviesJson.results.length);
        
//         for(let index = 0; index < allMoviesJson.results.length;index++){
//             const obj = allMoviesJson.results[index]
//             movie += "<b>"+"<b/>" +"MOVIE TITLE : "+obj.title + '<br>'
//             delete obj['title']
        
//             for(let key in obj){
//             movie += `${key}:${obj[key]}` +'<br>'
//         }   movie += '<br>' +'<br>'
//         }
//         document.getElementById('responses').innerHTML = movie
    
//     }catch(error){
//         console.error("Error:", error)
//     }
// }
// sendData()
// })







const sendData = async()=>{
    let allMovies = ''
        try{
            // const allMovies = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieTitle}&api_key=1f4091b9f9262a90ac2b089bea81ccad`,{
            allMovies = await fetch("https://api.themoviedb.org/3/movie/popular&api_key=1f4091b9f9262a90ac2b089bea81ccad",{
                
            // https://api.themoviedb.org/3/movie/now_playing?api_key=your_api_key_here    
            method:"GET",
                headers: {
                    "Content-Type":"application/json",
                },
            
            });
            console.log(allMovies)
            const searchBar = document.forms['form'].querySelector('.answer')
            console.log("title",searchBar)
            searchBar.addEventListener('keyup',(e)=>{
                const value = e.target.value.toLowerCase();
                console.log(value)

                const titles = allMovies.results
                Array.from(titles).forEach((onemovies)=>{
                    const text = onemovies.title;
                    if(text.toLowerCase().includes(value)){
                        onemovies.style.display = "block"
                    }else{
                        onemovies.style.display = "none"
                    }
            })

        })
            // document.getElementById('responses').innerHTML = movie
        
        }catch(error){
            console.error("Error:", error)

}
}
sendData()

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

