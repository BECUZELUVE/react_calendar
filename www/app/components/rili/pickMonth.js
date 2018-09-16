import React from 'react';

export default class App extends React.Component{
    constructor(){
        super();
    }
    prevMonth(){
        if(this.props.month!=1){
            this.props.setMonth(this.props.month-1);
        }else{
            this.props.setMonth(12);
            this.props.setYear(this.props.year-1)
        }  
    }
    nextMonth(){
        if(this.props.month!=12){
            this.props.setMonth(this.props.month+1);
        }else{
            this.props.setMonth(1);
            this.props.setYear(this.props.year+1)
        }
    }
    render(){
        const {month}=this.props;
        return <div className='pickYear'>
            <div className='left'>
                <a href="###" className='btn' onClick={()=>{this.prevMonth()}}>上一月</a>
            </div>
            <div className="center">
                <a href="###" onClick={()=>{setView('month')}}>{month}</a>月
            </div>
            <div className='right'>
                <a href="###" className='btn' onClick={()=>{this.nextMonth()}}>下一月</a>
            </div>
        </div>
    }
}