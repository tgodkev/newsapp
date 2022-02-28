import React, {useState, useEffect} from 'react';
import Article from "./Article";

function App() {

  const [first, setFirst] = useState([])



  useEffect(()=> {
    async function news(){
      const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=1547cea63d304fe2a6e55ed35ca56f6f')
      const newsData = await response.json();
      setFirst(newsData.articles)
    }
    news()
  }, [])


  function createCard(first){
    console.log(first)
    return(
      <Article
      key={first.id}
      title = {first.title}
      source = {first.source.name}
      time={first.publishedAt}
      content={first.description}
      link={first.url}
      photo={first.urlToImage}
      
       />
    )
  }
  
  return (
    <div>
      {first.map(createCard)}
    </div>
  );
}

export default App;


//api key 1547cea63d304fe2a6e55ed35ca56f6f


