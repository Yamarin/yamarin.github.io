  async function fetchText() {
  //  const response = await fetch(document.url);
  //  var data = await response.json();
	var s = document.URL; //link z parametrem z poprzedniej strony
	parametr = s.substring(s.indexOf('=')+1);
	console.log(parametr); //wydobyty parametr - imie postaci
	
	let url = "https://api.airtable.com/v0/applHD7TN8d6YaVSF/Table%201?api_key=key0DEMp94EzUUvxP&filterByFormula=Name%3D%22" + parametr +"%22";  //link do zapytania api z filterby jako name, każde zapytanie musi miec bearer token (auth)
	console.log(url);
	
	const response = await fetch(url); //zapytanie po dane
    var data = await response.json(); //odpowiedz z ktorej wypelnimy pola
//    console.log(data);
	document.getElementById('nazwa').innerHTML = data.records[0].fields.Name;
	document.getElementById('opis').innerHTML = data.records[0].fields.Notes;
	console.log(data.records[0].fields.Art[0].url);
	document.getElementById('art').src = data.records[0].fields.Art[0].url;
	
	
}
fetchText();

