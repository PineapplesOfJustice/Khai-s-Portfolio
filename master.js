var project = { 
  "9th Grade": [
      
  ],
  "10th Grade": [
    { 
      "title": "Cart of the Future",
      "description": "Hello Worlddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",  
    },
    { 
      "title": "Ca-Ro",
      "description": "Hello Worlddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",  
    },
    { 
      "title": "Lamplit Night",
      "description": "Hello Worlddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",  
    },
  ],
  "11th Grade": [
    { 
      "title": "Snake",
      "description": "Helsdkvlnskdlndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",  
    },
  ],
  "12th Grade": [
      
  ], 
}

var codePen = { 
  "9th Grade": [
    { 
      "title": "SVG Key",
      "link": "XpVOEW?editors=0010",  
      "description": "Hellddddddddddd",  
    },
    { 
      "title": "Polygon Assist v.2",
      "link": "mqdKZx?editors=0010",  
      "description": "Hello Worlddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",  
    },
  ],
  "10th Grade": [
    { 
      "title": "Movable ViewBox",
      "link": "mxRBRp?editors=0010",  
      "description": "Hello Worlddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",  
    },
  ],
  "11th Grade": [
      
  ],
  "12th Grade": [
      
  ], 
}

var row = 0;
var column = 0;
var r;
var c;

