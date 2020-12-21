const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '気温 :inserta: 94 fahrenheit度で外は寒かった。:insertx: は出かけた。:inserty:に着いた。:insertz:。体重300 poundsの:insertx:は驚いたが、Bobは驚かなかった。:inserty:にはよくあることだった。';
let insertX = ['スヌーピー','ミッキーマウス','サンタクロース'];
let insertY = ['ディズニーランド','千駄ヶ谷','津田塾大学'];
let insertZ = ['雪が降っていた','混雑していた','晴れていた'];
let insertA= ['摂氏','華氏'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
  let aItem = randomValueFromArray(insertA);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);
  newStory = newStory.replace(':inserta:',aItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.0714286) + ' stone';
    const temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
