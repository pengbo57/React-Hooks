import React ,{useContext}from 'react';
import {ColorContext} from './color'


function Font(){
    const  {color}  = useContext(ColorContext) // 上下文拿数据
    return (
        <div>
             <p style={{color:color}}>这个颜色是{color}</p>
        </div>
    )
}
export default Font