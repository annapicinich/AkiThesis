import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>About</h1>
      </header>
      <main style={styles.main}>
        <p>info</p>
      </main>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', // Set minimum height to fill the entire viewport
  },
  header: {
    textAlign: 'center', // Center the text horizontally
  },
  main: {
    textAlign: 'center', // Center the text horizontally
  },
};

export default About;
