import Markets from "../components/markets"
import Trending from '../components/trending'

const CryptoHome = () => {
  return (
    <div className='wrapper-container'>
      <Trending/>
      <Markets/>
    </div>
  )
}

export default CryptoHome
