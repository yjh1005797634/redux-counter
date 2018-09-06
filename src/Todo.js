/**
 * Created by apple on 18/9/6.
 */
import {createStore} from './redux'
import React,{Component} from 'react';

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

export default class Todo extends Component {

    constructor(props){
        super(props);
        //初始值
        this.state = {
            list: store.getState().list
        }
    }


    componentWillMount(){

      this.unSubscribe = store.subscribe(()=>{
            this.setState({
                list:store.getState().list
            })
        })
    }

    // componentWillUnmount(){
    //
    //     this.unSubscribe;
    // }

    addTodo = (event)=>{


        //获取键盘值
        let code = event.keyCode;
        let text = event.target.value;

        //如果点击的是enter 则将获取的值放到this.todeList
        if(code === 13 && text.length >0){


            store.dispatch({
                type:ADD_TODO,
                text:text
            })

            event.target.value = '';
        }

    }



    deleteTodo = (index)=> {

        store.dispatch({
            type:DELETE_TODO,
            index:index
        })
    }
    
    render(){
        
        return (
            <div>
                <input type="text" onKeyUp={this.addTodo} autoFocus/>
                <ul>
                    {
                        this.state.list.map((todo,index)=>(

                            <li key={index}>{todo} <button onClick={()=>this.deleteTodo(index)}>删除</button></li>
                        ))
                    }
                </ul>
            </div>
        )
    }

}

let reducer = (state={list:[]},action)=>{

    if(action === undefined) return state;
    switch (action.type) {

        case ADD_TODO :
            // alert("增加")
            console.log(state.list);
            // console.log(action);
            return {list: [...state.list, action.text]}
        case DELETE_TODO :

            let list = state.list;
            list.splice(action.index,1);
            return {list: [...list]}
        default:
            return state;
    }

}

//创建仓库
let store = createStore(reducer);
