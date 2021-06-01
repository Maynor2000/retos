import React,{useEffect,useState} from 'react';

const Wather = (props)=>{
    const[clima,setClima] = useState({
        
            coord: {
              lon: 0,
              lat: 0
            },
            weather: [
              {
                id: 0,
                main: "",
                description: "",
                icon: ""
              }
            ],
            base: "",
            main: {
              temp: 0,
              feels_like: 0,
              temp_min: 0,
              temp_max: 0,
              pressure: 0,
              humidity: 0
            },
            visibility: 0,
            wind: {
              speed: 0,
              deg: 0
            },
            clouds: {
              all: 0
            },
            dt: 0,
            sys: {
              type: 0,
              id: 0,
              message:0,
              country: "",
              sunrise: 0,
              sunset: 0
            },
            timezone: 0,
            id: 0,
            name: "",
            cod: 0,
            error:{
                iserror:false,
                code:0,
                message:""
            }
    });
    const[ubication,setUbication] = useState({estado:"yucatan",ciudad:"merida"});
    const[error,setError] = useState({iserror:false,code:0,message:""});
    const handleubication =(ubication1)=>{
        const arr = ubication1.split(",");
        setUbication({
            estado:arr[1],
            ciudad:arr[0]
        })
  }
    useEffect(()=>{
        const handleclima = async()=>{
            try{
                const res = await fetch( `http://api.openweathermap.org/data/2.5/weather?q=${ubication.ciudad},${ubication.estado},484&appid=d23972140f7056c14129207c48301655&lang=es&units=metric`);
                const obj = await res.json();
                if(!res.ok)throw obj;
                setClima(obj);
            }catch(e){
                setError(
                    {
                        iserror:true,
                        code:e.cod,
                        message:e.message
                    }
                    );
            }
        }
        handleclima();
    },[ubication])

    return(
        <>
        {props.render(clima,handleubication,error)}
        </>
    );
}
export default Wather;