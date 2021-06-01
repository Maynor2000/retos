import React,{useRef,useEffect} from 'react';
import animate from './error.png';
import './modal.css';
const Section = (props)=>{
    const clima = props.clima;
    const error = props.error;
    const modal = useRef();
    useEffect(()=>{
        if(error.iserror)modal.current.style.setProperty("visibility","visible");
        else modal.current.style.setProperty("visibility","hidden");
        setInterval(()=>{
            modal.current.style.setProperty("visibility","hidden");
        },9000)
    })

    const handleubication = (e)=>{
        e.preventDefault();
        props.func(e.target.ubication.value);
        e.target.ubication.value="";
    }
    return(
        <section className="section" style={{height:"100vh",margin:"-36px -12px",paddingRight:"0"}}>
            <div className="columns" style={{height:"100%"}}>
                <div className="column is-one-third " style={{background:"linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
                                                            ,color:"white"}}>
                   <div className="columns is-multiline" style={{textAlign:"center"}}>
                        <div className="column is-full" style={{position:"relative"}}>
                            <form onSubmit={handleubication}>
                                <div className="columns is-mobile">
                                    <div  className="column is-two-thirds">
                                        <input name="ubication" className="input is-rounded" type="text" placeholder="Ciudad, Estado"/>
                                    </div>
                                    <div  className="column ">
                                        <button type="submit" className="button is-link">Buscar</button>
                                    </div>
                                </div>
                            </form>
                            <article ref={modal} className="message is-small md">
                                <div className="message-header">
                                    <p>{error.code}</p>
                                    </div>
                                    <div className="message-body">
                                        <img src={animate} alt="404"></img><p>{error.message}</p>
                                    </div>
                            </article>
                        </div>
                        <div className="column is-full">
                            <section style={{borderRadius:"80%"
                                            ,background:"rgb(255,255,255,.4)"
                                            ,width:"200px"
                                            ,height:"200px"
                                            ,margin:"auto"
                                            ,display:"flex"
                                            ,flexDirection:"column"
                                            ,alignItems:"center"
                                            ,justifyContent:"center"
                                            ,boxShadow:"2px 2px 5px rgb(0,0,0,.4"}}>
                                <p>{clima.name}</p>
                                <div className="columns is-mobile" style={{padding:"0"
                                                                           ,margin:"0"}}>
                                    <div className="column" style={{padding:"0"
                                                                    ,display:"flex"
                                                                    ,alignItems:"center"
                                                                    ,justifyContent:"center"}}>
                                        <p><span style={{fontSize:"2em"}}>{Math.round(clima.main.temp)}</span>°C</p>
                                    </div>
                                    <div className="column" style={{padding:"0"}}>
                                        <img src={`http://openweathermap.org/img/wn/${clima.weather.map((el)=>(el.icon))}@2x.png`} alt="clima"></img>
                                    </div>
                                </div>
                                {clima.weather.map((el)=>(
                                el.description.toUpperCase()
                                ))}
                                <p>sensación{"\u00a0"}{Math.round(clima.main.feels_like)}°C</p>
                            </section>
                        </div>
                        <div className="column is-full">
                            <div className="columns is-mobile" style={{background:"rgb(255,255,255,.4)"}}>
                                <div className="column">
                                    <section>
                                        <h1>Nubosidad</h1>
                                        <p><span>{clima.clouds.all}</span>%</p>
                                    </section>
                                </div>
                                <div className="column">
                                    <section style={{borderLeft:"1px solid",borderRight:"1px solid"}}>
                                        <h1>Tem Max</h1>
                                        <p><span>{clima.main.temp_max}</span>°C</p>
                                    </section>
                                </div>
                                <div className="column">
                                    <section >
                                        <h1>Tem Min</h1>
                                        <p><span>{clima.main.temp_min}</span>°C</p>
                                    </section>              
                                </div>
                            </div>
                        </div>
                        <div className="column is-full">
                                
                        </div>
                   </div>  
                </div>
                <div className="column " style={{background:" linear-gradient(158deg, rgba(110,63,152,1) 35%, rgba(174,129,151,0.9920343137254902) 100%)"}}>
                    <div className="columns is-multiline" style={{height:"400px"
                                                                ,color:"white"
                                                                ,textAlign:"center"}}>
                        <div className="column is-half">
                            <section style={{background:"rgb(255,255,255,.4)"
                                            ,height:"100%"
                                            ,boxShadow:"2px 2px 5px rgb(0,0,0,.4"}}>
                                <h1>Velocidad del viento</h1>
                                <p><span style={{fontSize:"2em"}}>{clima.wind.speed}</span>mph</p>
                            </section>
                        </div>
                        <div className="column is-half">
                            <section style={{background:"rgb(255,255,255,.4)"
                                            ,height:"100%"
                                            ,boxShadow:"2px 2px 5px rgb(0,0,0,.4"}}>
                                <h1>Visibilidad</h1>
                                <p><span style={{fontSize:"2em"}}>{clima.visibility}</span>%</p>
                            </section>
                        </div>
                        <div className="column is-half">
                            <section style={{background:"rgb(255,255,255,.4)"
                                            ,height:"100%"
                                            ,boxShadow:"2px 2px 5px rgb(0,0,0,.4"}}>
                                <h1>Humedad</h1>
                                <p><span style={{fontSize:"2em"}}>{clima.main.humidity}</span>%</p>
                            </section>
                        </div>
                        <div className="column is-half">
                            <section style={{background:"rgb(255,255,255,.4)"
                                            ,height:"100%"
                                            ,boxShadow:"2px 2px 5px rgb(0,0,0,.4"}}>
                                <h1>Presión atmosférica</h1>
                                <p><span style={{fontSize:"2em"}}>{clima.main.pressure}</span>%</p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Section;