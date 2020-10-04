const xml=new XMLHttpRequest();
xml.open('PUT',"http://localhost:3000/update");
xml.setRequestHeader("Content-Type", "application/json");
xml.send(JSON.stringify({'count':1}));	
