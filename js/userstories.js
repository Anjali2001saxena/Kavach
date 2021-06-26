async function getdata(){

    const response = await fetch('/~/homepage/open/experiences?all=true');
    var data = await response.json();
    console.log(data[0]);
    show(data);

}

getdata();

function show(data){
    let tab = 
            `<tr>
               <th> </th>
               <th> </th>
            </tr>`;

        
    var k=0;
    for(let i of data){
        tab += `<tr>
        <td>${data[k].data.name}</td>
        <td>${data[k].data.remarks}</td>
        </tr>`;
        k++;
    }
    
    
    document.getElementById("userstories").innerHTML = tab;
}