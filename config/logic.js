// 这个文件是脚本文件，用于实现网页的逻辑功能

// 定义一些常量，用于计算吐司面包的配方
const WATER_RATE = 0.6; // 面团的含水量，即水的重量除以面粉的重量
const SALT_RATE = 0.02; // 面团的盐含量，即盐的重量除以面粉的重量
const SUGAR_RATE = 0.05; // 面团的糖含量，即糖的重量除以面粉的重量
const OIL_RATE = 0.05; // 面团的油含量，即油的重量除以面粉的重量
const YEAST_RATE = 0.01; // 面团的酵母含量，即酵母的重量除以面粉的重量
const MIN_FLOUR = 100; // 最小的面粉用量，单位为克
const MAX_FLOUR = 1000; // 最大的面粉用量，单位为克
const MIN_SALT = 1; // 最小的盐用量，单位为克
const MAX_SALT = 20; // 最大的盐用量，单位为克
const MIN_SUGAR = 1; // 最小的糖用量，单位为克
const MAX_SUGAR = 50; // 最大的糖用量，单位为克
const MIN_OIL = 1; // 最小的油用量，单位为克
const MAX_OIL = 50; // 最大的油用量，单位为克
const MIN_YEAST = 1; // 最小的酵母用量，单位为克
const MAX_YEAST = 10; // 最大的酵母用量，单位为克
const MIN_WATER = 60; // 最小的水用量，单位为毫升
const MAX_WATER = 600; // 最大的水用量，单位为毫升
const MIN_WEIGHT = 200; // 最小的吐司面包重量，单位为克
const MAX_WEIGHT = 1000; // 最大的吐司面包重量，单位为克
const MIN_SOFTNESS = 0.5; // 最小的吐司面包宣软度，即水的重量除以面粉的重量
const MAX_SOFTNESS = 0.8; // 最大的吐司面包宣软度，即水的重量除以面粉的重量
const MIN_SWEETNESS = 0.02; // 最小的吐司面包甜度，即糖的重量除以面粉的重量
const MAX_SWEETNESS = 0.1; // 最大的吐司面包甜度，即糖的重量除以面粉的重量
const MIN_SALTINESS = 0.01; // 最小的吐司面包咸度，即盐的重量除以面粉的重量
const MAX_SALTINESS = 0.03; // 最大的吐司面包咸度，即盐的重量除以面粉的重量
const MIN_OILINESS = 0.02; // 最小的吐司面包油脂度，即油的重量除以面粉的重量
const MAX_OILINESS = 0.1; // 最大的吐司面包油脂度，即油的重量除以面粉的重量
const MIN_YEASTINESS = 0.005; // 最小的吐司面包发酵度，即酵母的重量除以面粉的重量
const MAX_YEASTINESS = 0.02; // 最大的吐司面包发酵度，即酵母的重量除以面粉的重量

// 定义一个对象，用于存储吐司面包的配方
let toastRecipe = {
  flour: 0, // 面粉的重量，单位为克
  water: 0, // 水的重量，单位为克
  salt: 0, // 盐的重量，单位为克
  sugar: 0, // 糖的重量，单位为克
  oil: 0, // 油的重量，单位为克
  yeast: 0, // 酵母的重量，单位为克
  weight: 0, // 吐司面包的重量，单位为克
  softness: 0, // 吐司面包的宣软度，即水的重量除以面粉的重量
  sweetness: 0, // 吐司面包的甜度，即糖的重量除以面粉的重量
  saltiness: 0, // 吐司面包的咸度，即盐的重量除以面粉的重量
  oiliness: 0, // 吐司面包的油脂度，即油的重量除以面粉的重量
  yeastiness: 0, // 吐司面包的发酵度，即酵母的重量除以面粉的重量
};

