// 获取容器元素
var container = document.getElementById("cards-container");

// 遍历植物信息数组，动态生成卡片并添加到容器中
for (var i = 0; i < plants.length; i++) {
  var plant = plants[i];

  // 创建卡片元素
  var cardContainer = document.createElement("div");
  
  // 根据条件设置类名
  if (plant.toxicityToCats === "有毒" && plant.toxicityToDogs === "无毒") {
    cardContainer.className = "item cat column is-4-desktop is-6-tablet px-5-desktop";
  } else if (plant.toxicityToCats === "无毒" && plant.toxicityToDogs === "有毒") {
    cardContainer.className = "item dog column is-4-desktop is-6-tablet px-5-desktop";
  } else if (plant.toxicityToCats === "无毒" && plant.toxicityToDogs === "无毒") {
    cardContainer.className = "item non column is-4-desktop is-6-tablet px-5-desktop";
  } else if (plant.toxicityToCats === "有毒" && plant.toxicityToDogs === "有毒") {
    cardContainer.className = "item both column is-4-desktop is-6-tablet px-5-desktop";
  }

  var card = document.createElement("div");
  card.className = "card";

  // 创建图片部分
  var cardImage = document.createElement("div");
  cardImage.className = "card-image";
  var figure = document.createElement("figure");
  figure.className = "image is-4by3";
  var img = document.createElement("img");
  img.src = plant.imageUrl;
  img.alt = plant.cnName;
  img.onerror = function() {
    this.src = "img/green.svg";
  };
  figure.appendChild(img);
  cardImage.appendChild(figure);

  // 创建内容部分
  var cardContent = document.createElement("div");
  cardContent.className = "card-content";
  var media = document.createElement("div");
  media.className = "media";
  var mediaContent = document.createElement("div");
  mediaContent.className = "media-content py-1";
  var title = document.createElement("p");
  title.className = "title is-4";
  title.textContent = plant.cnName;
  var subtitle = document.createElement("p");
  subtitle.className = "subtitle is-4 is-italic";
  subtitle.textContent = plant.sciName;
  mediaContent.appendChild(title);
  mediaContent.appendChild(subtitle);
  media.appendChild(mediaContent);
  cardContent.appendChild(media);

  // 创建页脚部分
  var footer = document.createElement("footer");
  footer.className = "card-footer";
  var catItem = document.createElement("p");
  catItem.className = "card-footer-item";
  var catSpan = document.createElement("span");
  catSpan.textContent = plant.toxicityToCats;
  catSpan.className = plant.toxicityToCats === "有毒" ? "has-text-danger" : "has-text-success";
  catItem.textContent = "对猫：";
  catItem.appendChild(catSpan);
  var dogItem = document.createElement("p");
  dogItem.className = "card-footer-item";
  var dogSpan = document.createElement("span");
  dogSpan.textContent = plant.toxicityToDogs;
  dogSpan.className = plant.toxicityToDogs === "有毒" ? "has-text-danger" : "has-text-success";
  dogItem.textContent = "对狗：";
  dogItem.appendChild(dogSpan);
  footer.appendChild(catItem);
  footer.appendChild(dogItem);

  // 将各部分组装成卡片
  card.appendChild(cardImage);
  card.appendChild(cardContent);
  card.appendChild(footer);

  // 将卡片添加到容器中
  cardContainer.appendChild(card);
  container.appendChild(cardContainer);
}