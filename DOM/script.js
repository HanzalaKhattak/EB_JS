// let username = document.getElementById(username).value;
// let email = document.getElementById(email).value;
// let password = document.getElementById(password).value;

// console.log(username);
// console.log(email);
// console.log(password);


// function getValue(){
//     let username = document.getElementById("username").value;
//     console.log(username);
//     let email = document.getElementById("email").value;
//     console.log(email);
//     let password = document.getElementById("password").value;
//     console.log(password);
// }

// function getValue(){
//     let a = document.getElementsByClassName("userData");
//     console.log(a[0].value);
//     console.log(a[1].value);
//     console.log(a[2].value);
// }


// let changeTitle = document.getElementById("title").innerText = "Welcome";
// let changeBackgroundColor = document.getElementById("box").style.backgroundColor = "red";

// function getUserName(){
//     let userName = document.getElementById("username").value;
//     console.log("Username : ",userName);
// }

// const items = document.querySelectorAll(".item");
//     items.forEach(item => {
//       item.style.fontSize = "20px";
//     });
 

// let listElements = document.getElementsByTagName("li");
// console.log(listElements.length);

// let firstH1Tag = document.getElementsByTagName("H1");
// console.log(firstH1Tag[0].innerText);

// // let updateDIVContents = document.getElementsByTagName("div");
// const divs = document.querySelectorAll("div");
//     divs.forEach(div => {
//       div.innerText = "Updated!";
//     });

// let paragraphContent = document.getElementById("para").innerText = "HI Hanzala, I am Seoyeong!";
// function changeDivColor(){
//     document.getElementById("box").style.backgroundColor = "red";
// }

// let onHoverEffect = document.getElementById("myImage");

// // Add mouseover event to apply the border
// onHoverEffect.addEventListener("mouseover", function() {
//     onHoverEffect.style.border = "5px solid red";
// });

// // Add mouseout event to remove the border
// onHoverEffect.addEventListener("mouseout", function() {
//     onHoverEffect.style.border = "none";
// });

// document.getElementById('submitBtn').addEventListener('click', function() {
//     alert('Form submitted!');
//   });

// document.querySelector('.hover-box').addEventListener('mouseover', function() {
//     this.style.backgroundColor = 'lightblue';
//   });

// document.querySelector('.hover-box').addEventListener('mouseout', function() {
//     this.style.backgroundColor = 'lightgray';
//   });

// document.getElementById('para').addEventListener('dblclick', function() {
//     this.textContent = 'Text changed!';
//   });

// document.getElementById('inputKeyUp').addEventListener('keyup', function() {
//     console.log(this.value);
//   });   

// let unorderedList = document.getElementById("list");
// let item = document.getElementById("item");
// item.innerHTML = "I am an Element!";
// let replaceBtn = document.getElementById("replaceBtn");
// let newItem = document.createElement("li");
// newItem.innerHTML = "I am a new Element!";

// // Add event listener to the replace button
// replaceBtn.addEventListener("click", function () {
//     if (unorderedList.contains(item)) {
//         // Replace the old item with the new item
//         unorderedList.replaceChild(newItem, item);
//     } else if (unorderedList.contains(newItem)) {
//         // Replace the new item with the old item
//         unorderedList.replaceChild(item, newItem);
//     }
// });


// For Button
let showButton = document.createElement("button");
showButton.textContent = 'Click';
document.body.appendChild(showButton);

function showNames(...names) {
    // Create a new <ul> element
    let ul = document.createElement("ul");

    names.forEach(function(name) {
        // Create a <li> for each name
        let li = document.createElement("li");
        li.textContent = name;
        ul.appendChild(li);
    });

    // Append the <ul> to the body
    console.log("Names", names);
    document.body.appendChild(ul);
}

showButton.addEventListener("click", function() {
    showNames("Hanzala", "Seoyeong", "Jin");    
});

