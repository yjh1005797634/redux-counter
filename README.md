

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