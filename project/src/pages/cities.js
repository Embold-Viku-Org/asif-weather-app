import './cities.css'

const City = ()=>{
    return(
        <div className="city-content">
            <div className='city-header'>
                <h2>Cities</h2>
                <button onClick={()=>console.log('button is clicked')}>&#43;</button>
            </div>
            <hr />
            <div className='city-init'>
                <p>You haven't selected any city</p>
            </div>
        </div>
    )
}

export default City;