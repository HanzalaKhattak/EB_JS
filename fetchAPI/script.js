let apiURL = fetch("https://jsonplaceholder.typicode.com/todos");

let getDataButton = document.createElement("button");
getDataButton.textContent = 'Get Data';
document.body.appendChild(getDataButton);
let change = false;

let table = document.createElement("table");
document.body.appendChild(table);
let fetchData = async() => {
    let response = await apiURL;
        let data = await response.json();
        console.log(data);
        data.forEach(item => {
            let row = document.createElement("tr");
            row.id = "row";
            row.innerHTML = `
                <td>${item.userId}</td>
                <td>${item.id}</td>
                <td>${item.title}</td>
                <td>${item.completed}</td>
            `;
            table.appendChild(row);
        });
}

getDataButton.addEventListener("click",function(){
        fetchData();
});