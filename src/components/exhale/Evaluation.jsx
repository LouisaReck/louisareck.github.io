import React from "react";
import evaluation from "../../assets/evaluation.png";

const Evaluation = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title-small">Evaluation</h2>
      <span className="section__subtitle">Two parts</span>
        <p className="section__text-1">
          We did a summative evaluation with four different users to find out if
          our design was meeting our user tasks. We tested our prototype and
          collected data under a controlled setting involving the user. The
          testing was split into two parts; a usability test, and a post-task
          questionnaire. Our main goal for the testing was to measure the
          efficiency and effectiveness of the app, but also the overall
          satisfaction of using it.
          <br /> <br />
          In the final analysis we drew the paths taken for each user task done
          by each user. The drawings gave us great insights on where and what we
          could improve in our prototype.
        </p>

    </section>
  );
};

export default Evaluation;
