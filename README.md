
一、安装
   1.create-react-app react-redux
   2.cd react-redux
   3.git init 忽略 .idea
   4.git add .
   5.git commit -m ''
   6.git remote add origin  https:''
   7.git push -u origin master


二、引入bootstrap@3.3.7 版本

三、写redux.js
   1.导出 createStore
     let createStore = (reducer)=> {

         let state;

         let listeners:[];

         let dispatch = (action)=> {

            state = reducer(state,action);

            listeners.forEach( listener => listener())

         }

         dispatch()

         let subscribe = (listener)=> {

            listeners.push(listener);

            return {

               listeners.filte(l => listener !== l)
            }

         }


        return {

            getState,
            dispatch,
            subscribe
         }

     }


