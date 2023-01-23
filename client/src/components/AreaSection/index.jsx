import React, { useEffect , useState } from 'react';
import axios from 'axios';

import './index.scss'
import Box from './Box/index'

const Index = () => {
  const [areas,setAreas] = useState([])
  const url = 'http://localhost:1515/areas'  
  useEffect(()=>{
    getData()
  })
   async function getData(){
    let result = await axios.get(url)
    setAreas(result.data)
  }
  return (
      <section className="area">
        <div className="container">
        <h2 className="heading"> Practice Areas </h2>
        <p className="subheading"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="row">
          {areas.map(x => <Box data={x}  />  ) }
        </div>
        </div>
      </section>
  );
}

export default Index;
