import React, { useEffect, useState } from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import NewsArticle from "./NewsArticle"
import { v4 as uuidv4 } from 'uuid';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import ExpandLessSharpIcon from '@material-ui/icons/ExpandLessSharp';
const newApi = "https://newsapi.org/v2/top-headlines?country=us&apiKey=1a243c6d77bb49a68e623411cb27068f"
function Widgets() {

    const [headLines, setHeadlines] = useState([])
    const [itemsToShow, setItemToShow] = useState(4)
    const [expanded, setExpended] = useState(false)

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
                    setHeadlines(news.slice(0, 6))

                })
        getNewsData();
    }, [])

    const showMore = () => {

        if (itemsToShow === 3) {
            setItemToShow(headLines.length)
            setExpended(true)
        } else {
            setItemToShow(3)
            setExpended(false)
        }
    }

    return (
        <div className="widgets">
            <div className="widget__header">
                <h2>LinkedIn News</h2>
                <InfoIcon className="widget__infoIcon" />
            </div>
            <div className="widget__body">
                {headLines.slice(0, itemsToShow).map((news, i) =>
                    <NewsArticle key={uuidv4()} news={news}></NewsArticle>
                )}

                <p onClick={showMore}>
                    {expanded ? (
                        <span>Show less <ExpandMoreSharpIcon /></span>
                    ) : (
                        <span>Show more <ExpandLessSharpIcon /></span>
                    )}
                </p>
            </div>

        </div >
    )
}

export default Widgets