function loadProject(level){
  var text = "";  
  if(project[level].length != 0){  
    row = 0;
    column = 0;
    if(project[level].length > 1){
      text += '<h1>Projects:</h1><br><div class="container">';  
    }  
    else{  
      text += '<h1>Project:</h1><br><div class="container">';  
    }
    while(project[level].length != 0){
      if(column == 0){
        text += '<div class="row">';  
      } 
      var placeHolderText1 = "document.getElementById('ProjectLinkButton" + row + '_' + column + "').click()";  
      //var placeHolderText2 = 'displayDescription(0, ' + row + ", " + column + ")";  
      //var placeHolderText3 = 'hideDescription(0, ' + row + ", " + column + ")";  
      if(column >= 2){
        text += '<div class="col-md-3 description" onclick="hideDescription(0, ' + row + ', ' + column + ')" id="ProjectDescription' + row + '_' + column + '"><p>&emsp;' + project[level][0].description +'</p><br><center><a href="https://pineapplesofjustice.github.io/' + project[level][0].title.replace(/\s/g, "-").replace(/'/g, "-").replace(/:/g, "-") + '/" target="_blank"><button class="linkButton" id="ProjectLinkButton' + row + '_' + column + '">Open</button></a></center></div>'; 
        text += '<div class="col-md-3 main" ondblclick=' + placeHolderText1 + ' onclick="displayDescription(0, ' + row + ', ' + column + ')" id="ProjectMain' + row + '_' + column + '"><center><img src="Images/Thumbnail/Project/' + level + "/" + project[level][0].title.replace(/\s/g, "-").replace(/'/g, "-").replace(/:/g, "-") + '.png" class="thumbnail"/><h2>' + project[level][0].title +'</h2></center></div>';          
      }  
      else{  
        text += '<div class="col-md-3 main" ondblclick=' + placeHolderText1 + ' onclick="displayDescription(0, ' + row + ', ' + column + ')" id="ProjectMain' + row + '_' + column + '"><center><img src="Images/Thumbnail/Project/' + level + "/" + project[level][0].title.replace(/\s/g, "-").replace(/'/g, "-").replace(/:/g, "-") + '.png" class="thumbnail"/><h2>' + project[level][0].title +'</h2></center></div>';  
        text += '<div class="col-md-3 description" onclick="hideDescription(0, ' + row + ', ' + column + ')" id="ProjectDescription' + row + '_' + column + '"><p>&emsp;' + project[level][0].description +'</p><br><center><a href="https://pineapplesofjustice.github.io/' + project[level][0].title.replace(/\s/g, "-").replace(/'/g, "-").replace(/:/g, "-") + '/" target="_blank"><button class="linkButton" id="ProjectLinkButton' + row + '_' + column + '">Open</button></a></center></div>';   
      }
      column += 1;
      project[level].shift();
      if(column == 4){
        document.getElementById("projectSpace").innerHTML += '</div>';  
        row += 1;  
        column = 0;  
      }  
    }
    if(column != 0){
      text += '</div>';    
    } 
    text += '</div>';
    document.getElementById("projectSpace").innerHTML = text; 
  }
}

function loadCodePen(level){
  var text = "";  
  if(codePen[level].length != 0){  
    row = 0;
    column = 0;
    if(codePen[level].length > 1){
      text += '<h1>CodePens:</h1><br><div class="container">';  
    }  
    else{  
      text += '<h1>CodePen:</h1><br><div class="container">';  
    }
    while(codePen[level].length != 0){
      if(column == 0){
        text += '<div class="row">';  
      } 
      var placeHolderText1 = "document.getElementById('CodePenLinkButton" + row + '_' + column + "').click()";  
      //var placeHolderText2 = 'displayDescription(0, ' + row + ", " + column + ")";  
      //var placeHolderText3 = 'hideDescription(0, ' + row + ", " + column + ")";  
      if(column >= 2){
        text += '<div class="col-md-3 description" onclick="hideDescription(1, ' + row + ', ' + column + ')" id="CodePenDescription' + row + '_' + column + '"><p>&emsp;' + codePen[level][0].description +'</p><br><center><a href="https://pineapplesofjustice.github.io/' + codePen[level][0].title.replace(/\s/g, "-").replace(/'/g, "-").replace(/:/g, "-") + '/" target="_blank"><button class="linkButton" id="CodePenLinkButton' + row + '_' + column + '">Open</button></a></center></div>'; 
        text += '<div class="col-md-3 main" ondblclick=' + placeHolderText1 + ' onclick="displayDescription(1, ' + row + ', ' + column + ')" id="CodePenMain' + row + '_' + column + '"><center><img src="Images/Thumbnail/CodePen/' + level + "/" + codePen[level][0].title.replace(/\s/g, "-").replace(/'/g, "-").replace(/:/g, "-") + '.png" class="thumbnail"/><h2>' + codePen[level][0].title +'</h2></center></div>';          
      }  
      else{  
        text += '<div class="col-md-3 main" ondblclick=' + placeHolderText1 + ' onclick="displayDescription(1, ' + row + ', ' + column + ')" id="CodePenMain' + row + '_' + column + '"><center><img src="Images/Thumbnail/CodePen/' + level + "/" + codePen[level][0].title.replace(/\s/g, "-").replace(/'/g, "-").replace(/:/g, "-") + '.png" class="thumbnail"/><h2>' + codePen[level][0].title +'</h2></center></div>';  
        text += '<div class="col-md-3 description" onclick="hideDescription(1, ' + row + ', ' + column + ')" id="CodePenDescription' + row + '_' + column + '"><p>&emsp;' + codePen[level][0].description +'</p><br><center><a href="https://codepen.io/PineappleMaster2002/pen/' + codePen[level][0].link + '" target="_blank"><button class="linkButton" id="CodePenLinkButton' + row + '_' + column + '">Open</button></a></center></div>';   
      }
      column += 1;
      codePen[level].shift();
      if(column == 4){
        document.getElementById("codePenSpace").innerHTML += '</div>';  
        row += 1;  
        column = 0;  
      }  
    }
    if(column != 0){
      text += '</div>';    
    } 
    text += '</div>';
    document.getElementById("codePenSpace").innerHTML = text; 
  }
}

function checkForContent(){
  if(document.getElementById("projectSpace").innerHTML == "" && document.getElementById("codePenSpace").innerHTML == ""){
    document.getElementById("projectSpace").innerHTML = "<center><br><br><h1 style='font-size: 60px; text-decoration: none;'>404</h1><br><h1 style='text-decoration: none;'>Error: Content not Found</h1></center>"  
  }  
}

function displayDescription(type, ro, col){
  console.log(type + ", " + ro + ", " + col)  
  if(type == 0){
    type = "Project";  
  }  
  else if(type == 1){
    type = "CodePen";  
  }  
  for(var c=0; c<4; c++){
    if(document.getElementById(type + "Main" + ro + "_" + c)){
      document.getElementById(type + "Main" + ro + "_" + c).style.display = "block";
      document.getElementById(type + "Description" + ro + "_" + c).style.display = "none";  
      // For some reason, the parameter seem to change with the variable c. Because it was capped at 4, displayDescription have a tendency to show 4 for col, which is ridiculous. Thus, I was forced to write an extra 14 lines.  
      //document.getElementById(type + "Main" + ro + "_" + c).onclick = function(){ displayDescription(type, ro,  c); }; 
    }  
  }
  if(document.getElementById(type + "Main" + ro + "_0")){
    document.getElementById(type + "Main" + ro + "_0").onclick = function(){ displayDescription(type, ro,  0); }; 
  }  
  if(document.getElementById(type + "Main" + ro + "_1")){
    document.getElementById(type + "Main" + ro + "_1").onclick = function(){ displayDescription(type, ro,  1); }; 
  }  
  if(document.getElementById(type + "Main" + ro + "_2")){
    document.getElementById(type + "Main" + ro + "_2").onclick = function(){ displayDescription(type, ro,  2); }; 
  }  
  if(document.getElementById(type + "Main" + ro + "_3")){
    document.getElementById(type + "Main" + ro + "_3").onclick = function(){ displayDescription(type, ro,  3); }; 
  }  
    
  if(!document.getElementById(type + "Main" + ro + "_3")){}  
  else if(document.getElementById(type + "Main" + ro + "_" + (col+1)) && (col+1) < 3){  
    document.getElementById(type + "Main" + ro + "_" + (col+1)).style.display = "none";
  } 
  else if((col+1) < 3){}  
  else if(document.getElementById(type + "Main" + ro + "_" + (col-1))){  
    document.getElementById(type + "Main" + ro + "_" + (col-1)).style.display = "none";
  }
  document.getElementById(type + "Description" + ro + "_" + col).style.display = "block";    
  document.getElementById(type + "Main" + ro + "_" + col).onclick = function(){ hideDescription(type, ro,  col); };
}

function hideDescription(type, ro, col){
  if(type == 0){
    type = "Project";  
  }  
  else if(type == 1){
    type = "CodePen";  
  }  
    
  if(!document.getElementById(type + "Main" + ro + "_3")){}  
  else if(document.getElementById(type + "Main" + ro + "_" + (col+1)) && (col+1) < 3){  
    document.getElementById(type + "Main" + ro + "_" + (col+1)).style.display = "block";
  }
  else if((col+1) < 3){}  
  else if(document.getElementById(type + "Main" + ro + "_" + (col-1))){  
    document.getElementById(type + "Main" + ro + "_" + (col-1)).style.display = "block";
  }
  document.getElementById(type + "Description" + ro + "_" + col).style.display = "none";    
  document.getElementById(type + "Main" + ro + "_" + col).onclick = function(){ displayDescription(type, ro,  col); };
}   

var endTime = false;
function updateTime(){
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  if(hour < 10){ hour = "0" + hour; }
  if(minute < 10){ minute = "0" + minute; }  
  document.getElementById("time").innerHTML = hour + ":" + minute; 
  if(!endTime){  
    requestAnimationFrame(updateTime);  
  }
}

//Below codes depended on W3SCHOOL as resource

//When the user scrolls down 50px from the top of the document, this function display the to top button
window.addEventListener('scroll', scrollFunction);
function scrollFunction(){
  if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
    document.getElementById("scrollButton").style.display = "block";
  }
  else{
    document.getElementById("scrollButton").style.display = "none";
  }
}

//scroll to the top of the document whene the button is click
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Made the Carousel "stick" to top of the home page.
function fixCarousel(){
  if(document.body.scrollTop > 70 || document.documentElement.scrollTop > 70){
    document.getElementById("carouselId").setAttribute("style", "position: fixed; top: 78px; left: 110px;");  
  }  
  else{
    document.getElementById("carouselId").setAttribute("style", "position: relative; top: 10px; left: -80px;");  
  }  
}
