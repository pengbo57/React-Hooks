import React,{useContext} from 'react';
import {UPDATACOLOR , ColorContext} from './color'

    //不能写在外边呀  不然就错了哦
    // let {dispatch} = useContext(ColorContext)
function Button (){
    const {dispatch} = useContext(ColorContext) //派发动作
    return (
        <div>
            <button onClick = {()=>{dispatch({type:UPDATACOLOR,color:'red'})}}>红色</button>
            <button onClick = {()=>{dispatch({type:UPDATACOLOR,color:'green'})}}>绿色</button>
        </div>
    )
}
export default Button