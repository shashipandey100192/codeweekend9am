import React, { Fragment } from 'react'
import About from './About';
import Contactpage from './Contactpage';

function Myoperations() {
const name = "mohan singh";
const age = 20;
const b = <h3>this is element inside expression</h3>
const salary = 2100;

  return (
    <Fragment>
        <h1 >this is expression {name} age is : {age}</h1>
        <h2>{50+60}</h2>
        <h1>{"khjhjh"}</h1>
        <div>{b}</div>
        <section> {<About/>}</section>
        <h1>{salary >=1000 ? "large" : "small"}</h1>
        <h1>{salary >=1000 ? <h1>this is large value</h1> : <h1>Small value {salary}</h1>}</h1>
        <h1>{salary >=1000 ? <About/> : <Contactpage/>}</h1>
        <h1>{salary >=2000 ? "first value" : salary >=1500 ? "second value" : salary>=1000 ? "Third value" : "pass value"}</h1>

    </Fragment>
  )
}

export default Myoperations