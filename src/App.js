import "./style.css";
import Header from "./components/header";
import Categories from "./components/categories";
import Banner from "./components/Banner";
import Recommend from "./components/recommend";

function App(){
    return(
        <>
        <Header></Header>
        <Categories></Categories>
        <Banner></Banner>
        <Recommend></Recommend>
        </>
    )
}

export default App;