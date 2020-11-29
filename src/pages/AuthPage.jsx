import React, { useState } from 'react'

const AuthPage = ()=>{
    const [form, setForm] = useState({email: "", password: ""})

    const changeForm = (event)=>{
        setForm({...form, [event.target.name]: event.target.value})
    }
    return(
        <div className="row">
            <div className="col s12 m4 offset-m4">
                <div className="card light-green darken-1">
                    <div className="card-content black-text lighten-5">
                        <h3 className="center auth">Authorization</h3>
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
                        <a className="waves-effect waves-light btn">Log In</a>
                        <a className="waves-effect waves-light grey btn">Registration</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthPage