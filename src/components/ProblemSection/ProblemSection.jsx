import "./ProblemSection.css";

function ProblemSection() {
  return (
    <section id="problem" className="problem-section">

      <div className="problem-left">

        <p className="problem-tag">
          THE PROBLEM WE'RE SOLVING
        </p>

        <h2>
          Your dog can't tell you
          <span> when something is wrong.</span>
        </h2>

        <p className="problem-description">
          Dogs spend hours alone every day.
          Changes in activity, behavior, mood,
          and routine often go unnoticed until
          they become serious problems.
        </p>

        <div className="problem-stats">

          <div className="problem-stat-card">
            <h3>8+ Hrs</h3>
            <p>Average time dogs stay alone</p>
          </div>

          <div className="problem-stat-card">
            <h3>24/7</h3>
            <p>Monitoring needed</p>
          </div>

          <div className="problem-stat-card">
            <h3>∞</h3>
            <p>Moments owners miss</p>
          </div>

        </div>

      </div>

      <div className="problem-right">

        <div className="problem-image-card">

          <img
            src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d"
            alt="dog"
          />

          <div className="problem-card-footer">
            Woofly keeps an eye on every moment.
          </div>

        </div>

      </div>

    </section>
  );
}

export default ProblemSection;