import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import DetailPage from './pages/DetailPage'
import CreatePage from './pages/CreatePage'
import LinksPage from './pages/LinksPage'

export const useRouter = (isAuth)=>{
    if(isAuth){
        return (
            <Switch>
                <Route exact path="/links">
                    <LinksPage></LinksPage>
                </Route>
                <Route exact path="/create">
                    <CreatePage></CreatePage>
                </Route>
                <Route path="/detail/:id">
                    <DetailPage></DetailPage>
                </Route>
                <Redirect to="/create" />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route exact path="/">
                <AuthPage></AuthPage>
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}