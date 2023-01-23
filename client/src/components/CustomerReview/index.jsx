import './index.scss'

import CustomerReviewBox from '../CustomerReviewBox/index'

const Index = () => {
  const customerReviews = [
    {
      image : '',
      fullName : 'Lina Gold',
      position : 'Owner, Ford ',
      review : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum",
    },
    {
      image : '',
      fullName : 'Mike Fisher',
      position : 'Owner, Ford',
      review : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum",
    },
    {
      image : '',
      fullName : 'Sheen Yu ',
      position : 'Owner, Ford',
      review : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum",
    }
  ]

  return (
    <section className="customer-review">
      <div className="container">
        <h2 className="title"> Happy Customers   </h2>
        <div className="row">
          {customerReviews.map(x => <CustomerReviewBox data={x} />)}
        </div>
      </div>
    </section>
  );
}

export default Index;
