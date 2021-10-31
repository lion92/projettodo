async function fetchregister(){
   
    const response = await fetch(
      "http://localhost:8000/register",
      {
        method: "POST",
        body: JSON.stringify({
          nom: document.getElementById("nom").value,
          prenom:document.getElementById("prenom").value,
          email: document.getElementById("email").value,
          password:document.getElementById("password").value

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
    if(resbis.message.includes("Utilisateur enregistrer")){
      window.location.href = "http://localhost:8000/loginfirst";
    }
  }

  document.getElementById("register").addEventListener('click', function(event){
    event.preventDefault();
    fetchregister();
    return false;
    /* Do some other things*/
});