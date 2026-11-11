import Student from './components/Student.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
function App() {
  return(
    <>
      <Header/>
      <Student name="Babu" age="20"/>
      <Student name="Ravi" age="25"/>
      <Student name="Sravani" age="23"/>
      <Footer/>
    </>
  );
};

export default App;