// pratice the following loops: for, filter, map, forEach
// be creative, and explore

var disney_movies = ['Cinderella', 'Aladdin', 'Beauty and The Beast', 'Frozen', 'Moana'];

// FOR LOOP
for(var b = 0; b < disney_movies.length; b++){
    console.log(b);
    var m=disney_movies[b];
    console.log(m);
}

// FILTER LOOP
var Dmovies = disney_movies.filter(item=>{
    return disney_movies.length < 6;
});
console.log(Dmovies);

// MAP LOOP
var Dis_movies=disney_movies.map(item=>{
    return item+'- The Legendary Sword Art Online'
});
console.log(Dis_movies);

// FOR EACH LOOP
disney_movies.forEach(Element=>{
    console.log(Element);
    console.log(Element+' is my favorite movie ever - Said Mai Cheng');
})
