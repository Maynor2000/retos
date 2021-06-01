import React from 'react';
import Section from './section';
import Wather from './Wather';
const Appwather = ()=>{
    return(
        <>
        <Wather render={(clima,func,error)=>(<Section clima={clima} func={func} error={error}/>)}/>
        </>
    );
}
export default Appwather;