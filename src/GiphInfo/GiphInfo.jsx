export default function GiphInfo({ giph }) {
  return (
    <div>
  <img src={giph.data[0].images.original.url} alt="gif"/>
    </div>
  );
}
//giph.data[0].images["480w_still"].url