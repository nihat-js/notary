import './index.scss'

import CustomerReviewBox from './Box/index'

const Index = () => {
  const customerReviews = [
    {
      image : 'https://icons.iconarchive.com/icons/thesquid.ink/free-flat-sample/256/support-icon.png',
      fullName : 'Lina Gold',
      position : 'Owner, Ford ',
      review : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum",
    },
    {
      image : 'https://icons.iconarchive.com/icons/thesquid.ink/free-flat-sample/256/support-icon.png',
      fullName : 'Mike Fisher',
      position : 'Owner, Ford',
      review : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum",
    },
    {
      image : 'https://icons.iconarchive.com/icons/thesquid.ink/free-flat-sample/256/support-icon.png',
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
