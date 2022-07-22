import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import style from '../styles/blog.module.css'


const Blog = (props) =>
{
  // console.log(props ,"props")
  const [itemblogs, setitemBlogs] = useState(props.mydata)

  //*************normlly client side fetching data**********************// 

  // useEffect(() =>
  // {
  //   // console.log("useEffect is running")
  //   fetch("http://localhost:3000/api/blogs").then(
  //     (a) => { return a.json(); }).then(
  //       (parsedata) =>
  //       {
  //         // console.log(parsedata, "parsedata")
  //         setitemBlogs(parsedata)

  //       }).catch(err => console.log(err))
  // }, [])

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

  //*************serverside fetching data**********************// 

export async function getServerSideProps(context)
{
  let data = await fetch("http://localhost:3000/api/blogs")
  let mydata = await data.json()
  
  return {
    props: { mydata }, // will be passed to the page component as props
  }
}

export default Blog