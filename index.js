//script for filtering the data of UFO sightings
var tbody=document.querySelector('tbody');
var searchInput=document.querySelector('#search_');
var searchBtn=document.querySelector('#search');

//Global variable
var selector='';
//Pulling the data from dropdown selection
function getData(dataset){
    selector=dataset;
}

searchBtn.addEventListener('click',handleSearchButtonClick);
var filteredSightings=dataSet;

function renderTable(){
    tbody.innerHTML='';
    for (var i=0; i<filteredSightings.length;i++){
        var sighting=filteredSightings[i];
        var fields=Object.keys(sighting);
        var row=tbody.insertRow(i);
        for (var j=0; j<fields.length; j++){
            var field=fields[j];
            var cell=row.insertCell(j);
            cell.innerText=sighting[field];
        }
    }
}
//For debugging purposes
function type(obj) {
    return Object.prototype.toString.call(obj).replace(/^\[object (.+)\]$/,"$1").toLowerCase()
}

function handleSearchButtonClick(){
//    console.log(selector);
    switch(selector){
        case 'datetime':
        //Date search
            var filterDate=searchInput.value;
            var res=filterDate.split('/');
            var month = res[0];
            var day = res[1];
            var year = res[2];
            var day_='';
            var month_='';
            var year_='';
            if (day[0]=='0'){
                day_=day[1];
            }
            else {day_=day;}
            if (month[0]=='0'){
                month_=month[1];
            }
            else {month_=month;}
            if (year.length==2){
                year_='20'+year;
            }
            else {year_=year;}
            filterDate=month_+'/'+day_+'/'+year_;
            filteredSightings=dataSet.filter(function(sighting){
                var sightingDate=sighting.datetime;
                return sightingDate === filterDate;
            });
            renderTable();
            break;
        case 'city':
        //City search
            var filterCity=searchInput.value.trim().toLowerCase();
            filteredSightings=dataSet.filter(function(sighting){
                var sightingCity=sighting.city.toLowerCase();
                return sightingCity === filterCity;
            });
            renderTable();
            break;
        case 'state':
        //State search
            var filterState=searchInput.value.trim().toLowerCase();
            filteredSightings=dataSet.filter(function(sighting){
                var sightingState=sighting.state.toLowerCase();
                return sightingState === filterState;
            });
            console.log(filteredSightings.length);
            renderTable();
            break;
        case 'country':
        //Country search
            var filterCountry=searchInput.value.trim().toLowerCase();
            filteredSightings=dataSet.filter(function(sighting){
                var sightingCountry=sighting.country.toLowerCase();
                return sightingCountry === filterCountry;
            });
            renderTable();
            break;
        case 'shape':
        //Shape search
            var filterShape=searchInput.value.trim().toLowerCase();
            filteredSightings=dataSet.filter(function(sighting){
                var sightingShape=sighting.shape.toLowerCase();
                return sightingShape === filterShape;
            });
            renderTable();
            break;

        
        default:

    }
    
}

// var current_page = 1;
// var records_per_page = 20;

// var objJson = []; 
// function prevPage(){
//     if (current_page > 1) {
//         current_page--;
//         changePage(current_page);
//     }
// }
// function nextPage(){
//     if (current_page < numPages()) {
//         current_page++;
//         changePage(current_page);
//     }
// }    
// function changePage(page){
//     var btn_next = document.getElementById("btn_next");
//     var btn_prev = document.getElementById("btn_prev");
//     var listing_table = document.getElementById("listingTable");
//     var page_span = document.getElementById("page");
//     if (page < 1) page = 1;
//     if (page > numPages()) page = numPages();
//     listing_table.innerHTML = "";
//     for (var i = (page-1) * records_per_page; i < (page * records_per_page); i++) {
//         listing_table.innerHTML += "<br>";
//     }
//     page_span.innerHTML = page;

//     if (page == 1) {
//         btn_prev.style.visibility = "hidden";
//     } else {
//         btn_prev.style.visibility = "visible";
//     }
//     if (page == numPages()) {
//         btn_next.style.visibility = "hidden";
//     } else {
//         btn_next.style.visibility = "visible";
//     }
// }
// function numPages(){
//     return Math.ceil(objJson.length / records_per_page);
// }
// window.onload = function() {
//     changePage(1);
// };

renderTable();

