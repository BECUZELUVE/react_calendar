import React from 'react';
import classNames from 'classnames';

export default class App extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
        var This = this;
        $(this.refs.table).on('click','td',function(){
            var month = $(this).data('m');
            This.props.setMonth(month);
            This.props.setView('date');
        })
    }
    showTable(){
        var domArr=[];
        for(var i=1;i<7;i++){
            domArr.push(
                <tr key={i}>
                    <td></td>
                    <td data-m={i} className={classNames({'cur':this.props.month==i})}>{i}月</td>
                    <td data-m={i+6} className={classNames({'cur':this.props.month==i+6})}>{i+6}月</td>
                    <td></td>
                </tr>
            )
        }
        return domArr;
    }
    render(){
        return <div className='chooseMonth'>
            <table ref="table">
                 <tbody>
                    {this.showTable()}
                 </tbody>
             </table>
        </div>
    }
}