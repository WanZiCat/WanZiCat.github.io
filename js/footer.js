document.addEventListener("DOMContentLoaded", function() {
    // 创建一个XMLHttpRequest对象
    var xhr = new XMLHttpRequest();
    // 打开文件
    xhr.open('GET', 'paragraph/footer.html', true);
    // 处理加载完成后的操作
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // 将加载的内容插入到指定容器中
            document.getElementById('paragraphContainer-footer').innerHTML = xhr.responseText;
        }
    };
    // 发送请求
    xhr.send();
});