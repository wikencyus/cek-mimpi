const showValue = () => {
    var menu = document.getElementById('box');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';

    var inputVal = document.getElementById("myInput").value;
    document.getElementById("output").innerText = inputVal;

    const apiKey = "wikenn"
    const apiUrl = `https://api.lolhuman.xyz/api/primbon/artimimpi?apikey=${apiKey}&query=${inputVal}`

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerHTML = data.result;
    })  
}