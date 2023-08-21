import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spin from './Spin';
import PropTypes from 'prop-types'



export class News extends Component {

  static defaultProps = {

    country: 'us',
    pageSize: 12,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,

    }
  }

  async updateNews(){    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1fa6b9a8f22245a686981d02d3fb73ea&page=${this.state.page}&pageSize=${this.props.pageSize}`

    this.setState({ loading: true, articles: [] });
    let data = await fetch(url);
    let parsdData = await data.json();

    this.setState({
      articles: parsdData.articles,
      totalResults: parsdData.totalResults,
      loading: false
    })
  }

  async componentDidMount() {
      this.updateNews();
  }

  ClickPrevious = async () => {
    this.updateNews();
    this.setState({ page: this.state.page - 1})

  }

  ClickNext = async () => {
    this.updateNews();

    this.setState({ page: this.state.page + 1})

  }


  
  render() {
     let {newsCategory} = this.props;
    return (
     
      <div className='container my-3'>
        <h2>NewsDuck - {newsCategory}</h2>

        {this.state.loading && <Spin />}

        <div className='row'>
          {this.state.articles.map((element) => {
            return <div className='col-md-3 my-3' key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 30) : "Click Read More to Read the article"}
                description={element.description ? element.description.slice(0, 80) : "Click Read More to Read the article"}
                newsUrl={element.url}
                imgUrl={element.urlToImage ? element.urlToImage : "https://veechxveech.com/wp-content/uploads/2014/11/VEECH_ORF-NEWSROOM-01w-1536x864.jpg"}
                author={element.author? element.author:"Unknown"}
                date={element.publishedAt}> 
              </NewsItem>
            </div>

          })}

        </div>
        <div className="container d-flex justify-content-between my-1">
          <button disabled={this.state.page <= 1} onClick={this.ClickPrevious} type="button" className="btn btn-dark"> &larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.ClickNext} type="button" className="btn btn-dark">Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News


