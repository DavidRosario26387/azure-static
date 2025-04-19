function generateText() {
    const text = document.getElementById('userText').value;
    const size = document.getElementById('fontSize').value;
    const color = document.getElementById('textColor').value;
  
    const output = document.getElementById('output');
    output.innerHTML = `<p style="font-size:${size}px; color:${color};">${text}</p>`;
  }
  