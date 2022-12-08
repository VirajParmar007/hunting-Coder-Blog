import styles from '../../styles/BlogPost.module.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const fs = require('fs');

const slug = (props) => {

  function createMarkup(c) {
    return {__html: c};
  }

  const [blog, setblog] = useState(props.myBlog)

  const router = useRouter()

  return <div className={styles.containers}>
    <main className={styles.main}>
      <h1>{blog && blog.title}</h1>
      <div className={styles.container}>
        <hr></hr>
        {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)} /> }
      </div>
    </main>
  </div>
}

export async function getStaticPaths() {
  let allb = await fs.promises.readdir('blogdata')
  allb = allb.map((item)=>{
    return { params: {slug : item.split(".")[0]}}
  })
  return {
    paths: allb,
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  let data = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')
  let myBlog = JSON.parse(data)
  return {
    props: {myBlog}, // will be passed to the page component as props
  }
}

export default slug;