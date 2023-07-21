export default function GiphInfo({ giph }) {
  return (
    <div>
  <img src={giph.data[0].images["480w_still"].url} alt="gif"/>
    </div>
  );
}
