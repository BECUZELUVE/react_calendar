import React from 'react';

export default class App extends React.Component{
    constructor(){
        super();

    }
    prevYear(){
        this.props.setYear(this.props.year-1)
    }
    nextYear(){
        this.props.setYear(this.props.year+1)
    }
    render(){
        const {year}=this.props;
        return <div className='pickYear'>
            <div className='left'>
                <a href="###" className='btn' onClick={()=>{this.prevYear()}}>上一年</a>
            </div>
            <div className="center">
               <a href="###">{year}</a>年
            </div>
            <div className='right'>
                <a href="###" className='btn' onClick={()=>{this.nextYear()}}>下一年</a>
           </div>
        </div>
    }
}