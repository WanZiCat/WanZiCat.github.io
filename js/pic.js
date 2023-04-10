//window.addEventListener('resize', function() {
//    const divElement = document.getElementById('plant');
//    const divWidth = divElement.clientWidth;
//    const divHeight = divWidth * 0.75;
//    divElement.style.height = `${divHeight}px`;
//});
  

// 获取所有类名为box的元素
var boxes = document.getElementsByClassName('pic');

// 遍历每个box元素
for (var i = 0; i < boxes.length; i++) {
  // 获取当前元素的宽度
  var width = boxes[i].offsetWidth;

  // 设置当前元素的高度为宽度的75%
  boxes[i].style.height = width * 0.75 + 'px';
}
