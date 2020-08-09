const num = [1, 2, 3, 4, 5, 6, 7, 8];


//================= square by for loop ====================
const output = [];
for (let i = 0; i < num.length; i++) {
    const element = num[i];
    const result = element * element;
    output.push(result);
}

// console.log(output);




function square(element){
    return element * element
}


num.map(function (element, index, array){
    // console.log(element, index, array);
})

//========================== using map to square element ======================================

const result = num.map(function (element){
    return element * element;
})
// console.log(result);





//=======================================using map and using shortcut ============================= 

// const square = num => element * element;
// console.log(square);


const result = num.map(x => x*x);
// console.log(result);



//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& filter &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

const bigger = num.filter( x => x> 5)
// console.log(bigger);


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& find &&&&&&&&&&&&&&&&&&&&&&&&&&&&

const isThere = num.find( x => x < 5 )

// console.log(isThere);
