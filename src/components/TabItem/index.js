// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    updateActiveTabId(tabId)
  }

  const activeTab = isActive ? 'active-btn' : ''
  return (
    <li className="li-container ">
      <button type="button" className={`btn ${activeTab}`} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
