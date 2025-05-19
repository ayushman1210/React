const Greeting =(props)=>{
if(props.tod=="morning"){return <h1>"good morning"</h1>}
else if(props.tod=="afternoon"){return <h1>good afternoon</h1>}
else{return <h1>good night </h1>}
}


export default Greeting;