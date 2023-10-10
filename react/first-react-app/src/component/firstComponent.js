// props == object
// key = value 
// props = {
//     btnValue:"submit"
// }

// object destructure
// const props = {
//     name:"mukesh",
//     age:25
// }
// console.log(props.age)
// const {age} = biodata

// console.log(age)

import { Heading } from "./heading"
import { MyDiv } from "./mydivison"
function InputfieldWithBtn({intType,btnValue,heading,message}){

    if(message){
        return <span>this is message</span>
    }
    
    return (
        <>
        {/* <input type="text"/> */}
        <MyDiv>
        <Heading headingData={heading}/>
        <input type={intType}/>
        <button>{btnValue}</button>
        {message && <span>{message}</span>}
        </MyDiv>
        </>
    )
}


export default InputfieldWithBtn