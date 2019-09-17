import React ,{createContext,useReducer} from 'react';

export const UPDATACOLOR = 'UPDATACOLOR'

export const ColorContext = createContext({})

const ColorReducer =(state,action)=>{
    switch(action.type){
        case UPDATACOLOR:
            return action.color;
        default:
            return state;
    }
}



export const Color = props=>{
    const [color,dispatch] = useReducer(ColorReducer,'blue')
    return (
            <ColorContext.Provider value = {{color,dispatch}}>
                {props.children}
            </ColorContext.Provider>
    )
}