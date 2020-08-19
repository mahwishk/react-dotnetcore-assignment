import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import AddEvent from './components/AddEvent';


export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={FetchData} />
                <Route path='/counter' component={Counter} />
                <Route path='/add-event' component={AddEvent} />
            </Layout>
        );
    }
}
