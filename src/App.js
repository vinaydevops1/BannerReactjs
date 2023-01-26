import './App.css'
import {
  BannerCard1,
  BannerCard2,
  BannerCard3,
} from './components/BannerCardItem'

const bannerCardsList = [
  {
    id: 1,
    headerText: 'The Seasons Latest',
    description: 'Get the seasons all latest designs in a flick of your hand',
    className: 'card-1',
  },
  {
    id: 2,
    headerText: 'Our New Designs',
    description:
      'Get the designs developed by our in-house team all for yourself',
    className: 'card-2',
  },
  {
    id: 3,
    headerText: 'Insiders',
    description: 'Get the top class products for yourself with an extra off',
    className: 'card-3',
  },
]

const App = () => (
  <div className="bg-container">
    <ul className="main-container">
      <BannerCard1
        bannerCard1={bannerCardsList[0]}
        key={bannerCardsList[0].id}
      />
      <BannerCard2
        bannerCard2={bannerCardsList[1]}
        key={bannerCardsList[1].id}
      />
      <BannerCard3
        bannerCard3={bannerCardsList[2]}
        key={bannerCardsList[2].id}
      />
    </ul>
  </div>
)

export default App
