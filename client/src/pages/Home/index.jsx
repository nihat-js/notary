import './index.scss'

import Nav from '../../components/Nav/index'
import Footer from '../../components/Footer/index'

import CustomerReview from '../../components/CustomerReview/index'


import AreaSection from '../../components/AreaSection/index'
import CustomerReviewBox from '../../components/CustomerReview/Box/index'
import imageProvide1 from '../../assets/img/provide-1.webp'
import imageProvide2 from '../../assets/img/provide-2.webp'
import imageSolution from '../../assets/img/solution-1.webp'

export default function Index() {



  return (
    <div className="home-page">
      <Nav />
      <section className="hero">
        <div className='container'>
          <div className="row">
            <div className="left-column">
              <h2 className='heading'> 
          Notary Public & Legal Solutions
               </h2>
               <p className="subheading">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis cupiditate deserunt placeat necessitatibus a aliquam corrupti nisi odio aliquid, accusamus.

               </p>
            </div>
            <div className="right-column d-none">
              <form action="">
                <h4 className="title"> Book an Appointment </h4>
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Email' />
                <input type="date" placeholder='Select Date' />
                <button> Book Appointment </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      
      <AreaSection/>

      <section className="provide">
        <div className="container">
          <div className="row">
            <div className="left-column">
              <img src={imageProvide1} alt="" />
              <img src={imageProvide2} alt="" />
            </div>
            <div className="right-column">
              <h2 className="title">  We Provide Highly Reliable & Effective Legal Solutions </h2>
              <p className="text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, explicabo iste a labore id est quas, doloremque veritatis! Provident odit pariatur dolorem quisquam, voluptatibus voluptates optio accusamus, vel quasi quidem! </p>
              <button className='btn-orange'> Book an appointment </button>
            </div>
          </div>
        </div>
      </section>

      <CustomerReview/>

      <section className="solution">
        <div className="container">
          <div className="row">
            <div className="left-column">
              <figure>
                <img src={imageSolution} alt="" />
              </figure>
            </div>
            <div className="middle-column">
              <h3 className="title">We Have Legal Solutions  </h3>
              <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam reprehenderit perspiciatis iste culpa consequuntur consequatur eum, voluptatum, quod deserunt maiores? <br/> <br/>
              Modi perferendis ipsa ducimus consequuntur excepturi autem, numquam facere aperiam iste nam molestias provident consectetur molestiae voluptatibus ipsum. Fugiat, quas.
              </p>
              <ul className='list'>
                <li> Aperiam iste nam molestias   </li>
                <li> Modi perferendis ipsa  </li>
                <li> Perspic iste culpa  </li>

              </ul>
            </div>
            <div className="right-column">
              <div className="dropdown">
                <h4 className="title"> How to download and register </h4>
                <div className="content">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                </div>
              </div>
              <div className="dropdown">
                <h4 className="title"> How to create your application  ? </h4>
                <div className="content">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                </div>
              </div>
              <div className="dropdown">
                <h4 className="title"> How to link your paypal and bank account ? </h4>
                <div className="content">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />

    </div>
  )
}
