import './index.scss'

export default function Index(props) {
  const {title , subTitle , src } = props.data
  return (
    <div className='box'>
      <img src={src} alt="" />
      <h3 className="title"> {title} </h3>
      <p className="subtitle"> {subTitle } </p>
    </div>
  )
}
