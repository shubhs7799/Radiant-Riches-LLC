import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from "./App.scss";
function App() {
  return (
    <>
        <Header/>
        <Body className={styles.pages}/>
        {/* <Footer/> */}
</>
  );
}

export default App;
