import React from 'react';
import { houseObjOne, houseObjTwo, houseObjThree} from './Data';
import { InfoSection } from '../../components';


const Home = () => {
  return (
    <>
      <InfoSection {...houseObjOne}/>
      <InfoSection {...houseObjTwo}/>
      <InfoSection {...houseObjThree}/>
    </>
  )
} 

export default Home;