import './index.scss'
export default function index(props) {
  const { image, fullName , position , review} = props.data
  return (
    <div className="box">
    <header>
      <figure>
        <img src={image} alt="" />
      </figure>
      <div>
        <div className="full-name"> {fullName} </div>
        <div className="position"> { position }  </div>
      </div>
    </header>
    <p className="review">
      {review}
    </p>
  </div>
  )
}

