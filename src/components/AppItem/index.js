// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails
  return (
    <>
      <li className="li-con">
        <img className="image" src={imageUrl} alt={appName} />
        <p className="description">{appName}</p>
      </li>
    </>
  )
}

export default AppItem
