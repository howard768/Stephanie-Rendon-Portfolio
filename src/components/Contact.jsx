import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Get in Touch</h2>
      <div style={{ display: 'flex', gap: '2em', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <p style={{ marginBottom: '1.5em', fontSize: '1.1em', lineHeight: 1.6 }}>
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div style={{ marginBottom: '1.5em' }}>
            <strong style={{ display: 'block', marginBottom: '0.5em' }}>Email</strong>
            <a href="mailto:stephanie.rendon@gmail.com" style={{ color: 'var(--primary)' }}>
              stephanie.rendon@gmail.com
            </a>
          </div>
        </div>
        
        <form 
          onSubmit={handleSubmit}
          style={{ 
            flex: 1, 
            minWidth: '300px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1em'
          }}
        >
          <div>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5em' }}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.8em',
                borderRadius: '8px',
                border: '1px solid var(--card-border)',
                background: 'var(--card-bg)',
                color: 'var(--text)'
              }}
            />
          </div>
          
          <div>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5em' }}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.8em',
                borderRadius: '8px',
                border: '1px solid var(--card-border)',
                background: 'var(--card-bg)',
                color: 'var(--text)'
              }}
            />
          </div>
          
          <div>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5em' }}>Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={{
                width: '100%',
                padding: '0.8em',
                borderRadius: '8px',
                border: '1px solid var(--card-border)',
                background: 'var(--card-bg)',
                color: 'var(--text)',
                resize: 'vertical'
              }}
            />
          </div>
          
          <button 
            type="submit"
            style={{
              padding: '0.8em 1.5em',
              borderRadius: '8px',
              border: 'none',
              background: 'var(--primary)',
              color: '#fff',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact; 