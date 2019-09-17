import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom'


function UseEffect (){
    const [ count , setCount ]= useState(0)
    useEffect(()=>{
        console.log(`you check ${count} times`)
        return ()=>{
            console.log('checked is not to be allow')
        }
    },[count])
    return (
        <div>
            <Router>
            <p> You checked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>check me ~</button>
            <ul>
                <li><Link to='/'>假象</Link></li>
                <li><Link to='/list'>实际</Link></li>
            </ul>
            
                <Route path='/' exact component={Index}/>
                <Route path='/list' exact component={List}/>
            </Router>
        </div>
    )
}

function Index(){
    useEffect(()=>{
        console.log(`welcome Index page`)
        return ()=>{
            console.log('bye ,Index page')
        }
    },[])
    return (
        <h2>you are not fat</h2>
    )
}

function List(){
    useEffect(()=>{
        console.log(`welcome List page`)
        return ()=>{
            console.log('bye , List page')
        }
    },[])
    return (
        <h2>Thank you</h2>
    )
}

export default UseEffect