
// ----------------- Header --------------------

const header = document.getElementsByTagName("header")
header[0].innerHTML = `

<img src="./img/logo1.png" alt="img" width="90px" id="headerLogo" >
    
<p id="title">Sustainable Development <span> N</span>etwork</p>

       <nav id="headerNav" >
        <ul>
            <a href="./index.html"><li>Home</li></a>
            <a href="#section2"><li>Categories</li></a>
            <a href="./about.html" target="_blank"><li>About</li></a>
            <a href="https://sdgs.un.org/contact" target="_blank" ><li>Contact</li></a>
        </ul>
       </nav>

       
       <div id="sidebar">
           <img src="./img/icons/cross.png" alt="" width="32px" id="sidebarCross" onclick="sidebarToggle()">

                   <nav id="sidebarNav" >
            <ul>
                <a href="./index.html"><li>Home</li></a>
                <a href="#categories"><li>Categories</li></a>
                <a href="./about.html" target="_blank"><li>About</li></a>
                <a href="https://sdgs.un.org/contact" target="_blank" ><li>Contact</li></a>
            </ul>
           </nav>

       </div>

       <img src="./img/icons/menu.png" alt="" width="32px" id="headerMenu" onclick="sidebarToggle()" >
`

// ----------------- Footer --------------------

const footer = document.getElementsByTagName("footer")
footer[0].innerHTML =`
        <p>Sustainable Development Network (SDN) - All righs reserved - @2024</p>
`

// ======================== SideBar =============================

const sidebar = document.getElementById("sidebar")
const hMenu = document.getElementById("headerMenu")
isSidebar = false;

function sidebarToggle(){
if(isSidebar){
    sidebar.style.display = "none";
    isSidebar = false;
    hMenu.style.display = "block";
}
else{
    sidebar.style.display = "block";
    isSidebar = true;
    hMenu.style.display = "none";
}
}

// ---------------------------------------------------------------

const now = new Date();
const findPosTab = document.getElementById("findPosition")
const form = document.getElementById("findP")
const localeDateTime = now.toLocaleString();
let isFPTopen = false;

function toggleFindPosition(){

if(isFPTopen == false){
findPosTab.style.display = "block";
isFPTopen = true;
}
else{
    findPosTab.style.display = "none";
    isFPTopen = false;
}
}

let comment = false;
document.getElementById("ncy").innerHTML = "No comments yet";


document.getElementById("findP").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("userName").value;
    const title = document.getElementById("userTitle").value;
    const desc = document.getElementById("userDesc").value;
    const mail = document.getElementById("mail").value;
    const link = document.getElementById("link").value;
    const newDiv = document.createElement("div");


    newDiv.innerHTML = `

    <div id="findContainerChild">

    <div class="dt">${localeDateTime}</div>


    <p><b>Name: </b> ${name} </p>
    <p><b>Title: </b>  ${title} </p>
    <p><b>Desc: </b> ${desc}</p>
    <p><b>Mail: </b> ${mail} </p>
    <p><b>Link: </b>  <a href=" ${link} "> ${link}  </a> </p>

    </div>
    `
    comment = true;
    ;

    if(comment){
        document.getElementById("ncy").innerHTML = "";
    }
    else{
        document.getElementById("ncy").innerHTML = "No comments yet";
    }
    

    document.getElementById("findContainer").appendChild(newDiv);
    document.getElementById("findP").reset();
    const notification = document.getElementById("notify")
notification.innerHTML = "Comment Posted succesfully";
notification.classList.add("notifyStyle")
setTimeout( ()=>{  
    findPosTab.style.display = "none";
    notification.innerHTML = "";
  }, 3000 )

});

