function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n){
  const rankedLists= document.querySelectorAll('.ranked-list')
  for (let i = 0; i < rankedLists.length; i++){
    let children = rankedLists[i].children
    for (let j =0; j<children.length; j++){
      children[j].innerHTML = parseInt(children[j].innerHTML)+n;
    }
  }
}