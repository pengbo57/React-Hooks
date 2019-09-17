import React, { useState } from 'react';

function UseSatetDemo (){
    const [ count , setCount ]= useState(0)
    // 解构一个状态和函数，并且这个函数是可以改变这个状态的方法

    // 切记 if条件中不可以出现useState
    return (
        <div>
            <p> You checked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>check me ~</button>
        </div>
    )
}

export default UseSatetDemo