// 定义一个函数，用于计算吐司面包的配方
function calculateToastRecipe() {
  // 获取用户输入的吐司面包的重量
  let weightInput = document.getElementById("weight");
  let weight = Number(weightInput.value);

  // 检查用户输入的吐司面包的重量是否合法
  if (isNaN(weight) || weight < MIN_WEIGHT || weight > MAX_WEIGHT) {
    // 如果不合法，提示用户重新输入，并返回
    alert("请输入合法的吐司面包重量，范围为" + MIN_WEIGHT + "克到" + MAX_WEIGHT + "克");
    return;
  }

  // 获取用户选择的吐司面包的宣软度
  let softnessSelect = document.getElementById("softness");
  let softness = Number(softnessSelect.value);

  // 获取用户选择的吐司面包的甜度
  let sweetnessSelect = document.getElementById("sweetness");
  let sweetness = Number(sweetnessSelect.value);

  // 获取用户选择的吐司面包的咸度
  let saltinessSelect = document.getElementById("saltiness");
  let saltiness = Number(saltinessSelect.value);

  // 获取用户选择的吐司面包的油脂度
  let oilinessSelect = document.getElementById("oiliness");
  let oiliness = Number(oilinessSelect.value);

  // 获取用户选择的吐司面包的发酵度
  let yeastinessSelect = document.getElementById("yeastiness");
  let yeastiness = Number(yeastinessSelect.value);

  // 根据用户的选择，计算吐司面包的配方
    toastRecipe.weight = weight; // 吐司面包的重量等于用户输入的重量
  toastRecipe.flour = Math.round(weight / (1 + softness + sweetness + saltiness + oiliness + yeastiness)); // 面粉的重量等于吐司面包的重量除以各种成分的比例之和
  toastRecipe.water = Math.round(toastRecipe.flour * softness); // 水的重量等于面粉的重量乘以宣软度
  toastRecipe.sugar = Math.round(toastRecipe.flour * sweetness); // 糖的重量等于面粉的重量乘以甜度
  toastRecipe.salt = Math.round(toastRecipe.flour * saltiness); // 盐的重量等于面粉的重量乘以咸度
  toastRecipe.oil = Math.round(toastRecipe.flour * oiliness); // 油的重量等于面粉的重量乘以油脂度
  toastRecipe.yeast = Math.round(toastRecipe.flour * yeastiness); // 酵母的重量等于面粉的重量乘以发酵度
  toastRecipe.softness = softness; // 吐司面包的宣软度等于用户选择的宣软度
  toastRecipe.sweetness = sweetness; // 吐司面包的甜度等于用户选择的甜度
  toastRecipe.saltiness = saltiness; // 吐司面包的咸度等于用户选择的咸度
  toastRecipe.oiliness = oiliness; // 吐司面包的油脂度等于用户选择的油脂度
  toastRecipe.yeastiness = yeastiness; // 吐司面包的发酵度等于用户选择的发酵度

  // 调用一个函数，用于显示吐司面包的配方
  showToastRecipe();
}

