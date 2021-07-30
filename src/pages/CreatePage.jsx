import React, { useContext, useState } from 'react'
import { useCreateLink } from '../hooks/createLink.hook'
import {AuthContext} from '../context/AuthContext'
import { useHistory } from 'react-router-dom'

const CreatePage = ()=>{
    const create = useCreateLink()
    const [link, setLink] = useState(null)
    const auth = useContext(AuthContext)
    const history = useHistory()

    const changeLink = (event)=>{
        setLink(event.target.value)
    }

    const createLink = async(event)=>{
        event.preventDefault()
        const data = await create(link, auth)
        if(data.failed) return window.M.toast({html: data.failed})
        history.push(`/detail/${data.links.link._id}`)
    }
    
    return(
        <div>
            <form action="submit" className="link-form">
                <input onChange={changeLink} type="text" className="link-input" name="link" />
                <button onClick={createLink} className="waves-effect waves-light btn">save</button>
            </form>
        </div>
    )
}

export default CreatePage