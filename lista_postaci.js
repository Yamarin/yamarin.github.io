// api url
const url = "https://api.airtable.com/v0/applHD7TN8d6YaVSF/Table%201"

  

  async function fetchText() {
	var myheader = new Headers()
	
	
	myheader.append('Authorization','Bearer ${{secrets.AIRTABLE_API_KEY}}');
	
    const response = await fetch(url, { 
		headers: myheader 
		});
	 //ogolne zapytanie do tabeli z postaciami
	
    var data = await response.json();
    
	let tab=""; //trzeba wyzerowac albo bedzie undefine leżał na starcie
	for (let r of data.records) {
	tab +=`<tr><td><a href='npc/pusty_npc.html?nazwa=${r.fields.Name}'>${r.fields.Name}</a></td></tr>`;
	} //konstrukcja tabeli w html z danymi i linkami, oraz parametrami w linku - imionami z Name
	document.getElementById('tabela').innerHTML = tab; //ustawienie kodu html jako tabeli, aby sie pokazal
		
}
fetchText();

