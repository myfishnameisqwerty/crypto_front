import React, {useRef} from 'react'
import axios from "axios"
import { useHistory } from "react-router-dom";
export default function Login() {
    const loginRef = useRef(null)
    const passRef = useRef(null)
    let history = useHistory();
    return (
        <div>
            <label htmlFor="login">login</label>
            <input type="text" ref={loginRef} name="login"/>
            <label htmlFor="pass">Password</label>
            <input type="password" ref={passRef} name="pass"/>
            <button onClick={()=>{
                const userData = {
                    userName: loginRef.current.value, 
                    pass: passRef.current.value
                }
                axios.post('/users', userData).then(status => {
                    if (!status.data.error){

                        localStorage.setItem("token", status.data.data)
                        history.push("/home")
                    }
                })
                
            }}>Submit</button>
        </div>
    )
}
