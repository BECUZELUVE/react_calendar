import React from 'react';
import Rili from './components/rili/index.js'

export default class App extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div className='box'>
            <Rili></Rili>
        </div>
    }
}