function getIpInformation(ip) {
	fetch("https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/?ip="+ip, {
		headers: {
			'X-RapidAPI-Key': '5336a9e479msh00d35d460581999p131099jsn0064a3036e0f',
			'X-RapidAPI-Host': 'ip-geolocation-ipwhois-io.p.rapidapi.com'
		},
	}).then((response) => response.json())
	.then((data) => {
		document.getElementById('country-flag').setAttribute('src',data.country_flag);
		document.getElementById('country-name').innerHTML = data.country;
	})
	.catch((error) => {
		console.log("Error:", error);
		document.getElementById('country-name').innerHTML = 'Error fetching your data!';
  });
}

// get client id
fetch("https://api.ipify.org?format=json")
  .then((response) => response.json())
  .then((data) => {
    getIpInformation(data.ip);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
