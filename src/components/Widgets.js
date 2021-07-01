import React, { useEffect, useState } from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import NewsArticle from "./NewsArticle"
import { v4 as uuidv4 } from 'uuid';
const newApi = "https://newsapi.org/v2/top-headlines?country=us&apiKey=1a243c6d77bb49a68e623411cb27068f"
function Widgets() {
    const [headLine, setHeadline] = useState([])
    useEffect(() => {
        const getNewsData = async () =>
            fetch(newApi)
                .then(res => res.json())
                .then(data => {
                    const news = data.articles.filter((news) => news.author !== "")
                        .map(news => ({
                            title: news.title,
                            author: news.author
                        }))
                    setHeadline(news);
                })
        getNewsData();
    }, [])

    return (
        <div className="widgets">
            <div className="widget__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            <div className="widget__body">
                {
                    headLine.map(news => <NewsArticle key={uuidv4()} news={news} />)
                }
            </div>

        </div>
    )
}

export default Widgets