import './write.css'
import { WImg } from '../../index.js'

export default function Write() {
  return (
    <div className='write'>
        <img className='writeImg' src={WImg} alt="" />
        <form className='writeForm'>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id='fileInput' style={{display: "none"}}/>
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
            </div>

            <div className="writeFormGroup">
                <textarea placeholder='Tell your Story...' type="text" className='writeInput writeText'></textarea>
            </div>

            <button className='writeSubmit'>Publish</button>

        </form>
    </div>
  )
}
