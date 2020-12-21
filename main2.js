const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '気温華氏40度で外は寒かった。:insertx: は出かけた。:inserty:に着いた。:insertz:。体重110 ポンドの:insertx:は驚いたが、Bobは驚かなかった。:inserty:にはよくあることだった。';
let insertX = ['スヌーピー','ミッキーマウス','サンタクロース'];
let insertY = ['ディズニーランド','千駄ヶ谷','津田塾大学'];
let insertZ = ['雪が降っていた','混雑していた','晴れていた'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.0714286) + ' kg';
    const temperature =  Math.round('摂氏' + (94-32) * 5 / 9) ;
    newStory = newStory.replace('華氏40',temperature);
    newStory = newStory.replace('110 ポンド',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
