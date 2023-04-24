window.addEventListener("load", function () {
  //键盘事件触发 回调函数
  function playSound(e) {
    //获取对应键的音频标签
    const audio = this.document.querySelector(`audio[data-key="${e.code}"]`);
    //获取对应键的li标签
    const li = this.document.querySelector(`li[data-key="${e.code}"]`);
    //按键不在范围内 或 一直按键不松 返回
    if (!audio || e.repeat) return;
    //每次按键音频从0开始
    audio.currentTime = 0;
    //播放音频
    audio.play();
    //添加按键后的样式类名
    li.classList.add("playing");
  }
  //过渡结束事件触发 回调函数
  function removeTransition(e) {
    if (e.propertyName != "transform") return;
    //过渡结束移除类
    this.classList.remove("playing");
  }
  //为每个li标签添加过渡结束事件
  this.document
    .querySelectorAll("li")
    .forEach((item) =>
      item.addEventListener("transitionend", removeTransition)
    );
  //窗口监听键盘事件
  this.window.addEventListener("keydown", playSound);
});
