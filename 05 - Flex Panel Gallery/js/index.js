window.addEventListener("load", function () {
  const divs = document.querySelectorAll(".box div");
  divs.forEach((item) => {
    item.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });

  /* 
        暂时不用过渡事件，用过渡事件发现一个问题：
        css文件每次修改保存就会触发过渡事件，导致页面效果展示的是过渡完成后的样子
        后续会查阅资料，寻找解决方法
    */
  /*
   function toggleActive(e) {
    //输出发现有多个 transitionend 事件
    console.log(e.propertyName);
    //条件判断让它只触发一次
    if (e.propertyName.includes("flex")) {
      this.classList.toggle("active_move");
    }
  }

  divs.forEach((item) => item.addEventListener("transitionend", toggleActive)); 
  */
});
