import './post.css'
import { PImg } from '../../index.js'

export default function Post() {
  return (
    <div className='post'>
        <img className='postImg' src={PImg} alt="" />

        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum, dolor sit amet.
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe porro corporis dolor, labore impedit laborum suscipit asperiores quis accusamus, quidem dolore laudantium illo id aliquid perspiciatis eligendi qui architecto dolorum!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe porro corporis dolor, labore impedit laborum suscipit asperiores quis accusamus, quidem dolore laudantium illo id aliquid perspiciatis eligendi qui architecto dolorum!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe porro corporis dolor, labore impedit laborum suscipit asperiores quis accusamus, quidem dolore laudantium illo id aliquid perspiciatis eligendi qui architecto dolorum!</p>

    </div>
  )
}
