import "./post.css"

export default function Post() {
    return (
        <div className="post">
          <img className="postImg" src="https://www.becomingminimalist.com/wp-content/uploads/2020/08/life-is-too-short-1024x649.jpg" alt="" />
          <div className="postInfo">
              <div className="postCats">
                  <span className="postCat">
                      Music
                  </span>

                  <span className="postCat">
                      Life
                  </span>

              </div>
              <span className="postTitle">

                 Music can Bring peace in Life
                 
       
              </span>
              <hr />
              <span className="postDate">2 hours ago</span>
          </div>
          <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
        </div>
    )
}
