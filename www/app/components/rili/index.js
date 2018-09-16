import React from 'react';
import RiliMenu from './rili_menu'

export default class App extends React.Component{
    constructor(){
        super();
        this.state={
            year: new Date().getFullYear(),
            month: new Date().getMonth()+1,
            date: new Date().getDate(),
            isShowMenu: false
        }
    }
    setShowMenu(isShowMenu){
        this.setState({isShowMenu})
    }
    setYear(year) {
        this.setState({ year})
    }
    setMonth(month) {
        this.setState({ month })
    }
    setDate(date) {
        this.setState({ date })
    }
    render(){
        return <div className='rili'>
            <div className='inputBox'>
                {this.state.year}年{this.state.month}月{this.state.date}日
                <div className='icon' onClick={()=>{this.setShowMenu(!this.state.isShowMenu)}}>
                    <img src="imgs/rili.png"/>
                </div>
            </div>
            {
                this.state.isShowMenu 
                ? 
                    <RiliMenu 
                        year={this.state.year} 
                        month={this.state.month} 
                        date={this.state.date}
                        setYear={this.setYear.bind(this)} 
                        setMonth={this.setMonth.bind(this)} 
                        setDate={this.setDate.bind(this)}
                        setShowMenu={this.setShowMenu.bind(this)}
                    ></RiliMenu>
                :
                    null
            }
        </div>
    }
}