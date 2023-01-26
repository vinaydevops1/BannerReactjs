// Write your code here.
import './index.css'

export const BannerCard1 = props => {
  const {bannerCard1} = props
  const {headerText, description, className} = bannerCard1
  const containerBorder = `content ${className}`
  return (
    <li className={containerBorder}>
      <div className="">
        <h1 className="heading">{headerText}</h1>
        <p className="paragraph">{description}</p>
        <button type="submit" className="button">
          Show more
        </button>
      </div>
    </li>
  )
}

export const BannerCard2 = props => {
  const {bannerCard2} = props
  const {headerText, description, className} = bannerCard2
  const containerBorder = `content ${className}`
  return (
    <li className={containerBorder}>
      <div className="">
        <h1 className="heading">{headerText}</h1>
        <p className="paragraph">{description}</p>
        <button type="submit" className="button">
          Show more
        </button>
      </div>
    </li>
  )
}
export const BannerCard3 = props => {
  const {bannerCard3} = props
  const {headerText, description, className} = bannerCard3
  const containerBorder = `content ${className}`
  return (
    <li className={containerBorder}>
      <div className="">
        <h1 className="heading">{headerText}</h1>
        <p className="paragraph">{description}</p>
        <button type="submit" className="button">
          Show more
        </button>
      </div>
    </li>
  )
}
