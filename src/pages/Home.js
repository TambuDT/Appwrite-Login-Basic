import React from 'react'
import { useAuth } from "../util/AuthContext";
function Home() {
  const auth = useAuth(); 
  function handleLogout(){
    try {
      // Chiamata alla funzione logoutUser utilizzando il contesto
      auth.logoutUser();
      // Qui puoi aggiungere la navigazione a una nuova pagina o eseguire altre azioni dopo il login
    } catch (error) {
      console.error("Errore durante il login:", error);
    }
  }
    return (
    <div>
      <h1>Homepage</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home