import React from 'react'
import Apply from './Apply/Apply';
import Cards from './Cards/Cards';
import Content from './ContentMore/Content';
import Home from './home/home';
import Jop from './Jop/Jop';
import Post from './Post/Post';
import Walk from './Walk/Walk';


export default function Home_Components() {
  return (
    <div>
      <Home />
      <Cards />
      <Walk />
      <Post />
      <Apply />
      <Content />
      <Jop/>
    </div>
  );
}
