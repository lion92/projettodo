function iddetache(e){
  document.getElementById("idtache").value=e.innerHTML;
}

function divinfo(e){
  document.getElementById("idtache").value=e.children[0].innerHTML;
  document.getElementById("nom").value=e.children[1].innerHTML;
  document.getElementById("description").value=e.children[2].innerHTML;
}
function nom(e){
  document.getElementById("nom").value=e.innerHTML;
}
function description(e){
  document.getElementById("description").value=e.innerHTML;
}
async function fetchlogin(){
  console.log(document.getElementById("login").value);
    const response = await fetch(
      "http://localhost:8000/login",
      {  headers: {
          'Accept': 'application/json', 'Content-Type': 'application/json'
          
        },
        method: "POST",
        body: JSON.stringify({
          email: document.getElementById("login").value,

          password:document.getElementById("password").value
        }),
        mode:'cors',
        credentials:'same-origin',
      
      }
    );

    const resbis = await response.json();
    
    console.log(resbis);
     await fetchid().then((data)=>{
      document.getElementById("id").value=data;
      });
  
  }

  async function fetchdeconnexion(){
    const response = await fetch(
      "http://localhost:8000/deconnexion",
      {
        method: "POST",
        body: JSON.stringify({
          email: "test10",
          password:"12345"
        }),
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin':'*'
        },
      }
    );

    const resbis = await response.json();
    
    console.log(resbis);
    fetchid().then((data)=>{
      document.getElementById("id").value=data;
      });
  }


  async function fetchdelete(){
    
    const response = await fetch(
      "http://localhost:8000/delete",
      {
        method: "POST",
        body: JSON.stringify({
          idtache:document.getElementById("idtache").value

        }),
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin':'*'
        },
      }
    );
    
    const resbis = await response.json();
    console.log(resbis);

    fetchid().then((data)=>{
      document.getElementById("id").value=data;
      });
      await fetchutilisateur().then((data)=>{
        console.log(data);
        });
  }
 

  async function fetchupdate(){
    
    const response = await fetch(
      "http://localhost:8000/updatetache",
      {
        method: "POST",
        body: JSON.stringify({
          nom: document.getElementById("nom").value,
          description:document.getElementById("description").value,
          idutilisateur: await fetchid(),
          idtache: document.getElementById("idtache").value

        }),
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin':'*'
        },
      }
    );

    const resbis = await response.json();
    
    console.log(resbis);
    fetchid().then((data)=>{
      document.getElementById("id").value=data;
      });
      await fetchutilisateur().then((data)=>{
        console.log(data);
        });
  }
  async function fetchtodo(){
    
    const response = await fetch(
      "http://localhost:8000/todo",
      {
        method: "POST",
        body: JSON.stringify({
          nom: document.getElementById("nom").value,
          description:document.getElementById("description").value,
          idutilisateur: await fetchid(),

        }),
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin':'*'
        },
      }
    );

    const resbis = await response.json();
    
    console.log(resbis);
    fetchid().then((data)=>{
      document.getElementById("id").value=data;
      });
      await fetchutilisateur().then((data)=>{
        console.log(data);
        });
  }
  
 
  async function fetchutilisateur(){
    fetchid().then((data)=>{
      document.getElementById("id").value=data;
      });
    const response = await fetch(
      "http://localhost:8000/tache"+document.getElementById("id").value,
      {
        method: "GET",
        credentials: 'same-origin',
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin':'*'
        },
      }
    );

    const resbis = await response.json();
   
    let str="";
      console.log(resbis);
   resbis.message.forEach(element => {
     str+="<div onclick='divinfo(this)'><h1 onclick='iddetache(this)'>"+element.idtache+"</h1><h2 onclick='nom(this)'>"+element.nom+"</h2><p onclick='description(this)'>"+element.description+"</p><h3 >"+element.date+"</h3></div>"
     
   });
   document.getElementById("tacheRepertoire").innerHTML=str;
  }

  async function fetchid(){
    const response = await fetch(
      "http://localhost:8000/qui",
      {
        method: "GET",
        credentials: 'same-origin',
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin':'*'
        },
      }
    );

    const resbis = await response.json();
    
    
      console.log(resbis);
    if(resbis.message.idutilisateur!==undefined){
    return await resbis.message.idutilisateur;
  
  }
    else { 
      
     return await "pas connecté"; 
    }
 
  }
 

  //fetchlogin();
  //fetchverifid()

  //fetchdeconnexion();
