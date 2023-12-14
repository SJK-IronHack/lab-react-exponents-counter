const ExponentThree = ({ count }) => {
  const exponentialValue = Math.pow(count, 3);
  return (<div className="exponent-counter-container">
    <p className="exponent-label">n^3</p>
    <p className="exponent-result">= {exponentialValue}</p>
  </div>
  )
};
export default ExponentThree;