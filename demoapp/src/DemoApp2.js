
//FUNCTION COMPONENT

import { useState } from "react"


const DemoApp2 = (props) => {


    //ReactHook giống xưa
    const [firstName , setFirstName] = useState("Theanh")
    const [lastName , setLastName ] = useState("Anh")

    //không thì gom và trong user
    const [user , setUser] = useState(
        {
            "firstName":"TheAnh",
            "lastName":"Tran"
        }
    )

    //

   const changeFn3 = () => {
        setUser(
            {
                ...user,
                "firstName":"TheAnhThaydoi"
            }
        )
    }
    const changeLn3 = () => {
        setLastName({
              ...user,
                "lastName":"TheAnhThaydoi"
        })
    }
    


    const changeFn2 = () => {
        setFirstName("Theanhthaydoi")
    }
    const changeLn2 = () => {
        setLastName("Anhthaydoi")
    }


    return (
        <>
        {/* <h1>WELCOME {props.firstName} {props.lastName} TO function Component</h1>
        <h2>Xin chào</h2>
        <ul>
            <li>{props.gender}</li>
            <li>{props.country}</li>
            <li>{props.location}</li>
            <li></li>
            <li></li>
        </ul> */}
        <h1>WELCOME {firstName} {lastName} TO function Component</h1>
        <input value="Thay doi first name" type="button" onClick={changeFn2}></input>
        <input value="Thay doi last name" type="button" onClick={changeLn2}></input>
        
        </>
    )
}
export default DemoApp2