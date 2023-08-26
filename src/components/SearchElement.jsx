import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import TrendingSlider from './TredingSlider'
import { useParams,Link } from 'react-router-dom'


const SearchElement = () => {
    // console.log(useParams())
    const {searchTerm} = useParams();

    
    const [data, setData] = useState([])

    useEffect(() => {
  
      const fetchData = async () => {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        const data = await api.json();
  
        // console.log(data.meals);
        setData(data.meals)
        // console.log(data)
      }
  
      fetchData();
    }, [searchTerm])

  return (
    <>
    <Navbar />
<div style={{
    width:'90%',
    margin:'auto',
    display:'grid',
    gridTemplateColumns:'repeat(auto-fit, minmax(15rem, 1fr))',
    gridGap:'1rem',
    marginTop:'2rem'

}}>


 {
    data.map((d)=>{
        return(
            <Link to={`/${d.idMeal}`} className='link'>
            <div style={{textAlign:'center'}}>
                <div className="img">
                    <img src={d.strMealThumb} alt="" style={{width:'13rem'}} />
                </div>
                 <h3>{d.strMeal}</h3>
            </div>
            </Link>
        )
    })
 }
 </div>

 <TrendingSlider />
    
    </>
  )
}

export default SearchElement