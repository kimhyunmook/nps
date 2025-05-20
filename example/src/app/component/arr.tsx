export default function Arr({ arr }: { arr: number[] }) {
  return (
    <ul
      style={{
        listStyleType: "none",
        display: "flex",
        border: "1px solid black",
        padding: "10px",
        borderRadius: "10px",
        maxWidth: "350px",
        width: "300px",
      }}
    >
      {arr.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
}
