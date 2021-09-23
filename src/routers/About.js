import "./About.css";

export default function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        "하지 말아야 할것을 효율적으로 하는 것보다 더 비생산적인 것은 없다"
      </span>
      <span>- 피터 드러커</span>
    </div>
  );
}
