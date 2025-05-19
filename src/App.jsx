import Footer from "./component/footer";
import Greeting from "./component/greeting";
import Header from "./component/header";
import Main from "./component/main";
import Part1 from "./component/part1";
import Part2 from "./component/part2";
import Part3 from "./component/part3";
import Weather from "./component/part4";
import Style from "./component/Part5";
import Stylecard from "./component/Part6";
import Content from "./component/Part7";
import Userstatus from "./component/Userstatus";
import "./index.css";
import { WiAlien } from "react-icons/wi";
const App= () =>{
return ( 
<div>
<Header/>
<Main/>
<Part1/>
<Footer/>
<Part2/>
<Part3/>
<Weather temprature={13}/>
<Userstatus loggedIn={true}  isAdmin={false} />
<Greeting tod="afternoon"/>
<Style/>
<h2>hello  <WiAlien style={{color:"red"}} /></h2>
<Stylecard/>
<Content/>
</div>
)
}
export default App;