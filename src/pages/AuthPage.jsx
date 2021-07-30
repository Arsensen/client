import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHTTP } from '../hooks/http.hook'
import { useMessageErr } from '../hooks/message.hook'

const AuthPage = ()=>{
    const [form, setForm] = useState({email: "", password: ""})
    const { loading, request, error, clearErr } = useHTTP()
    const messErr = useMessageErr()
    const auth = useContext(AuthContext)
    
    useEffect(()=>{
        messErr(error)
        clearErr()
    }, [error, clearErr, messErr])

    const changeForm = (event)=>{
        setForm({...form, [event.target.name]: event.target.value})
    }

    const register = async ()=>{
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
        } catch (e) {
            console.log('AuthPage at register', e)
        }
    }

    const login = async ()=>{
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userID)
        } catch (e) {
            console.log('AuthPage at login', e)
        }
    }

    return(
        <div className="row">
            <div className="col s12 m4 offset-m4">
                <div className="card light-green darken-1">
                    <div className="card-content black-text lighten-5">
                        <h4 className="center auth">Authorization</h4>
                        <div className="row">
                            <div className="input-field col s12">
                                <input onChange={changeForm} id="email" name="email" type="email" className="validate white" placeholder="email" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input onChange={changeForm} id="password" name="password" type="password" className="validate white" placeholder="password" />
                            </div>
                        </div>
                        <button onClick={login} disabled={loading} className="waves-effect waves-light btn">Log In</button>
                        <button onClick={register} disabled={loading} className="waves-effect waves-light grey btn">Registration</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthPage