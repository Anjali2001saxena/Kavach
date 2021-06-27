/* Putting the data into an array so that we can easily count the entries */
async function getdata(){

    const response = await fetch('/~/homepage/open/centers?all=true');
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
            </tr>`;

        
    var k=0;
    for(let i of data){
        tab += `<tr>
        <td>${data[k].data.name}</td>
        <td>${data[k].data.email}</td>
        <td>${data[k].data.mobile}</td>
        <td>${data[k].data.address}</td>
        <td>${data[k].data.pincode}</td>
        <td><button>Send Request</button></td>
        </tr>`;
        k++;
    }
    
    
    document.getElementById("centers").innerHTML = tab;
    
    $("button").click(function(){
        let regform = `<form action="mailto:${data[k-1].data.email}" method="post" enctype="text/plain" id="form">
            Name:<input type="text" name="name">
            Email:<input type="text" name="email">
            Contact Number:<input type="text" name="mobile">
            Address:<input type="text" name="address">
            Pincode:<input type="text" name="pincode">
            Number of Beneficiaries:<input type="text" name="members">
            <input type="submit" name="submit" value="Submit">
        </form>`;
        document.getElementById("detailform").innerHTML = regform;
    });
}