// 定义一个函数，用于显示吐司面包的配方
function showToastRecipe() {
  // 获取结果区域的元素
  let resultDiv = document.getElementById("result");

  // 清空结果区域的内容
  resultDiv.innerHTML = "";

  // 创建一个表格元素，用于展示吐司面包的配方
  let table = document.createElement("table");

  // 创建一个表头行，用于展示各种材料的名称
  let thead = document.createElement("tr");

  // 创建一个表头单元格，用于展示“材料”这个标题
  let th1 = document.createElement("th");
  th1.innerText = "材料";

  // 创建一个表头单元格，用于展示“用量（克）”这个标题
  let th2 = document.createElement("th");
  th2.innerText = "用量（克）";

  // 创建一个表头单元格，用于展示“百分比（%）”这个标题
  let th3 = document.createElement("th");
  th3.innerText = "百分比（%）";

  // 将三个表头单元格添加到表头行中
  thead.appendChild(th1);
  thead.appendChild(th2);
  thead.appendChild(th3);

  // 将表头行添加到表格中
  table.appendChild(thead);

  // 创建一个表格体，用于展示各种材料的用量和百分比
  let tbody = document.createElement("tbody");

  // 创建一个表格行，用于展示面粉的用量和百分比
  let tr1 = document.createElement("tr");

  // 创建一个表格单元格，用于展示“面粉”这个名称
  let td1 = document.createElement("td");
  td1.innerText = "面粉";

  // 创建一个表格单元格，用于展示面粉的用量
  let td2 = document.createElement("td");
  td2.innerText = toastRecipe.flour;

  // 创建一个表格单元格，用于展示面粉的百分比
  let td3 = document.createElement("td");
  td3.innerText = (toastRecipe.flour / toastRecipe.weight * 100).toFixed(2);

  // 将三个表格单元格添加到表格行中
  tr1.appendChild(td1);
  tr1.appendChild(td2);
  tr1.appendChild(td3);

  // 将表格行添加到表格体中
  tbody.appendChild(tr1);

  // 创建一个表格行，用于展示水的用量和百分比
  let tr2 = document.createElement("tr");

  // 创建一个表格单元格，用于展示“水”这个名称
  let td4 = document.createElement("td");
  td4.innerText = "水";

  // 创建一个表格单元格，用于展示水的用量
  let td5 = document.createElement("td");
  td5.innerText = toastRecipe.water;

  // 创建一个表格单元格，用于展示水的百分比
  let td6 = document.createElement("td");
  td6.innerText = (toastRecipe.water / toastRecipe.weight * 100).toFixed(2);

  // 将三个表格单元格添加到表格行中
  tr2.appendChild(td4);
  tr2.appendChild(td5);
  tr2.appendChild(td6);

  // 将表格行添加到表格体中
  tbody.appendChild(tr2);

  // 创建一个表格行，用于展示盐的用量和百分比
  let tr3 = document.createElement("tr");

  // 创建一个表格单元格，用于展示“盐”这个名称
  let td7 = document.createElement("td");
  td7.innerText = "盐";

  // 创建一个表格单元格，用于展示盐的用量
  let td8 = document.createElement("td");
  td8.innerText = toastRecipe.salt;

  // 创建一个表格单元格，用于展示盐的百分比
  let td9 = document.createElement("td");
  td9.innerText = (toastRecipe.salt / toastRecipe.weight * 100).toFixed(2);

  // 将三个表格单元格添加到表格行中
  tr3.appendChild(td7);
  tr3.appendChild(td8);
  tr3.appendChild(td9);

  // 将表格行添加到表格体中
  tbody.appendChild(tr3);

  // 创建一个表格行，用于展示糖的用量和百分比
  let tr4 = document.createElement("tr");

  // 创建一个表格单元格，用于展示“糖”这个名称
  let td10 = document.createElement("td");
  td10.innerText = "糖";

  // 创建一个表格单元格，用于展示糖的用量
  let td11 = document.createElement("td");
  td11.innerText = toastRecipe.sugar;

  // 创建一个表格单元格，用于展示糖的百分比
  let td12 = document.createElement("td");
  td12.innerText = (toastRecipe.sugar / toastRecipe.weight * 100).toFixed(2);

  // 将三个表格单元格添加到表格行中
  tr4.appendChild(td10);
  tr4.appendChild(td11);
  tr4.appendChild(td12);

  // 将表格行添加到表格体中
  tbody.appendChild(tr4);

  // 创建一个表格行，用于展示油的用量和百分比
  let tr5 = document.createElement("tr");

  // 创建一个表格单元格，用于展示“油”这个名称
  let td13 = document.createElement("td");
  td13.innerText = "油";

  // 创建一个表格单元格，用于展示油的用量
  let td14 = document.createElement("td");
  td14.innerText = toastRecipe.oil;

  // 创建一个表格单元格，用于展示油的百分比
  let td15 = document.createElement("td");
  td15.innerText = (toastRecipe.oil / toastRecipe.weight * 100).toFixed(2);

    // 将三个表格单元格添加到表格行中
  tr5.appendChild(td13);
  tr5.appendChild(td14);
  tr5.appendChild(td15);

  // 将表格行添加到表格体中
  tbody.appendChild(tr5);

  // 创建一个表格行，用于展示酵母的用量和百分比
  let tr6 = document.createElement("tr");

  // 创建一个表格单元格，用于展示“酵母”这个名称
  let td16 = document.createElement("td");
  td16.innerText = "酵母";

  // 创建一个表格单元格，用于展示酵母的用量
  let td17 = document.createElement("td");
  td17.innerText = toastRecipe.yeast;

  // 创建一个表格单元格，用于展示酵母的百分比
  let td18 = document.createElement("td");
  td18.innerText = (toastRecipe.yeast / toastRecipe.weight * 100).toFixed(2);

  // 将三个表格单元格添加到表格行中
  tr6.appendChild(td16);
  tr6.appendChild(td17);
  tr6.appendChild(td18);

  // 将表格行添加到表格体中
  tbody.appendChild(tr6);

  // 将表格体添加到表格中
  table.appendChild(tbody);

  // 将表格添加到结果区域中
  resultDiv.appendChild(table);

  // 创建一个提醒元素，用于展示吐司面包的配方是否有问题
  let alert = document.createElement("p");
  alert.className = "alert";

  // 定义一个变量，用于存储提醒的内容
  let alertText = "";

  // 检查吐司面包的配方是否有缺乏必要成分或超过上限的情况
  if (toastRecipe.flour < MIN_FLOUR || toastRecipe.flour > MAX_FLOUR) {
    // 如果面粉的用量不在合理范围内，添加相应的提醒
    alertText += "面粉的用量应该在" + MIN_FLOUR + "克到" + MAX_FLOUR + "克之间。\n";
  }
  if (toastRecipe.water < MIN_WATER || toastRecipe.water > MAX_WATER) {
    // 如果水的用量不在合理范围内，添加相应的提醒
    alertText += "水的用量应该在" + MIN_WATER + "毫升到" + MAX_WATER + "毫升之间。\n";
  }
  if (toastRecipe.salt < MIN_SALT || toastRecipe.salt > MAX_SALT) {
    // 如果盐的用量不在合理范围内，添加相应的提醒
    alertText += "盐的用量应该在" + MIN_SALT + "克到" + MAX_SALT + "克之间。\n";
  }
  if (toastRecipe.sugar < MIN_SUGAR || toastRecipe.sugar > MAX_SUGAR) {
    // 如果糖的用量不在合理范围内，添加相应的提醒
    alertText += "糖的用量应该在" + MIN_SUGAR + "克到" + MAX_SUGAR + "克之间。\n";
  }
  if (toastRecipe.oil < MIN_OIL || toastRecipe.oil > MAX_OIL) {
    // 如果油的用量不在合理范围内，添加相应的提醒
    alertText += "油的用量应该在" + MIN_OIL + "克到" + MAX_OIL + "克之间。\n";
  }
  if (toastRecipe.yeast < MIN_YEAST || toastRecipe.yeast > MAX_YEAST) {
    // 如果酵母的用量不在合理范围内，添加相应的提醒
    alertText += "酵母的用量应该在" + MIN_YEAST + "克到" + MAX_YEAST + "克之间。\n";
  }

  // 如果提醒的内容不为空，说明有问题，将提醒的内容设置为提醒元素的文本，并将提醒元素添加到结果区域中
  if (alertText !== "") {
    alert.innerText = alertText;
    resultDiv.appendChild(alert);
  }
}

