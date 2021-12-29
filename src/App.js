
/**
 * Starting point for the application
 */
import Header from "./components/layouts/header.component";
import Footer from "./components/layouts/footer.component";
import Content from "./components/layouts/content.component";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";

function App() {

  const [user, setUser] = useState({});
  /**
   * Function to handle the function when the user logs in successfully
   */
  const userLoggedInCallback = user => {
    setUser(user);
  }
  
  return (
    <Router>
      <div className="back-to-top"></div>

      <Header user={user}/>
      <main>
        <Content userLoggedIn={userLoggedInCallback} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
