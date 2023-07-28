import './singlepost.css'
import { SPImg } from '../../index.js'

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src={SPImg} alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="siglePostAuthor">Author: <b>Suman</b></span>
                <span className="siglePostDate">1 hour ago</span>
            </div>
            <p className='singlePostDesc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis totam et repellendus nemo, impedit pariatur saepe, voluptas voluptate ipsum eius inventore minima? Suscipit iusto vitae deserunt deleniti magnam consequuntur natus.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis totam et repellendus nemo, impedit pariatur saepe, voluptas voluptate ipsum eius inventore minima? Suscipit iusto vitae deserunt deleniti magnam consequuntur natus.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis totam et repellendus nemo, impedit pariatur saepe, voluptas voluptate ipsum eius inventore minima? Suscipit iusto vitae deserunt deleniti magnam consequuntur natus.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis totam et repellendus nemo, impedit pariatur saepe, voluptas voluptate ipsum eius inventore minima? Suscipit iusto vitae deserunt deleniti magnam consequuntur natus.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis totam et repellendus nemo, impedit pariatur saepe, voluptas voluptate ipsum eius inventore minima? Suscipit iusto vitae deserunt deleniti magnam consequuntur natus.
            </p>
        </div>
    </div>
  )
}
