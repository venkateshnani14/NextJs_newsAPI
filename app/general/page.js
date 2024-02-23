'use client';
import Image from "next/image";
import Navbar from '../components/Navbar'
import { useState,useEffect } from 'react'
export default async function General(){
  const [newsCategory,setNewsCategory] = useState('general')
  useEffect(()=>{
    DataFetching();
  },[newsCategory])
  async function DataFetching(){
    let source = `https://newsapi.org/v2/top-headlines?country=us&category=${newsCategory}&apiKey=26fd714f5d46482b924a665ce471ef76`
    let response = await fetch(source);
    let jsonData = await response.json();
    console.log(jsonData)
    return jsonData;
  }
  let finalJsonData = await DataFetching();
  let articles = [];
  articles = finalJsonData.articles
  function categoryRetriever(category){
    setNewsCategory(category);
 }
  return(
    <>
    <div className="min-h-screen pb-6 bg-white">
    <Navbar newsCategory = {categoryRetriever}/>
    <div>
      <p></p>
    </div>
    <div>
      <div className='flex flex-wrap justify-center'>
        {articles?articles.map((d,i)=>{return(
        <div class="max-w-sm w-full md:w-1/2 lg:w-1/3 xl:w-1/4 rounded overflow-hidden shadow-lg p-2 m-3">
        <img class="w-full" src={d.urlToImage?d.urlToImage:"/components/img/blackImg.png"} alt="No image" />
        <div class="px-6 py-4">
          <div class="font-bold text-sm sm:text-sm md:text-lg lg:text-xl xl:text-xxl mb-2">{d.title?d.title:"No title"}</div>
          <p class="text-gray-500 text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl">{d.description?d.description:"No description"}</p>
        </div>
        <div className="flex content-center">
          <button id="myBtn" onClick={()=>{document.getElementById("myBtn"),addEventListener("click",function(){
            window.location.href = d.url;
          })}} className="rounded bg-yellow-400 hover:bg-yellow-600 px-3 py-1 my-2 mx-auto text-white">Read more</button>
        </div>
      </div>
      )}):"No data"}
      </div>
    </div>
    </div>
    <footer className="bg-black text-slate-400 h-64 flex items-end justify-center">
      <div className="">
        <ul className='mb-4'>
          <li className='pb-4'><a className='hover:underline hover:pointer'>About us</a></li>
          <li className='pb-4'><a className='hover:underline'>Careers</a></li>
          <li className='pb-4'><a className='hover:underline'>Know our founders</a></li>
          <li className='pb-4'><a className='hover:underline'>Subscribe to our newsletter</a></li>
        </ul>
        <span id="copyright" className="text-xs md:text-sm text-white font-bold">© All rights reserved</span>
      </div>
    </footer>
    </>
  );


}