import React from 'react';

const Content = () => {
  return (
    <div className="content container" >
      <h1>Welcome to My Brunch</h1>
      <p style={{ maxWidth: '100%', overflowWrap:'break-word'}}>
        Brunch being a custom spread throughout the world, which adapts to the
        palate and foods of each region, the brunch menu varies depending on the
        country and even changes from one restaurant to another. The origin of
        brunch dates back to the 19th century in England. It is said to have
        been adopted by British high society, who were looking for an elegant
        way to enjoy a light and relaxed meal on Sunday mornings after attending
        mass.
      </p>
      <button className="btn btn-primary" style={{ margin: '20px 20px' }}>
        Press to search
      </button>
    </div>
  );
};

export default Content;
