window.onload = function() {
  var players = [];
  var addPlayerBtn = document.getElementById('addPlayer');
  var playerName = document.getElementById('playerName');
  var teamNumber = document.getElementById('teamNumber');
  var randomize = document.getElementById('randomize');
  var list = document.getElementById('listOfPlayers');
  var listOfTeams = document.getElementById('listOfTeams');
  
  addPlayerBtn.addEventListener('click', addPlayer)
  
  randomize.addEventListener('click', function(e){
    e.preventDefault();
    if(players.length){
      var arr = players.slice()
      randomizeIntoGroups(arr, +teamNumber.value, renderGroups)
    }else{
      alert('list is empty')
    }
    
  })
  
  


  function addPlayer(e){
    e.preventDefault();
    if(playerName.value !== ''){
      var listItem = createEl({tag: 'li', className: 'list-group-item'})
      listItem.innerHTML = playerName.value
      list.appendChild(listItem)
      players.push(playerName.value)
      playerName.value = ''
    }
  }


  function renderGroups(obj){
    listOfTeams.innerHTML = '';

    for(var key in obj){
      var ul = createEl({tag: 'ul', className: 'list-group'})
      obj[key].forEach(function(item){
        var li = createEl({tag: 'li', className: 'list-group-item'})
        li.innerHTML = item
        ul.appendChild(li)
      })

      listOfTeams.appendChild(ul)
    }
    
  }

  function createEl(obj){
    var elem = document.createElement(obj.tag)
    elem.classList.add(obj.className)
    return elem
  }
 
};

function randomizeIntoGroups(arr, numberOfGroups, callback){
  var groupsObj = {},
      items = arr,
      groupItemNumber = Math.floor(items.length / numberOfGroups);
  
  for(var i = 0; i < numberOfGroups; i++){
    groupsObj[i] = [];
    
    for(var j = 0; j < groupItemNumber; j++){
      var randomItem = items[Math.floor(Math.random() * items.length)];
      groupsObj[i].push(randomItem)
      items.splice(items.indexOf(randomItem), 1)
    }
  }
  
  if(items.length){
    for(var k = 0; k < items.length; k++){
      groupsObj[k].push(items[k])
    }
    
    items = []
    
  }
  

  
  return callback(groupsObj);
}

function UI(){
  this.addToListBtn = document.getElementById('addPlayer');
};







