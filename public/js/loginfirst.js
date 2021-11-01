async function fetchlogin(){
    console.log(document.getElementById("login2").value);
      const response = await fetch(
        "http://localhost:8000/login",
        {  headers: {
            'Accept': 'application/json', 'Content-Type': 'application/json'
            
          },
          method: "POST",
          body: JSON.stringify({
            email: document.getElementById("login2").value,
  
            password:document.getElementById("password").value
          }),
          mode:'cors',
          credentials:'same-origin',
        
        }
      );
  
      const resbis = await response.json();
      
      console.log(resbis);
      console.log(resbis.message.includes("Connecté"));
      if(resbis.message.includes("Connecté")||resbis.message.includes("Connecte")){
        window.location.href = "http://localhost:8000/page";}
    
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
        if(resbis.message.includes("Connecte")){
            window.location.href = "http://localhost:8000/page";
        return await resbis.message.idutilisateur;
      
      }
        else { 
          
         return await "pas connecté"; 
        }
     
      }
      document.getElementById("login").addEventListener('click', function(event){
    event.preventDefault();
    fetchlogin();
    return false;
    /* Do some other things*/
});