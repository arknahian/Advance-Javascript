const singers = [
    {name: "Justin Bieber", id: 213, country : "Canada"},
    {name: "Charlie Puth", id: 253, country : "USA"},
    {name: "Tylor Swift", id: 273, country : "USA"},
    {name: "Ed Sheeran", id: 243, country : "UK"},
    {name: "Eminem", id: 253, country : "USA"},
]


// for (let i = 0; i < singers.length; i++) {
//     const element = singers[i];
//     console.log(element);
// }

//=================== using map ==================


const names = singers.map( s => s.name);
console.log(names);