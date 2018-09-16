import React from 'react';
import PickDate from './pickDate'
import PickYear from './pickYear'
import PickMonth from './pickMonth'
import ChooseDate from './chooseDate'
import ChooseMonth from './chooseMonth'
import ChooseYear from './chooseYear'

export default class App extends React.Component{
    constructor(){
        super();
        this.state={
            view:'date'
        }
    }
    setView(view){
        this.setState({view})
    }
    render(){
        const {year,month,date,setYear,setMonth,setDate,setShowMenu} = this.props;
        const Picker=()=>{
            if(this.state.view=='date'){
                return <PickDate year={year} month={month} date={date} setYear={setYear} setMonth={setMonth} setDate={setDate} setView={this.setView.bind(this)}></PickDate>
            }else if(this.state.view=='year'){
                return <PickYear year={year} setYear={setYear}></PickYear>
            }else if(this.state.view=='month'){
                return <PickMonth month={month} setMonth={setMonth} year={year} setYear={setYear}></PickMonth>
            }
        }
        const Chooser=()=>{
            if(this.state.view=='date'){
                return <ChooseDate year={year} month={month} date={date} setYear={setYear} setMonth={setMonth} setDate={setDate} setShowMenu={setShowMenu}></ChooseDate>                
            }else if(this.state.view=='year'){
                return <ChooseYear year={year} setYear={setYear} setView={this.setView.bind(this)}></ChooseYear>
            }else if(this.state.view=='month'){
                return <ChooseMonth month={month} setMonth={setMonth} setView={this.setView.bind(this)}></ChooseMonth>
            }
        }
        return <div className='riliMenu'>
          {Picker()}
          {Chooser()}
        </div>
    }
}