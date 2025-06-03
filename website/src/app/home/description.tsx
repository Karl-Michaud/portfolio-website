const boxStyle: React.CSSProperties = {
  backgroundColor: '#1e1e1e',              // darker background
  borderRadius: '10px',
  padding: '24px',
  maxWidth: '600px',
  fontFamily: 'monospace',
  color: '#eaeaea',                        // light text
  boxShadow: '0 0 12px rgba(255, 255, 255, 0.1)', // subtle glow
  fontSize: '16px',
  lineHeight: '1.6',
  border: '1px solid rgba(255, 255, 255, 0.15)',
};

const paragraphStyle: React.CSSProperties = {
  marginBottom: '12px',
};

export function DescriptionBox() {
  return (
    <div style={boxStyle}>
      <p style={paragraphStyle}>-&gt; compsci and math student @ uoft</p>
      <p style={paragraphStyle}>
        -&gt; building <strong>impactful</strong>, <strong>scalable</strong>, and <strong>secure</strong> software
      </p>
      <p style={paragraphStyle}>
        -&gt; passionate about <strong>AI</strong>, <strong>machine learning</strong>, and <strong>problem solving</strong>
      </p>
      <p style={{ marginTop: '24px' }}>let's connect! (p.s., try clicking one of the dots!)</p>
    </div>
  );
};

