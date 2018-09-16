import React from 'react';
import classNames from 'classnames';

export default class App extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
        var This = this;
        $(this.refs.table).on('click','td',function(){
            var year = $(this).html();
            This.props.setYear(year);
            This.props.setView('date')
        })
    }
    showTable(){
        var domArr=[];
        var baseYear = this.props.year-this.props.year%10;
        for(var i=0;i<10;i++){
            domArr.push(
                <tr key={i}>
                    <td>{baseYear+i-10}</td>
                    <td className={classNames({'cur':baseYear+i==this.props.year})}
                    >{baseYear+i}</td>
                    <td>{baseYear+i+10}</td>
                </tr>
            )
        }
        return domArr;
    }
    render(){
        return <div className='chooseYear'>
        <table ref='table'>
            <tbody>
                {this.showTable()}
            </tbody>
        </table>
        </div>
    }
}