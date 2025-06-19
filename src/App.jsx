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
import Data from "./component/part8";
import Movies from "./component/part9";
import Userstatus from "./component/Userstatus";
import "./index.css";
import { WiAlien } from "react-icons/wi";
import Practice from "./component/practice";
import Todo from "./component/part10";
// import Copycontent from "./component/part12";
import Part13 from "./component/part13";
import Part14 from "./component/part14";
import Part15 from "./component/part15";
import Countereffect from "./component/countereffect";
import Fetch from "./component/fetchdataeffect";
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
<Data/>
<Movies/>
<Todo/>
{/* <Copycontent /> */}
<Practice/>
<Part13/>
<Part14/>
<Part15/>
<Countereffect/>
<Fetch/>
</div>
)
}
export default App;