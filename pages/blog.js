import React from 'react'
import Link from 'next/link'
import style from '../styles/blog.module.css'
function blog() {
  return (
    <div className={style.container}>
        <Link href={"./routerdemo/javascriptBlogPost "}>
      <div className="blog">
          <h3 className="blogHead">JavaScript</h3>
          <p className="blogAbout">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            minima rerum, iusto deserunt dolor dolorem unde ex vero
            exercitationem commodi consectetur molestiae nobis nulla quis ipsum
            eaque iste similique perferendis.
          </p>
      </div>
        </Link>

      <div className="blog">
          <h3 className="blogHead">JavaScript</h3>
          <p className="blogAbout">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            minima rerum, iusto deserunt dolor dolorem unde ex vero
            exercitationem commodi consectetur molestiae nobis nulla quis ipsum
            eaque iste similique perferendis.
          </p>
      </div>

      <div className="blog">
        <h3 className="blogHead">JavaScript</h3>
        <p className="blogAbout">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          minima rerum, iusto deserunt dolor dolorem unde ex vero exercitationem
          commodi consectetur molestiae nobis nulla quis ipsum eaque iste
          similique perferendis.
        </p>
      </div>

      <div className="blog">
        <h3 className="blogHead">JavaScript</h3>
        <p className="blogAbout">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          minima rerum, iusto deserunt dolor dolorem unde ex vero exercitationem
          commodi consectetur molestiae nobis nulla quis ipsum eaque iste
          similique perferendis.
        </p>
      </div>
    </div>
  );
}

export default blog