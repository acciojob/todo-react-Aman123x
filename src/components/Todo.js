import React,{useState} from "react";

const Todo=()=>{

    const [todo,setTodo]=useState("");
    const [addtask,setAddTask]=useState([]);

    function ImplementaddTasks(e){
        e.preventDefault();
        setAddTask((pre)=>[...pre,todo]);
        setTodo("");
    }

    function deletebtn(index){
        const upDateTask=[...addtask];
        upDateTask.splice(index,1);
        setAddTask(upDateTask);
    }


    return (
        <div>
            <h1>To-Do List</h1>
            <form onSubmit={ImplementaddTasks}>
                <input type="text" onChange={(e)=>setTodo(e.target.value)} 
                    value={todo}
                />
                <button type="submit"  >Add Todo</button>
            </form>
            <ul>
                {
                    addtask.map((item,index)=>(
                        <div key={index}>
                            <li>
                                {item}{"    "} 
                                <button onClick={()=>deletebtn(index)}>Delete</button>
                            </li>
                            
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}


export default Todo;