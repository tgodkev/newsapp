import React, {useState, useEffect} from 'react';
import Article from "./Article";
import UserArticle from './UserArtilce';
import Header from './Header';
import Footer from './Footer';



function App() {

  const [first, setFirst] = useState([])
  const[query, setQuery] = useState('')
  const [userNews, setUserNews] = useState([])
  const[show, setShow] = useState(true)
  

function handleClick(e){

   
  getNews()
  setShow(false)

    e.preventDefault()
}


useEffect(()=> {
  async function news(){
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=1547cea63d304fe2a6e55ed35ca56f6f')
    const newsData = await response.json();
    setFirst(newsData.articles)
    
  }
  news();
  
},  [])



  async function getNews(){
    const answer = await fetch('https://newsapi.org/v2/everything?q='+ query +'&from=2022-03-01&sortBy=popularity&language=en&apiKey=1547cea63d304fe2a6e55ed35ca56f6f')
    const data = await answer.json();
    setUserNews(data.articles)
    //console.log(data)
    }
  
  

  function createCard(first, n){
    return(
      <Article
      key={n}
      title = {first.title}
      author={first.author}
      time={first.publishedAt}
      content={first.description}
      link={first.url}
      photo={first.urlToImage}
      
       />

       
    )
  }

  function createUserCard(userNews, i){
    return(
      <UserArticle
        key={i}
        title = {userNews.title}
        author={userNews.author}
        time={userNews.publishedAt}
        content={userNews.description}
        link={userNews.url}
        photo={userNews.urlToImage}
      

      />
    )
  }

  
  
  return (
    <div>
    <Header />
    <form onSubmit={handleClick} className='input'>
    <input type="text" placeholder='Search.' onChange={ e => setQuery(e.target.value)} />
    <button >search.</button>
    </form>
     { show &&<div className='container'>
        {first.map(createCard)}
    </div>}

       <div className='container'>
        {userNews.map(createUserCard)}
       </div>

    <Footer />
    </div>
  );
}

export default App;





