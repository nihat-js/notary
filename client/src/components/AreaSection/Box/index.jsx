import './index.scss'

export default function Index(props) {
  const {title , subTitle , image } = props.data
  return (
    <div className='box'>
      <img src={image} alt="" />
      <h3 className="title"> {title} </h3>
      <p className="subtitle"> {subTitle } </p>
    </div>
  )
}
