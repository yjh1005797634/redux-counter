/**
 * Created by apple on 18/9/5.
 */

const createStore = (reducer)=>{

    // 状态
    let state;

    //监听者对象数组
    let listeners = [];

    //获取状态值
    let getState = ()=> state;

    //发射任务
    let dispatch = (action)=> {


        console.log(action);
        state = reducer(state,action);

        listeners.forEach(listener => listener());
    }

    //执行发射任务
    dispatch();


    //订阅
    let subscribe = (listener)=>{

        //向监听者对象数组添加监听者
        listeners.push(listener);

        //返回一个 取消订阅的函数
        return () => {

            console.log(listener);
            listeners.filter(l => listener !== l);
        }
    }


    return {
        getState,
        dispatch,
        subscribe
    }

}

export {createStore}