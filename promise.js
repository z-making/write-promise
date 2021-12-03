class promise2{
  //成功时
  succeed = null
  //失败时
  fail =null
  //状态  pending是newpromise时
  state = 'pending'

  resolve(resuit){
    //设置延时器是为了让代码先都执行完
    setTimeout(() => {
      //状态  fuifilled是完成时
     this.state = 'fuifilled'
     this.succeed = resuit 
    })
  }

  reject(reason){
    setTimeout(() => {
      //状态   rejected是错误时
      this.state = 'rejected'
      this.fail = reason
    })
  }
  //fn就是promise内部执行的函数
  constructor(fn){
    fn(this.succeed.bind(this),this.fail.bind(this))
  }
  
  //then的使用
  then(succeed,fail){
    this.succeed = succeed
    this.fail = fail
  }
}


