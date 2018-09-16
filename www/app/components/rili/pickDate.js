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
    toToday(){
        var date = new Date().getDate();
        var year = new Date().getFullYear();
        var month = new Date().getMonth()+1;
        this.props.setMonth(month);
        this.props.setYear(year);
        this.props.setDate(date);
    }
    render(){
        const {year,month,setView}=this.props;
        return <div className='pickDate'>
            <div className='left'>
                <a href="###" className='btn' onClick={()=>{this.prevMonth()}}>上一月</a>
            </div>
            <div className="center">
                <a href="###" onClick={()=>{setView('year')}}>{year}</a>年
                <a href="###" onClick={()=>{setView('month')}}>{month}</a>月
            </div>
            <div className='right'>
                <a href="###" className='btn' onClick={()=>{this.nextMonth()}}>下一月</a>
           </div>
           <div className="today">
                <a href="###" className='btn'onClick={()=>{this.toToday()}}>回到今天</a>
           </div>
        </div>
    }
}