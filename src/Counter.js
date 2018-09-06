/**
 * Created by apple on 18/9/5.
 */
import React,{Component} from 'react';
// import ReactDOM from 'react-dom';
// import {createStore} from './redux'
import {createStore} from '../node_modules/redux';
import 'bootstrap/dist/css/bootstrap.css';



const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

export default class Counter extends Component {

    constructor(){
        super();

        this.state = {num:store.getState().num}
    }

    /* 将要挂载的时候 改变数据状态*/
    componentWillMount(){

       this.unsubscribe =  store.subscribe(()=>{
           this.setState({
               num:store.getState().num
           })
       })
    }


    /* 组件卸载的时候 取消监听*/
    componentWillUnMount(){

       this.unsubscribe();

    }



    render(){

        return (
            <div>
                {/*<p>{store.getState().num}</p>*/}
                <p>{this.state.num}</p>
                <button className="btn btn-primary" onClick={()=> {store.dispatch({type:INCREASE,amount:3})}}>+</button>
                <button className="btn btn-primary" onClick={()=> {store.dispatch({type:DECREASE,amount:2})}}>-</button>

            </div>
        )
    }
}


let reducer = (state={num:2},action)=>{

    if(action === undefined) return state;

    switch (action.type){

        case INCREASE:
            return {num:state.num + action.amount}

        case DECREASE:
            return {num:state.num - action.amount}

        default:
             return state;
    }
}


//创建一个仓库
let store = createStore(reducer);


// let render = ()=>{
//     ReactDOM.render(<Counter/>,document.querySelector('#root'));
// }
//
// render();
//
// //订阅
// store.subscribe(render);
//
//
// //取消订阅
// let unsubscribe = store.subscribe(render);
//
// // console.log(unsubscribe);
//
// setTimeout(function (){
//
//     alert('zhixg')
//     unsubscribe();
// },2000);



