const api_url = "https://corona.lmao.ninja/v2/countries/India?strict&query%20";

async function getapi(url) {

    const response = await fetch(url);
    var data = await response.json();
    drawChart(data);
}
getapi(api_url);

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);


    function drawChart(info) {
        var data = google.visualization.arrayToDataTable([
        ['Current COVID status', 'Number of cases'],
        ['Active',info['active']],
        ['Recovered', info['recovered']],
        ['Death', info['deaths']]
      ]);


        var options = { 'width':1000, 'height':500,};


        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
      }