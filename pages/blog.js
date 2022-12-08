import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from '../styles/Blog.module.css'

const fs = require('fs');

const Blog = (props) => {

  // useEffect(() => {
  //   async function fetchAPI() {
  //     const url = 'http://localhost:3000/api/blogs'
  //     const data = await fetch(url)
  //     let parsedData = await data.json()
  //     setblogs(parsedData)
  //   }
  //   fetchAPI()
  // }, [])

  const [blogs, setblogs] = useState(props.allBlogs)

  const [count, setcount] = useState(2)

  const fetchMoreData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count+2}`)
    setcount(count + 2)
    let data = await d.json()
    setblogs(data)
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>

        <InfiniteScroll
          dataLength={blogs.length}
          next={fetchMoreData}
          hasMore={props.totalResults !== blogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>You are all caught up!</b>
            </p>
          }>
          {blogs.map((blogElement) => {
            return <div key={blogElement.title} className="blogItem">
              <Link href={`/blogpost/${blogElement.slug}`}>
                <h2>{blogElement.title}</h2></Link>
              <p>{blogElement.metacontent.substr(0, 300) + "..."}</p>
            </div>
          })}
        </InfiniteScroll>
      </main>
    </div>
  )
}

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let totalResults = data.length;
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < 6; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
    allBlogs.push(JSON.parse(myfile))
  }
  return {
    props: { allBlogs, totalResults }, // will be passed to the page component as props
  }
}

export default Blog