// 定义一个函数，用于检查用户输入的吐司面包的重量是否合法
function checkWeightInput() {
  // 获取用户输入的吐司面包的重量
  let weightInput = document.getElementById("weight");
  let weight = Number(weightInput.value);

  // 检查用户输入的吐司面包的重量是否合法
  if (isNaN(weight) || weight < MIN_WEIGHT || weight > MAX_WEIGHT) {
    // 如果不合法，提示用户重新输入，并返回
    alert("请输入合法的吐司面包重量，范围为" + MIN_WEIGHT + "克到" + MAX_WEIGHT + "克");
    return;
  }
}

// 定义一个函数，用于获取用户选择的吐司面包的宣软度
function getSoftness() {
  // 获取用户选择的吐司面包的宣软度
  let softnessSelect = document.getElementById("softness");
  let softness = Number(softnessSelect.value);

  // 返回用户选择的吐司面包的宣软度
  return softness;
}

// 定义一个函数，用于获取用户选择的吐司面包的甜度
function getSweetness() {
  // 获取用户选择的吐司面包的甜度
  let sweetnessSelect = document.getElementById("sweetness");
  let sweetness = Number(sweetnessSelect.value);

  // 返回用户选择的吐司面包的甜度
  return sweetness;
}

// 定义一个函数，用于获取用户选择的吐司面包的咸度
function getSaltiness() {
  // 获取用户选择的吐司面包的咸度
  let saltinessSelect = document.getElementById("saltiness");
  let saltiness = Number(saltinessSelect.value);

    // 返回用户选择的吐司面包的咸度
  return saltiness;
}

