import {useState,useEffect} from 'react';


const Part14 = () => {
    const [data,setdata]=useState([]);


    useEffect(()=>{
        async function getData(){
            const response=await fetch("https://dummyjson.com/quotes")
            const data =await response.json()

            if(data && data.quotes.length){setdata(data.quotes)}
        }
        getData();
    },[])
  return (
     <div>
      <section>
        <ul>
          {data.map((d) => (
            <li key={d.id}>
              <strong>{d.quote}</strong> <br />
              <em>{d.author}</em>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Part14;