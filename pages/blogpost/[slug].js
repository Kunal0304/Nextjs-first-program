import React, { useEffect, useState } from 'react'
import style from '../../styles/blog.module.css'
import { useRouter } from 'next/router'
// import Blog from '../blog'

const slug = (props) =>
{
  const [itemblog, setitemBlog] = useState(props.myblog)
  const router = useRouter()
  // const { slug } = router.query

  // useEffect(() =>
  // {
  //   if (!router.isReady) return;
  //   const { slug } = router.query
  //   // console.log(router.query)
  //   fetch(`http://localhost:3000/api/getblogs?slug=${slug}`).then(
  //     (a) => { return a.json(); }).then(
  //       (parsedata) =>
  //       {
  //         // console.log(parsedata, "parsedata")
  //         setitemBlog(parsedata)

  //       }).catch(err => console.log(err))
  // }, [router.isReady])
  // console.log(itemblog)

  return (
    <div className={style.container}>
      {/* <h2>Post:{router.query.slug}</h2> */}
      <h1>{itemblog.title}</h1>
      <hr />
      <p>{itemblog.content}</p>
    </div>
  )
}

export async function getServerSideProps(context)
{
  // console.log(context.query)
  const { slug } = context.query
  const data = await fetch(`http://localhost:3000/api/getblogs?slug=${ slug }`)
  const myblog = await data.json()

  return {
    props: { myblog }, // will be passed to the page component as props
  }
}

export default slug