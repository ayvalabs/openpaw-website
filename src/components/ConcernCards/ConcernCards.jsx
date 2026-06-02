import "./ConcernCards.css";

function ConcernCards() {
  const concerns = [
  {
    title: "Leaving Your Dog Alone",
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a",
    problem:
      "Work, travel, and busy schedules often leave dogs alone for hours.",
    solution:
      "Woofly follows your dog, tracks activity, and keeps you informed in real time."
  },

  {
    title: "Health & Disease Detection",
    image:
      "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def",
    problem:
      "Early signs of discomfort and illness often go unnoticed.",
    solution:
      "Behavior monitoring helps identify unusual activity patterns before they become serious."
  },

  {
    title: "Know Your Pet Better",
    image:
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d",
    problem:
      "Most owners only see a small part of their pet's daily routine.",
    solution:
      "Woofly builds insights about habits, energy levels, and behavioral trends."
  },

  {
    title: "Separation Anxiety",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
    problem:
      "Many dogs experience stress when left alone.",
    solution:
      "A moving AI companion provides interaction and engagement throughout the day."
  }
];

  return (
  <section className="concern-section">

    <div className="section-header">
      <p>WHY WOOFLY MATTERS</p>

      <h2>
        Helping owners understand
        <span> what their dogs can't say.</span>
      </h2>
    </div>

    {concerns.map((card, index) => (
      <div
        key={index}
        className={`story-section ${
          index % 2 === 0 ? "normal" : "reverse"
        }`}
      >

        <div className="story-image">

          <img
            src={card.image}
            alt={card.title}
          />

          <span className="story-number">
            0{index + 1}
          </span>

        </div>

        <div className="story-content">
            <span className="feature-badge">
                WOOFLY INSIGHT
            </span>

          <h3>{card.title}</h3>

          <div className="story-block">
            <strong>Problem</strong>

            <p>{card.problem}</p>
          </div>

          <div className="story-block">
            <strong>Solution</strong>

            <p>{card.solution}</p>
          </div>

        </div>

      </div>
    ))}

  </section>
);
}

export default ConcernCards;