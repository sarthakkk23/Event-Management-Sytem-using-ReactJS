import React, { useState } from 'react';

const NewsletterSubscription = () => {
  const [eData, setEData] = useState({
    email: '',
  });
  const [subscribed, setSubscribed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEData({ ...eData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <div className="newsletter-subscription">
      <h2>Subscribe to Our Newsletter</h2>
      {subscribed ? (
        <p>Thank you for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={eData.email}
            onChange={handleChange}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      )}
    </div>
  );
};

export default NewsletterSubscription;
