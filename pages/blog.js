import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import style from '../styles/blog.module.css'


const Blog = () =>
{
  const [itemblogs, setitemBlogs] = useState([])

  useEffect(() =>
  {
    console.log("useEffect is running")
    fetch("http://localhost:3000/api/blogs").then(
      (a) => { return a.json(); }).then(
        (parsedata) =>
        {
          // console.log(parsedata, "parsedata")
          setitemBlogs(parsedata)

        }).catch(err => console.log(err))
  }, [])

  // console.log(blogs, "blog useState is not running yet")
  return (
    <div className={style.container}>

      {
        itemblogs?.map(blogitem =>
        {
          return <div className="blog" key={blogitem.title}>
            <Link href={`/blogpost/${blogitem.slug}`}>
              <h3 className="blogHead">{blogitem.title}</h3>
            </Link>
              <p className="blogAbout">{blogitem.content.substr(0, 140)}...</p>
          </div>
        })
      }
    </div>
  );
}

export default Blog