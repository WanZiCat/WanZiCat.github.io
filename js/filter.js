function filterItems() {
  var filterValue = document.getElementById('filter').value;
  var items = document.querySelectorAll('.item');
  var filteredCount = 0;

items.forEach(function(item) {
if (filterValue === 'all') {
  item.style.display = 'block';
  filteredCount++;
} else if (filterValue === 'cattox') {
  if (item.classList.contains('cat') || item.classList.contains('both')) {
    item.style.display = 'block';
    filteredCount++;
  } else {
    item.style.display = 'none';
  }
} else if (filterValue === 'dogtox') {
  if (item.classList.contains('dog') || item.classList.contains('both')) {
    item.style.display = 'block';
    filteredCount++;
  } else {
    item.style.display = 'none';
  }
} else if (filterValue === 'tox') {
  if (item.classList.contains('dog') || item.classList.contains('cat') || item.classList.contains('both')) {
    item.style.display = 'block';
    filteredCount++;
  } else {
    item.style.display = 'none';
  }
}
else {
  if (item.classList.contains(filterValue)) {
    item.style.display = 'block';
    filteredCount++;
  } else {
    item.style.display = 'none';
  }
}
});
document.getElementById('filteredCount').textContent = filteredCount;
}
document.addEventListener('DOMContentLoaded', function() {
  filterItems();
});
document.getElementById('filter').addEventListener('change', filterItems);