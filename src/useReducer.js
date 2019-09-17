import React, { useReducer} from 'react';

function Reducer(state,action){
    switch(action.type){
        case 'add':return state+1;
        case 'delete':return state-1;
        default:return state;
    }
}



function UseReducerDemo (){
    // useReducer 接受两个参数，第一个是 reducer ，第二个是 状态的初始值
   const [ count , dispatch ] = useReducer(Reducer,0)
   // 方法返回 一个状态 和一个 dispatch函数， 直接执行传递自己想要的参数，
    return (
        <div>
            <p> This is {count} </p>
            <button onClick={()=>{dispatch({type:'add'})}}>add 1</button>
            <button onClick={()=>{dispatch({type:'delete'})}}>delete 1</button>
        </div>
    )
}

export default UseReducerDemo