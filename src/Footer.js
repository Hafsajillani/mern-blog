import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.bottomText}>
          <p>&copy; 2023 MyBlog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    color: '#000',
    padding: '40px 0',
    marginTop: '20px',
  },
  bottomText: {
    textAlign: 'center',
    marginTop: '20px',
  },
};

export default Footer;
