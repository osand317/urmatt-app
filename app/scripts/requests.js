var openTable = document.querySelector("#openTable");
var closedTable = document.querySelector("#closedTable");

var addRequestBtn = document.querySelector("#addRequestBtn");

var allTableHeaders = [];
var requestsRef;

requestsRef = firestore.collection("requests");

requestsRef.onSnapshot(function(querySnapshot){
    tableCallback(querySnapshot, openTable);
    tableCallback(querySnapshot, closedTable);
});

function tableCallback(querySnapshot, selector){
    allTableHeaders = [];
    clearTable(selector);
    querySnapshot.forEach(function (doc) {
        getTableHeaders(doc);
        if (shouldBeShown(doc.data(), selector)){
            createTableRow(doc.data(), selector);
        }
    });
    createTableHeading(selector);
}

function createTableRow(data, selector){
    var tbody = selector.getElementsByTagName("tbody")[0];
    let tr = document.createElement('tr');

    allTableHeaders.forEach(function(header){
        if (data) {
            let td = document.createElement('td');
            td.classList.add("mdl-data-table__cell--center");
            if (Object.keys(data).indexOf(header) > -1) {
                td.textContent = data[header];
            }
            else {
                td.textContent = "";
            }
            tr.appendChild(td);
        }
    });
    tbody.appendChild(tr);
}

function createTableHeading(selector) {
    var thead = selector.getElementsByTagName("thead")[0];
    let tr = document.createElement('tr');
    allTableHeaders.forEach(function(header){
        let th = document.createElement('th');
        th.textContent = header;
        tr.appendChild(th);
    });
    thead.appendChild(tr);
}

function getTableHeaders(doc){
    let data = doc.data();
    let headers = Object.keys(data);
    headers.forEach(function(header){
        if (allTableHeaders.indexOf(header) === -1) allTableHeaders.push(header);
    })
}

function clearTable(selector){
    selector.getElementsByTagName("tbody")[0].innerHTML = "";
    selector.getElementsByTagName("thead")[0].innerHTML = "";
}

function shouldBeShown(data, selector){
    let result;
    switch(selector){
        case openTable:
            result = data.isComplete === false;
            break;
        case closedTable:
            result = data.isComplete === true;
            break;
    }
    return result;
}

function clearAllTables(){
    openTable.getElementsByTagName("tbody")[0].innerHTML = "";
    openTable.getElementsByTagName("thead")[0].innerHTML = "";
    closedTable.getElementsByTagName("tbody")[0].innerHTML = "";
    closedTable.getElementsByTagName("thead")[0].innerHTML = "";
}

// ------------------------ Statistics ------------------------ //

new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
        labels: ["Majority", "Minority"],
        datasets: [{
            label: "Chart",
            backgroundColor: ["#3e95cd", "#8e5ea2"],
            data: [90, 10]
        }]
    },
    options: {
        title: {
            display: true,
            text: ''
        }
    }
});

window.onload = function(){
    console.log("onload");
    document.getElementById("fixed-tab-3-a").addEventListener("click",function(){
        document.getElementById("pie-chart").style.display = "block";
        console.log("hello");
    });

    document.getElementById("fixed-tab-2-a").addEventListener("click",function(){
        document.getElementById("closedTable").style.display = "block";
        console.log("hello");
    });
};

addRequestBtn.addEventListener('click', function(){
    window.location = '../createRequest.html';
});
