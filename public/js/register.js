async function fetchregister(){
    
    const response = await fetch(
      "http://localhost:8000/register",
      {
        method: "POST",
        body: JSON.stringify({
          nom: document.getElementById("nom").value,
          prenom:document.getElementById("description").value,
          email: await fetchid(),
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
    
  }