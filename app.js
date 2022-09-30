// https://www.omnicalculator.com/other/screen-size

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const screenareaRadio = document.getElementById('screenareaRadio');
const widthRadio = document.getElementById('widthRadio');
const heightRadio = document.getElementById('heightRadio');

let screenarea;
let width = v1;
let height = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

screenareaRadio.addEventListener('click', function() {
  variable1.textContent = 'Width';
  variable2.textContent = 'Height';
  width = v1;
  height = v2;
  result.textContent = '';
});

widthRadio.addEventListener('click', function() {
  variable1.textContent = 'Screen area';
  variable2.textContent = 'Height';
  screenarea = v1;
  height = v2;
  result.textContent = '';
});

heightRadio.addEventListener('click', function() {
  variable1.textContent = 'Screen area';
  variable2.textContent = 'Width';
  screenarea = v1;
  width = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(screenareaRadio.checked)
    result.textContent = `Screen area = ${computescreenarea().toFixed(2)}`;

  else if(widthRadio.checked)
    result.textContent = `Width = ${computewidth().toFixed(2)}`;

  else if(heightRadio.checked)
    result.textContent = `Height = ${computeheight().toFixed(2)}`;
})

// calculation

function computescreenarea() {
  return Number(width.value) * Number(height.value);
}

function computewidth() {
  return Number(screenarea.value) / Number(height.value);
}

function computeheight() {
  return Number(screenarea.value) / Number(width.value);
}