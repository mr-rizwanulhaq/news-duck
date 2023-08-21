import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    let { title, description, imgUrl, newsUrl, date } = this.props;
    return (
      <div >
        <div className="card embed-responsive-item "  >
          <img src={imgUrl} className="card-img-top "  alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">Date: {new Date (date).toLocaleString()}</small></p>
            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark" 
            >Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
