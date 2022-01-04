function iddetache(e){
  document.getElementById("idtache").value=e.innerHTML;
}

function divinfo(e){
  document.getElementById("idtache").value=e.children[0].innerHTML;
  document.getElementById("nom").value=e.children[2].innerHTML;
  document.getElementById("description").value=e.children[3].innerHTML;
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
      if(isNaN(data)){
        window.location.href = "http://localhost:8000/loginfirst";
      }
      document.getElementById("id").value=data;
      });
      await fetchutilisateur().then((data)=>{
        console.log(data);
        });
  
  }
  fetchid().then((data)=>{
    console.log(isNaN(data));
    if(isNaN(data)){
      window.location.href = "http://localhost:8000/loginfirst";
    }
    document.getElementById("id").value=data;
    });
  async function fetchdeconnexion(){
    const response = await fetch(
      "http://localhost:8000/deconnexion",
      {
        method: "POST",
        body: JSON.stringify({
          email: document.getElementById("login").value,
          password: document.getElementById("password").value
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
    await fetchid().then((data)=>{
      document.getElementById("id").value=data;
      });
      await fetchutilisateur().then((data)=>{
        console.log(data);
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

    await fetchid().then((data)=>{
     
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
    let str2="";
      console.log(resbis);
   resbis.message.forEach(element => {
     console.log(element);
     str+="<div onclick='divinfo(this)'><h1 onclick='iddetache(this)'>"+element.idtache+"</h1><h2>"+" email: "+element.email+" nom: "+element.nom+" prenom: "+element.prenom+"</h2><h2 onclick='nom(this)'>"+element.tachenom+"</h2><p onclick='description(this)'>"+element.description+"</p><h3 >"+element.date+"</h3></div>"
     str2+="   <tr><td data-column='Id'>"+element.idtache+"</td><td data-column='Email'>"+element.email+"</td><td data-column='Nom'>"+element.nom+"</td></td><td data-column='Prenom'>"+element.prenom+"</td></td><td data-column='TacheNom'>"+element.tachenom+"</td></td><td data-column='Description'>"+element.description+"</td></td><td data-column='Date'>"+element.date+"</td>"+"<td>"+"<div onclick='divinfo(this)'><h1 onclick='iddetache(this)'>"+element.idtache+"</h1></br><h2>"+" email: "+element.email+"</br> nom: "+element.nom+" </br> prenom: "+element.prenom+"</h2></br><h2 onclick='nom(this)'>"+element.tachenom+"</h2><p onclick='description(this)'>"+element.description+"</p></br><h3 >"+element.date+"</h3></br></div>"+"</td></tr>"
   });
  

   document.getElementById("takeTache").innerHTML=str2;
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

 async function envoimail() {
    await fetchid().then((data)=>{
      if(isNaN(data)){
        alert("Veuillez vous connecter!")
      }else{
     
      fetch("/envoi/mail", {
        method: "POST",
        body: JSON.stringify({
          texte: document.getElementById("description").value,
          mail: document.getElementById("nom").value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((resp) => {
        resp.json().then((data) => {
          alert("Envoyer");
        });
      });
    } 
  })
}
  function validMail(mail)
  {
      return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(mail);
  }
 

  //fetchlogin();
  //fetchverifid()

  //fetchdeconnexion();
