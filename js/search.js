function filterItems() {
  var filterValue = document.getElementById('filter').value;
  var searchValue = document.getElementById('search').value.toLowerCase();
  var items = document.querySelectorAll('.item');
  var filteredCount = 0;

  items.forEach(function(item) {
    var itemName = item.textContent.toLowerCase();
    var displayItem = true;

    if (filterValue === 'all' || item.classList.contains(filterValue)) {
      // 检查过滤器是否为 "all" 或者项目具有所选类别
      if (searchValue.length > 0 && !itemName.includes(searchValue)) {
        // 如果搜索框不为空并且项目名称不包含搜索值，则隐藏项目
        displayItem = false;
      }
    } else if (
      (filterValue === 'cattox' && (item.classList.contains('cat') || item.classList.contains('both'))) ||
      (filterValue === 'dogtox' && (item.classList.contains('dog') || item.classList.contains('both'))) ||
      (filterValue === 'tox' && (item.classList.contains('dog') || item.classList.contains('cat') || item.classList.contains('both')))
    ) {
      // 如果过滤器为 'cattox', 'dogtox', 或 'tox'，并且项目包含 'cat', 'dog', 或 'both' 类，则显示项目
      if (searchValue.length > 0 && !itemName.includes(searchValue)) {
        // 如果搜索框不为空并且项目名称不包含搜索值，则隐藏项目
        displayItem = false;
      }
    } else {
      displayItem = false;
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
document.getElementById('search').addEventListener('input', filterItems);
