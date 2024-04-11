// search.js

function filterItems() {
    var filterValue = document.getElementById('filter').value;
    var searchValue = document.getElementById('search').value.toLowerCase(); // 获取搜索框的值并转换为小写
    var items = document.querySelectorAll('.item');
    var filteredCount = 0;
  
    items.forEach(function(item) {
      var itemName = item.textContent.toLowerCase(); // 获取每个项目的文本内容并转换为小写
      var displayItem = true;
  
      if (filterValue === 'all' || item.classList.contains(filterValue)) {
        // 检查过滤器是否为 "all" 或者项目具有所选类别
        if (searchValue.length > 0 && !itemName.includes(searchValue)) {
          // 如果搜索框不为空并且项目名称不包含搜索值，则隐藏项目
          displayItem = false;
        }
      } else {
        displayItem = false; // 如果项目不符合过滤器，则隐藏项目
      }
  
      if (displayItem) {
        item.style.display = 'block';
        filteredCount++;
      } else {
        item.style.display = 'none';
      }
    });
  
    document.getElementById('filteredCount').textContent = filteredCount;
  }
  
  window.onload = filterItems;
  document.getElementById('filter').addEventListener('change', filterItems);
  document.getElementById('search').addEventListener('input', filterItems); // 添加搜索框的 input 事件监听器
  