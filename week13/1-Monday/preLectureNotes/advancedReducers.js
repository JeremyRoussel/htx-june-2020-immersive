

// let state = {
//     clicks: 0,
//     count: 0
// }

// let newState = {
//     ...state,
//     clicks: state.clicks + 1
// }

// console.log(state, newState);
// let newState = {...state}

// newState.clicks = state.clicks + 1;


// let state = {

//     student: {
//         name: "Dan",
//         city: "Houston"
//     },
//     campus: {
//         school: {
//             name: "DigitalCrafts",
//             info: {
//                 city: "Houston",
//                 state: "Texas",
//                 type: "Bootcamp"
//             }
//         }
//     }
// }

// let newState = {
//     ...state,
//     campus: {
//         ...state.campus,
//         school: {
//             ...state.campus.school,
//             info: {
//                 ...state.campus.school.info,
//                 city: "Atlanta",
//                 state: "Georgia"
//             }
//         }
//     }
// }


// console.log(state.campus.school.info, newState.campus.school.info);


// let state = {

//     houses: {
//         gryffindor: {
//             points: 15
//         },
//         ravenclaw: {
//             points: 18
//         },
//         hufflepuff: {
//             points: 7
//         },
//         slytherin: {
//             points: 5
//         }
//     }
// }

// let key = "gryffindor"

// let newState = {
//     ...state,
//     houses: {
//         ...state.houses,
//         [key]: {
//             ...state.houses[key],
//             points: state.houses[key].points + 3
//         }
//     }
// }

// let state = [1, 2, 3];
// let newState = [0, ...state, 4, 5, ...state]

// console.log(state, newState);

// let state = [1, 2, "X", 4];

// let newState = state.map(s => {

//     if (s == "X") {
//         s = 3
//     }
//     return s

// })

// let state = [1, 2, 3, 5, 6];

// let newItem = 4;

// let newState = [...state]


// newState.splice(3, 0, newItem)

// console.log(state, newState);

// let state = [1, 2, "X", 4]

// let newState = state.filter( item =>{

//     return item !== "X"
// })

// //[1, 2, 4]

// console.log(newState);

// let state = [1, 2, "X", 4]

// let newState = state.map(item =>{

// })

//[1, 2, 3, 4]