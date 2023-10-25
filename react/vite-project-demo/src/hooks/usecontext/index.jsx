import { useContext, useEffect, useState } from "react"
import { headingData } from "./context"

const Component3 = ()=>{
    const data = useContext(headingData)
    
    return (
     <>
     <div>
        <h1>biodata</h1>
        <h1>Name:{data.name}</h1>
        <h1>age:{data.age}</h1>
        <h1>gender:{data.gender}</h1>
        <h1>Married:{data.ismaaried}</h1>
     </div>
        
     </>
    )
}

const Component2 = ()=>{
    const name = useContext(headingData)
    return (
        <>
        <Component3 />
        </>
        
    )
}

const Component1 = ()=>{
    
    return <Component2/>
}


export const Index = ()=>{
    let data = useContext(headingData);
    const [mydata,setMydata] = useState(data);

    function changeData(){
        setMydata({...mydata,name:"Akash"})
    }

    useEffect(()=>{
        
        // const name = mydata.name
        // console.log(name)
        console.log("hello world")
        return ()=>{
            console.log("clean up")
            // clean up function
        }
        
    },[mydata])
    return(
        <>
        <headingData.Provider value={mydata}>
        <Component1 />
        <button onClick={changeData}>change</button>
        </headingData.Provider>
        </>
    )
}