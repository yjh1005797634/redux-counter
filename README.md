

一、克隆
   1.mkdir  xxx
   2.git clone http
   3.cnpm install

二、重构项目
   1.经典之处  不再以render渲染方法 作为 监听者
     不再以render方法作为监听者  而是用 setState 数据的改变作为监听者

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


   2.而是将state 作为监听者


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


 二、整个redux程序思路
    1.导入 'react'   解构出{createStore}方法
    2.创建reducer处理器  现有reducer处理器 才有仓库 处理器有两个参数 (state action)
    3.将reducer 传入 createStore方法 返回一个store 仓库
    4.在将要挂载组件的时候 订阅 让数据变更成为监听者
    5.在卸载的时候 取消订阅
    6.触发 view 点击事件 onkeydown事件的时候 根据逻辑 发送 dispatch方法

三、程序运行思路
   1.创建reducer 处理业务逻辑
   2.将reducer传入 createStore 传入的时候 第一次的state值是空的 会第一次触发dispatch(action)
   3.程序最开始渲染view  没有任何action

   4.程序触发view事件  触发dispatch(action) 并传入 描述事件行为
   5.在dispatch(action) 方法 内部  传入旧的state action  返回新的state
          //发射任务
          let dispatch = (action)=> {

              alert('action')
              console.log(action);
              state = reducer(state,action);

              listeners.forEach(listener => listener());
          }

    6.返回新的state 当state值改变后  在程序将要挂载的时候 将state状态值作为监听者
        componentWillMount(){

              store.subscribe(()=>{
                  this.setState({
                      list:store.getState().list
                  })
              })
          }
    7.最后 在root 上渲染出来













