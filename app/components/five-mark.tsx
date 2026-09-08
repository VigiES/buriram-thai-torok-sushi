type FiveMarkProps = {
  className?: string;
};

const marks = [
  { height: "0.48em", width: "0.13em", rotation: -8 },
  { height: "0.74em", width: "0.19em", rotation: -4 },
  { height: "1.08em", width: "0.25em", rotation: 0 },
  { height: "0.74em", width: "0.19em", rotation: 4 },
  { height: "0.48em", width: "0.13em", rotation: 8 },
];

export function FiveMark({ className = "" }: FiveMarkProps) {
  return (
    <span aria-hidden="true" className={`five-mark ${className}`}>
      {marks.map((mark, index) => (
        <span key={index} style={{ height: mark.height, width: mark.width, transform: `rotate(${mark.rotation}deg)` }} />
      ))}
    </span>
  );
}
