import { useReducer } from "react"


const isState = {
    name: 'Sudipta',
    wish: ["eat","sleep","code"],
    class: 'VI'
}

const reduce = (state,action)=>{
    switch(action){
        case 'CHANGE NAME': 
        return {
            ...state,
            name: 'Dip',
        }
        case 'CHANGE':
        return {
            ...state,
            class: 'X'
        }
        default: return state
    }
}

let Change_Name = () =>{
    const [data,dispach] = useReducer(reduce,isState)
    return(
        <div>
            <h1>Change Name</h1>
            <h2>My Name is {data.name}</h2>
            <h2>I wish {data.wish[2]}</h2>
            <h2>Class {data.class}</h2>
            <br></br>
            <br></br>
            <br />
            <button onClick={()=>dispach('CHANGE NAME')}>Change Name</button>
            <button onClick={()=>dispach('CHANGE')}>Change Class</button>
        </div>
    )
}
export default Change_Name;
