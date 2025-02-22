import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './components/App'
import ImageView from './components/ImageView'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/image/:id" component={ImageView} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router