const Weather=(props)=>{

    if(props.temprature>25) return <h1>its cold </h1>
    else if(props.temprature<15) return <h1>its hot</h1>
    else return <h1>its mild </h1>
}


export default Weather;