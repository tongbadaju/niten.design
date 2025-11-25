export function Card({ children, className = '', hover = true, glow = false }) {
  return (
    <div className={`
      glass-strong rounded-2xl p-6
      ${hover ? 'card-hover' : ''}
      ${glow ? 'glow-box' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
}