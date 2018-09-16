import React from 'react';
import solarLunar from 'solarLunar';
import classNames from 'classnames';

export default class App extends React.Component{
    constructor(){
        super();
    }
    componentWillUpdate({year,month,date,setDate}){
        if(new Date(year,month-1,date).getMonth()!=month-1){
            setDate(1)
        }
    }
    clickTd(d,isPrevMonth,isNextMonth){
        this.props.setDate(d);
        this.props.setShowMenu(false);
        if(isPrevMonth){
            var dd = new Date(this.props.year,this.props.month-2,d);
            this.props.setMonth(dd.getMonth()+1);
            this.props.setYear(dd.getFullYear());
        }else if (isNextMonth){
            var dd = new Date(this.props.year, this.props.month, d); 
            this.props.setMonth(dd.getMonth() + 1); 
            this.props.setYear(dd.getFullYear()); 
        }
    }
    showArr(){
        const {year,month,date}=this.props;
        var lastMonthRest = new Date(year,month-1,1).getDay();
        var thisMonthDays = new Date(year,month,0).getDate();
        var lastMonthDays = new Date(year,month-1,0).getDate();

        var arr=[];
        while(lastMonthRest--){
            const sl = solarLunar.solar2lunar(year, month-2, lastMonthDays);
            arr.unshift({
                "d":lastMonthDays--,
                "cd":sl.term||sl.dayCn,
                "gray":true,
                "cur":false,
                "prevMonth":true
            });
        }
        var count=1;
        while(thisMonthDays--){
            const sl = solarLunar.solar2lunar(year, month-1, count);
            arr.push({
                'd':count++,
                "cd":sl.term||sl.dayCn,
                "gray":false,
                "cur":date+1==count,
            })
        }
        var n=1;
        while(arr.length!=42){
            const sl = solarLunar.solar2lunar(year, month, n);
            arr.push({
                "d":n++,
                "cd":sl.term||sl.dayCn,
                "gray":true,
                "cur":false,
                "nextMonth":true
            });
        }
        
        var domArr=[];
        for(var i=0;i<arr.length;i++){
            domArr.push(
                <tr key={i}>
                    { 
                        arr.slice(i*7,(i+1)*7).map((item,index)=>{
                            return (
                            <td 
                                key={index}
                                className={classNames({'gray':item.gray,'cur':item.cur})}
                                onClick={()=>{this.clickTd(item.d,item.prevMonth,item.nextMonth)}}
                            >
                                <span>{item.d}</span>
                                <span className='cd'>{item.cd}</span>
                            </td>
                            )
                        })
                    }
                </tr>
            )  
        }
        return domArr;
    }
    render(){
        return <div className='chooseDate'>
                <table>
                    <thead>
                        <tr>
                            <th>日</th>
                            <th>一</th>
                            <th>二</th>
                            <th>三</th>
                            <th>四</th>
                            <th>五</th>
                            <th>六</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showArr()}
                    </tbody>
                </table>
            </div>
    }
}