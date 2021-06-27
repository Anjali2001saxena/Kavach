window.logout = function() {
	fetch('/~/homepage/logout', { method: 'POST'})
	location.href = '/~/homepage/volunteer'
}

/* Putting the data into an array so that we can easily count the entries */
async function getdata1(){

    const response = await fetch('/~/homepage/open/openvials?all=true');
    var data = await response.json();
    console.log(data[0]);
    show1(data);

}
async function getdata2(){

    const response = await fetch('/~/homepage/open/beneficiaries?all=true');
    var data = await response.json();
    console.log(data[0]);
    show2(data);

}

getdata1();
getdata2();

function show1(data){
    let tab1 = 
            `<tr>
               <th>NAME  </th>
               <th>EMAIL  </th>
               <th>CONTACT NUMBER  </th>
               <th>ADDRESS  </th>
               <th>PINCODE  </th>
               <th>AVAILABLE DOSES  </th>
            </tr>`;

        
    var k=0;
    for(let i of data){
        tab1 += `<tr>
        <td>${data[k].data.name}</td>
        <td>${data[k].data.email}</td>
        <td>${data[k].data.mobile}</td>
        <td>${data[k].data.address}</td>
        <td>${data[k].data.pincode}</td>
        <td>${data[k].data.doses}</td>
        </tr>`;
        k++;
    }
    
    document.getElementById("doses").innerHTML = tab1;
}
function show2(data){
    let tab2 = 
            `<tr>
               <th>NAME</th>
               <th>EMAIL</th>
               <th>CONTACT NUMBER</th>
               <th>AGE</th>
               <th>DISABILITY</th>
               <th>ADDRESS</th>
               <th>PINCODE</th>
            </tr>`;

        
    var k=0;
    for(let i of data){
        tab2 += `<tr>
        <td>${data[k].data.name}</td>
        <td>${data[k].data.email}</td>
        <td>${data[k].data.mobile}</td>
        <td>${data[k].data.age}</td>
        <td>${data[k].data.disability}</td>
        <td>${data[k].data.address}</td>
        <td>${data[k].data.pincode}</td>
        </tr>`;
        k++;
    }
    
    document.getElementById("users").innerHTML = tab2;
}