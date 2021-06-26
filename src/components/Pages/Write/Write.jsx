import "./Write.css"

export default function Write() {
    return (
        <div className="write">
            <img className="writeImg" src="https://www.becomingminimalist.com/wp-content/uploads/2020/08/life-is-too-short-1024x649.jpg" alt="" />
           <form className="writeForm">
               <div className="writeFormGroup">
                   <label htmlFor="fileInput">
                   <i className="writeIcon fas fa-images"></i>
                   </label>
                   <input type="file" id="fileInput" style={{display:"none"}}/>
                   <input type="text"  className="writeInput" placeholder="Title" autoFocus={true}/>
               </div>
               <div className="wtiteFormGroup">
                   <textarea placeholder="Write your story..." type="text" className="writeInput writeText"></textarea>
               </div>
               <button className="writeSubmit">Publish</button>
           </form>
        </div>
    )
}
