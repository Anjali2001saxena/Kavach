async function getdata(){

    const response = await fetch('/~/homepage/open/closevials?all=true');
    var data = await response.json();
    console.log(data[0]);
    show(data);

}

getdata();

function show(data){
    let tab = 
            `<tr>
               <th>NAME</th>
               <th>EMAIL</th>
               <th>CONTACT NUMBER</th>
               <th>ADDRESS</th>
               <th>PINCODE</th>
               <th>DOSES</th>
            </tr>`;

        
    var k=0;
    for(let i of data){
        tab += `<tr>
        <td>${data[k].data.name}</td>
        <td>${data[k].data.email}</td>
        <td>${data[k].data.mobile}</td>
        <td>${data[k].data.address}</td>
        <td>${data[k].data.pincode}</td>
        <td>${data[k].data.doses}</td>
        </tr>`;
        k++;
    }
    
    
    document.getElementById("closevials").innerHTML = tab;
}