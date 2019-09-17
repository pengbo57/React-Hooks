import React, { useState , createContext , useContext} from 'react';


let CountContext = createContext();//创建useContext，用于父子组件传递数据
function Children (){
    let [count , phone] = useContext(CountContext)
    //直接在CountContext.Providor 解构出自己想要的,通过value传的的值
    return (
        <h2>
            {`总计：${count*phone}`}
        </h2>
    )
}

function UseContext (){
    const [ count , setCount ]= useState(0)
    const [phone] = useState(999)
    return (
        <div>
            <h1>A phone prise is $ {phone}</h1>
            <button onClick={()=>{setCount(count+1)}}>+add</button>
            <button onClick={()=>{setCount(count-1)}}>-delete</button>
            <CountContext.Provider value = {[count,phone]}> 
                <Children/>
            </CountContext.Provider>
        </div>
    )
}

export default UseContext