// 定义一个函数，用于获取用户选择的吐司面包的油脂度
function getOiliness() {
  // 获取用户选择的吐司面包的油脂度
  let oilinessSelect = document.getElementById("oiliness");
  let oiliness = Number(oilinessSelect.value);

  // 返回用户选择的吐司面包的油脂度
  return oiliness;
}

// 定义一个函数，用于获取用户选择的吐司面包的发酵度
function getYeastiness() {
  // 获取用户选择的吐司面包的发酵度
  let yeastinessSelect = document.getElementById("yeastiness");
  let yeastiness = Number(yeastinessSelect.value);

  // 返回用户选择的吐司面包的发酵度
  return yeastiness;
}

// 定义一个函数，用于生成一个随机的吐司面包的名称
function generateToastName() {
  // 定义一个数组，用于存储吐司面包的形容词
  let adjectives = ["香甜", "松软", "酥脆", "绵密", "奶香", "咸甜", "酸甜", "香辣", "芝士", "巧克力", "水果", "坚果", "南瓜", "胡萝卜", "香蕉", "芒果", "苹果", "蜂蜜", "芥末", "酸梅"];

  // 定义一个数组，用于存储吐司面包的名词
  let nouns = ["吐司", "面包", "蛋糕", "派", "饼干", "饼", "松饼", "薄饼", "华夫饼", "布朗尼", "曲奇", "泡芙", "马卡龙", "奶油卷", "面包圈", "甜甜圈", "月饼", "酥皮", "蛋挞", "奶黄包"];

  // 随机从形容词数组中选择一个元素
  let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];

  // 随机从名词数组中选择一个元素
  let noun = nouns[Math.floor(Math.random() * nouns.length)];

  // 将形容词和名词拼接起来，作为吐司面包的名称
  let name = adjective + noun;

  // 返回吐司面包的名称
  return name;
}

// 定义一个函数，用于生成一个随机的吐司面包的介绍
function generateToastIntro() {
  // 定义一个数组，用于存储吐司面包的介绍的开头
  let intros = ["这是一款", "这是一种", "这是一道", "这是一份", "这是一件", "这是一样"];

  // 随机从介绍数组中选择一个元素
  let intro = intros[Math.floor(Math.random() * intros.length)];

  // 调用一个函数，用于生成一个随机的吐司面包的名称
  let name = generateToastName();

  // 将介绍和名称拼接起来，作为吐司面包的介绍的开头
  let sentence = intro + name;

  // 返回吐司面包的介绍的开头
  return sentence;
}

