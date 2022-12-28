// Write your code here
import {Component} from 'react'
import './index.css'

let length

class ReviewsCarousel extends Component {
  state = {index: 0}

  onClickLeftArrow = () => {
    this.setState(prevState => {
      if (prevState.index === 0) {
        return {index: 0}
      }
      return {index: prevState.index - 1}
    })
  }

  onClickRighttArrow = () => {
    this.setState(prevState => {
      if (prevState.index === length - 1) {
        return {index: 0}
      }
      return {index: prevState.index + 1}
    })
  }

  render() {
    const {reviewsList} = this.props
    length = reviewsList.length
    const {index} = this.state

    const {imgUrl, username, companyName, description} = reviewsList[index]

    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} />

        <div className="button-container">
          <button
            type="button"
            testid="leftArrow"
            onClick={this.onClickLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>

          <p className="user-name">{username}</p>
          <button
            type="button"
            testid="rightArrow"
            onClick={this.onClickRighttArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }
}
export default ReviewsCarousel
