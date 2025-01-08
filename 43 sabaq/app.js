// filter
const movies = [
    {name:'Avatar 3D',year:2008,rating:9},
    {name:'Titanik 4D',year:1997,rating:7},
    {name:'Forsaj 9 3D',year:2020,rating:4},
    {name:'Avangers',year:2012,rating:6}
]

const filterMovies = movies.filter((movie)=>{
    return movie.year > 2010
})
console.log(filterMovies);

// map 
const numbers = [2,3,4,5];
 const mapNumber = numbers.map((num) =>{
    return num ** 2
})
console.log(mapNumber);

const mapMovies = movies.map((movie)=>{
    return {name: movie,year:movie.year, movie:movie.rating + 1}
})
console.log(mapMovies);
// sort

const number = [3,5,1,9,19,11]