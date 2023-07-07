import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Osama Manzoor",
      title: "Software Engineer",
      icon: "assets/twitter.png",
      desc: "Working with Hamza has been a privilege. As a software engineer, their technical prowess is unmatched. Hamza consistently delivers high-quality code and brings a meticulous attention to detail to every project.",
    },
    {
      id: 2,
      name: "Syed Umar Ali",
      title: "Software Engineer",
      icon: "assets/youtube.png",
      desc: "Having Hamza as a software engineer on our team has been a game-changer. Their deep understanding of software development principles, coupled with their strong analytical thinking, enables them to tackle complex challenges with ease. Hamza has a keen eye for optimization and efficiency.",
      featured: true,
    },
    {
      id: 3,
      name: "Muhammad Abubakar",
      title: "Full Stack Engineer",
      icon: "assets/linkedin.png",
      desc: "I have had the pleasure of collaborating with Hamza as a fellow software engineer, and I can attest to their exceptional skills and work ethic. Hamza is a highly motivated and dedicated professional who consistently goes above and beyond to deliver outstanding results.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div
            className={
              d.featured ? "card-testimonial featured" : "card-testimonial"
            }
          >
            <div className="top">
              <img
                loading="lazy"
                src="assets/right-arrow.png"
                className="left"
                alt=""
              />
              <img
                loading="lazy"
                className="user"
                src={process.env.PUBLIC_URL + "/images/profile.webp"}
                alt=""
              />
              <img loading="lazy" className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
