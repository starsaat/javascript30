window.addEventListener("load", function () {
  const hour = this.document.querySelector(".hour");
  const minuter = this.document.querySelector(".minuter");
  const second = this.document.querySelector(".second");

  function setTime() {
    //每次获取最新时间
    const date = new Date();
    //时针旋转角度设置
    hour.style.transform = `translateX(-50%)rotate(${
      date.getHours() * (360 / 12)
    }deg)`;
    //分针旋转角度设置
    minuter.style.transform = `translateX(-50%)rotate(${
      date.getMinutes() * (360 / 60)
    }deg)`;
    //秒针旋转角度设置
    second.style.transform = `translateX(-50%)rotate(${
      date.getSeconds() * (360 / 60)
    }deg)`;
  }
  //每一秒调用一次
  this.setInterval(setTime, 1000);
  //初次运行调用一次
  setTime();
});
