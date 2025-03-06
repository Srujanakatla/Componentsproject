// import React from 'react';
// // import '../styles/Cards.css';
// import './Cards.css'
// const Cards = () => {
//   const features = [
//     {
//       id: 1,
//       icon: '',
//       title: 'QR Code Scanning',
//       description: 'Unique QR code for each table directs customers to your digital menu instantly.'
//     },
//     {
//       id: 2,
//       icon: '',
//       title: 'Digital Menu',
//       description: 'Interactive menu with images, descriptions, and real-time availability updates.'
//     },
//     {
//       id: 3,
//       icon: 'order',
//       title: 'Easy Ordering',
//       description: 'Customers select items, add special instructions, and place orders directly to the kitchen.'
//     },
//     {
//       id: 4,
//       icon: 'tracking',
//       title: 'Order Tracking',
//       description: 'Real-time updates on order status from confirmation to serving.'
//     },
//     {
//       id: 5,
//       icon: 'payment',
//       title: 'Contactless Payment',
//       description: 'Multiple payment options including credit cards, digital wallets, and UPI.'
//     },
//     {
//       id: 6,
//       icon: 'loyalty',
//       title: 'Feedback & Loyalty',
//       description: 'Collect feedback and reward repeat customers with loyalty points and special offers.'
//     }
//   ];

//   const benefits = [
//     {
//       id: 1,
//       icon: 'speed',
//       title: 'Fast & Efficient',
//       description: 'Reduces waiting time and eliminates manual errors in order taking.'
//     },
//     {
//       id: 2,
//       icon: 'hygiene',
//       title: 'Hygienic & Safe',
//       description: 'Minimizes physical contact, perfect for the post-pandemic world.'
//     },
//     {
//       id: 3,
//       icon: 'cost',
//       title: 'Cost-Effective',
//       description: 'Reduces expenses on printed menus and optimizes staff allocation.'
//     },
//     {
//       id: 4,
//       icon: 'experience',
//       title: 'Enhanced Experience',
//       description: 'Provides convenience and seamless transactions for modern diners.'
//     }
//   ];

//   return (
//     <>
//       <section id="features" className="section features-section">
//         <div className="container">
//           <h2 className="section-title">Key Features</h2>
//           <p className="section-subtitle">Discover what makes our system the preferred choice for restaurants</p>
          
//           <div className="cards-grid features-grid">
//             {features.map(feature => (
//               <div className="card feature-card" key={feature.id}>
//                 <div className="card-icon">
//                   <img src={`/icons/${feature.icon}.svg`} alt={feature.title} />
//                 </div>
//                 <h3 className="card-title">{feature.title}</h3>
//                 <p className="card-description">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="benefits" className="section benefits-section">
//         <div className="container">
//           <h2 className="section-title">Benefits</h2>
//           <p className="section-subtitle">Why restaurants and customers love our solution</p>
          
//           <div className="cards-grid benefits-grid">
//             {benefits.map(benefit => (
//               <div className="card benefit-card" key={benefit.id}>
//                 <div className="card-icon">
//                   <img src={`/icons/${benefit.icon}.svg`} alt={benefit.title} />
//                 </div>
//                 <h3 className="card-title">{benefit.title}</h3>
//                 <p className="card-description">{benefit.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Cards;


import React from 'react';
import './Cards.css';

const Cards = () => {
  const features = [
    {
      id: 1,
      icon: '/public/Image/1.png',
      title: 'QR Code Scanning',
      description: 'Unique QR code for each table directs customers to your digital menu instantly.'
    },
    {
      id: 2,
      icon: '/public/Image/2.png',
      title: 'Digital Menu',
      description: 'Interactive menu with images, descriptions, and real-time availability updates.'
    },
    {
      id: 3,
      icon: '/public/Image/3.png',
      title: 'Easy Ordering',
      description: 'Customers select items, add special instructions, and place orders directly to the kitchen.'
    },
    {
      id: 4,
      icon: '/public/Image/4.png',
      title: 'Order Tracking',
      description: 'Real-time updates on order status from confirmation to serving.'
    },
    {
      id: 5,
      icon: '/public/Image/5.png',
      title: 'Contactless Payment',
      description: 'Multiple payment options including credit cards, digital wallets, and UPI.'
    },
    {
      id: 6,
      icon: '/public/Image/6.png',
      title: 'Feedback & Loyalty',
      description: 'Collect feedback and reward repeat customers with loyalty points and special offers.'
    }
  ];

  const benefits = [
    {
      id: 1,
      icon: '/public/Image/10.png',
      title: 'Fast & Efficient',
      description: 'Reduces waiting time and eliminates manual errors in order taking.'
    },
    {
      id: 2,
      icon: '/public/Image/20.png',
      title: 'Hygienic & Safe',
      description: 'Minimizes physical contact, perfect for the post-pandemic world.'
    },
    {
      id: 3,
      icon: '/public/Image/30.png',
      title: 'Cost-Effective',
      description: 'Reduces expenses on printed menus and optimizes staff allocation.'
    },
    {
      id: 4,
      icon: '/public/Image/40.jpeg',
      title: 'Enhanced Experience',
      description: 'Provides convenience and seamless transactions for modern diners.'
    }
  ];

  return (
    <>
      <section id="features" className="section features-section">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <p className="section-subtitle">Discover what makes our system the preferred choice for restaurants</p>
          
          <div className="cards-grid features-grid">
            {features.map(feature => (
              <div className="card feature-card" key={feature.id}>
                <div className="card-icon">
                  <img src={feature.icon} alt={feature.title} style={{ width: '150px', height: '150px' }} />
                </div>
                <h3 className="card-title">{feature.title}</h3>
                <p className="card-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="section benefits-section">
        <div className="container">
          <h2 className="section-title">Benefits</h2>
          <p className="section-subtitle">Why restaurants and customers love our solution</p>
          
          <div className="cards-grid benefits-grid">
            {benefits.map(benefit => (
              <div className="card benefit-card" key={benefit.id}>
                <div className="card-icon">
                  <img src={benefit.icon} alt={benefit.title} style={{ width: '150px', height: '150px' }} />
                </div>
                <h3 className="card-title">{benefit.title}</h3>
                <p className="card-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
