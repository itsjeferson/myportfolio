import './About.css';

export const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <span className="dash-label about__label">About</span>

        <p className="about__paragraph">
          Passionate about building high-performance web applications with a focus on{' '}
          <strong>technical excellence</strong> and clean architecture. I bridge the gap between
          complex back-end logic and seamless front-end experiences.
        </p>
      </div>
    </section>
  );
};
