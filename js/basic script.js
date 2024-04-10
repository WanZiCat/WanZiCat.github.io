// 获取所有关闭图标元素
var closeIcons = document.querySelectorAll(".delete");
		
// 添加点击事件监听器到每个关闭图标
closeIcons.forEach(function(icon) {
    icon.addEventListener("click", function() {
        // 获取要关闭的窗口或者元素（即点击图标的父元素）
        var windowToClose = icon.parentElement;
        // 关闭窗口或者元素
        windowToClose.style.display = "none";
    });
});

<script src="https://kit.fontawesome.com/956b802913.js" crossorigin="anonymous"></script>