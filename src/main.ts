var testModule = {
   foo:function(){
      console.log(arguments)
   },
   bar:'bar'
}

export { testModule as default} 