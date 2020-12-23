const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '気温華氏30度で外は寒かった。:insertx: は出かけた。:inserty:に着いた。:insertz:。体重90 ポンドの:insertx:は驚いたが、Bobは笑っていた。:inserty:では珍しいことだった。';
let insertX = ['トトロ','ピカチュウ','ムーミン'];
let insertY = ['トトロの森','マサラタウン','ムーミン谷'];
let insertZ = ['雨が降っていた','静かだった','晴れていた'];

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
    const weight = Math.round(800*0.0714286) + ' kg';
    const temperature =  '摂氏' + Math.round((32-34) * 3 / 2) ;
    newStory = newStory.replace('華氏30',temperature);
    newStory = newStory.replace('90 ポンド',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
