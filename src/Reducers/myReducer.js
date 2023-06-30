var initialData = {
    comp1 :"",
    comp2 :""
};


const myReducer = (state = initialData , action) =>{

    switch(action.type){
        case "cop1":
            state = {
                ...state,
                cop1:action.payload,
            };
            case "comp2":
                state = {
                    ...state,
                    cop2:action.hello,
                };
            break;
    }
    return state;
}

export default myReducer;