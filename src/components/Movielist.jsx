import React from 'react';
import Card from './Card';
import hiddenlove from '../assets/hiddenlove.jpg';
import startup from '../assets/startup.png';
import twenty5 from '../assets/2521.jpg';
import lovelyrun from '../assets/lovelyrunner.png';
import perfectmatch from '../assets/perfectmatch.jpg';
import glory from '../assets/the glory.jpg';
import ancient from '../assets/ancientlove.jpg';
import tillmoon from '../assets/bachloc.jpg';
import firstfrost from '../assets/firstfrost.jpg';
import rational from '../assets/rationallife.jpg';
import goblin from '../assets/goblin.png';
import squid from '../assets/squidgame.jpg';
import melo from '../assets/melomubi.png';
const Movielist = () => {
    return (
        <div className="container">
            <Card src={twenty5} title="Twenty Five, Twenty One" description="It was a perfect love" link="https://mydramalist.com/695149-twenty-five-twenty-one"/>

            <Card src={startup} title="Start Up" description="Imagine you as a CEO" link="https://mydramalist.com/51909-sandbox"/>
            <Card src={lovelyrun}title="Lovely Runner" description="The plot twist" link="https://mydramalist.com/750099-time-walking-on-memory" />
            <Card src={hiddenlove} title="Hidden Love" description="Have You ever wished your first love will be your last one?" link="https://mydramalist.com/729705-hidden-love"/>
            
            <Card src={firstfrost}title="The First Frost" description="You will have a man who always love you like that" link="https://mydramalist.com/722171-first-frost" />
            <Card src={rational}title="Rational Life" description="Everything will be fine" link="https://mydramalist.com/68431-wu-fa-lian-ai-de-li-zhi-pai"/>
            <Card src={melo} title="Melo MuBi" description="It's just so relevant" link="https://mydramalist.com/758615-melo-movie" />
            <Card src={goblin}title="Goblin" description="Make a wish with Goblin" link="https://mydramalist.com/18452-goblin"/><Card src={glory}title="The Glory" description="A revenge drama that you don't want to miss" link="https://mydramalist.com/685237-untitled-kim-eun-sook-project" />
            <Card src={perfectmatch}title="Perfect Match" description="Different stories but all interesting" link="https://mydramalist.com/760155-perfect-match" />
            <Card src={ancient}title="Ancient Love" description="Try it and thank me later" link="https://mydramalist.com/59327-the-legend-of-gu-and-jue" />
            <Card src={tillmoon}title="Till The End Of The Moon" description="Bawled my eyes out" link="https://mydramalist.com/693513-hei-yue-guang-wen-na-be-ju-ben" />
        </div>
    );
}
export default Movielist;