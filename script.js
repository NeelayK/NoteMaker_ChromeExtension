const DataJSON = localStorage.getItem("Data");
const ValueJSON = localStorage.getItem("Value");
let Data=[];
let Value=[];
const inputText = document.getElementById('input_in');
const inputBtn = document.getElementById('button_in');
const inputImg = document.getElementById('button_img');
const inputVid = document.getElementById('button_vid');
const inputLink = document.getElementById('button_link');
const inputTrash = document.getElementById('button_trash');
const list = document.getElementById('list');
getData();
function getData(){
  if(DataJSON && ValueJSON){
    Data=JSON.parse(DataJSON);
    Value=JSON.parse(ValueJSON);
  }

  for(let i=0; i < Data.length; i++){
    inputText.value = Data[i];

    switch(Value[i]){
      case 1:
        addText();
        break;
      case 2:
        addImg();
        break;
      case 3:
        addVid();
        break;
      case 4:
        addLink();
        break;
      default:
        addText();
        break;
    }
  }
};

function addText(){
  list.innerHTML += `<li>${inputText.value}</li>`;
  Data.push(inputText.value);
  Value.push(1);
  setData();
  inputText.value = '';
}

function addImg(){
  list.innerHTML += `<li><img src='${inputText.value}'></li>`;
  Data.push(inputText.value);
  Value.push(2);
  setData();
  inputText.value = '';
}

function addVid(){
  list.innerHTML += `<li>
      <video controls>
        <source src="${inputText.value}" type="video/youtu">
        <source src="${inputText.value}" type="video/mp4">
        <source src="${inputText.value}" type="video/ogg">
      </video>
    </li>`;
  Data.push(inputText.value);
  Value.push(3);
  setData();
  inputText.value = '';
}

function addLink(){
  list.innerHTML += `<li><a target="_blank" href='${inputText.value}'>${inputText.value}</a></li>`;
  Data.push(inputText.value);
  Value.push(4);
  inputText.value = '';
  setData();
}

inputBtn.addEventListener("click", function() {
  addText();
});

inputImg.addEventListener("click", function() {
  addImg();
});

inputVid.addEventListener("click", function() {
  addVid();
});

inputLink.addEventListener('click', function() {
  addLink();
});

inputTrash.addEventListener('click', function() {
  localStorage.removeItem("Data");
  localStorage.removeItem("Value");
  list.innerHTML='';
});


function setData(){
  localStorage.setItem("Data",JSON.stringify(Data));
  localStorage.setItem("Value",JSON.stringify(Value));
}