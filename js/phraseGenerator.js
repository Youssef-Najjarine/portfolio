const p = document.querySelector('#phraseGenerator');
let currPhrase = 'phrase 1';

const software_Engineer = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ','E', 'n', 'g','i', 'n', 'e', 'e', 'r'];
const software_Engineer_Reversed = 'Software Engineer';
let curSoftwareIndex = 0;
let curSoftwareIndexReversed = software_Engineer.length - 1;

const web_Developer = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];
const web_Developer_Reversed = 'Web Developer';
let curWebDevIndex = 0;
let curWebDevIndexReversed = web_Developer.length - 1;

const programmer = ['P', 'r', 'o', 'g', 'r', 'a', 'm', 'm', 'e', 'r'];
const programmer_Reversed = 'Programmer';
let curProgrammerIndex = 0;
let curProgrammerIndexReversed = programmer.length - 1;



setInterval(function () {
  if (currPhrase === 'phrase 1') {
    p.innerHTML += software_Engineer[curSoftwareIndex]
    curSoftwareIndex++;
    if (!software_Engineer[curSoftwareIndex]) {
      currPhrase = 'phrase 1 reversed'
      curSoftwareIndex = 0;
    }
  } else if (currPhrase === 'phrase 1 reversed') {
    p.innerHTML = software_Engineer_Reversed.slice(0, curSoftwareIndexReversed);
    curSoftwareIndexReversed--;
    if (!p.innerHTML.length) {
      currPhrase = 'phrase 2';
      curSoftwareIndexReversed = software_Engineer.length - 1;
    }
  } else if (currPhrase === 'phrase 2') {
    p.innerHTML += web_Developer[curWebDevIndex]
    curWebDevIndex++;
    if (!web_Developer[curWebDevIndex]) {
      currPhrase = 'phrase 2 reversed'
      curWebDevIndex = 0;
    }
  } else if (currPhrase === 'phrase 2 reversed') {
    p.innerHTML = web_Developer_Reversed.slice(0, curWebDevIndexReversed);
    curWebDevIndexReversed--;
    if (!p.innerHTML.length) {
      currPhrase = 'phrase 3';
      curWebDevIndexReversed = web_Developer.length - 1;
    }
  } else if (currPhrase === 'phrase 3') {
    p.innerHTML += programmer[curProgrammerIndex]
    curProgrammerIndex++;
    if (!programmer[curProgrammerIndex]) {
      currPhrase = 'phrase 3 reversed'
      curProgrammerIndex = 0;
    }
  } else if (currPhrase === 'phrase 3 reversed') {
    p.innerHTML = programmer_Reversed.slice(0, curProgrammerIndexReversed);
    curProgrammerIndexReversed--;
    if (!p.innerHTML.length) {
      currPhrase = 'phrase 1';
      curProgrammerIndexReversed = programmer.length - 1;
    }
  }
}, 100);