// 定义一个函数，用于生成一个随机的吐司面包的特点
function generateToastFeature() {
  // 定义一个数组，用于存储吐司面包的特点的形容词
  let features = ["美味", "营养", "健康", "简单", "快捷", "方便", "实惠", "经济", "划算", "精致", "优雅", "高雅", "高端", "大气", "上档次", "时尚", "潮流", "流行", "受欢迎", "备受喜爱"];

  // 随机从特点数组中选择一个元素
  let feature = features[Math.floor(Math.random() * features.length)];

  // 返回吐司面包的特点
  return feature;
}

// 定义一个函数，用于生成一个随机的吐司面包的介绍的结尾
function generateToastEnding() {
  // 定义一个数组，用于存储吐司面包的介绍的结尾
  let endings = ["，是你早餐的不二之选。", "，是你下午茶的最佳伴侣。", "，是你夜宵的绝佳选择。", "，是你送礼的好主意。", "，是你犒劳自己的好方法。", "，是你分享的好东西。", "，是你品尝的好机会。", "，是你创新的好灵感。", "，是你学习的好榜样。", "，是你欣赏的好作品。"];

  // 随机从结尾数组中选择一个元素
  let ending = endings[Math.floor(Math.random() * endings.length)];

  // 返回吐司面包的介绍的结尾
  return ending;
}

// 定义一个函数，用于生成一个随机的吐司面包的介绍
function generateToastDescription() {
  // 调用一个函数，用于生成一个随机的吐司面包的介绍的开头
  let sentence = generateToastIntro();

  // 定义一个变量，用于存储吐司面包的特点的个数
  let featureCount = Math.floor(Math.random() * 3) + 1; // 随机生成一个 1 到 3 的整数

  // 循环生成吐司面包的特点，并拼接到介绍中
  for (let i = 0; i < featureCount; i++) {
    // 调用一个函数，用于生成一个随机的吐司面包的特点
    let feature = generateToastFeature();

    // 如果是第一个特点，就在前面加上“，”
    if (i === 0) {
      sentence += "，";
    }

    // 如果是最后一个特点，就在后面加上“的”
    if (i === featureCount - 1) {
      sentence += feature + "的";
    } else {
      // 否则，就在后面加上“、”
      sentence += feature + "、";
    }
  }

  // 调用一个函数，用于生成一个随机的吐司面包的介绍的结尾
  let ending = generateToastEnding();

  // 将结尾拼接到介绍中
  sentence += ending;

  // 返回吐司面包的介绍
  return sentence;
}

// 定义一个函数，用于生成一个随机的吐司面包的图片
function generateToastImage() {
  // 调用一个内部工具，用于生成一个随机的吐司面包的图片
  graphic_art(prompt="a toast");
}

// 定义一个函数，用于展示一个随机的吐司面包的图片和介绍
function showRandomToast() {
  // 获取结果区域的元素
  let resultDiv = document.getElementById("result");

  // 清空结果区域的内容
  resultDiv.innerHTML = "";

  // 调用一个函数，用于生成一个随机的吐司面包的图片
  generateToastImage();

  // 调用一个函数，用于生成一个随机的吐司面包的介绍
  let description = generateToastDescription();

  // 创建一个段落元素，用于展示吐司面包的介绍
  let paragraph = document.createElement("p");
  paragraph.innerText = description;

  // 将段落元素添加到结果区域中
  resultDiv.appendChild(paragraph);
}

// 获取计算按钮的元素
let calculateButton = document.getElementById("calculate");

// 为计算按钮添加点击事件的监听器，当点击时调用 calculateToastRecipe 函数
calculateButton.addEventListener("click", calculateToastRecipe);

// 获取随机按钮的元素
let randomButton = document.getElementById("random");

// 为随机按钮添加点击事件的监听器，当点击时调用 showRandomToast 函数
randomButton.addEventListener("click", showRandomToast);
