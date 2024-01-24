import React, { Component } from 'react';
import { Card, Button } from 'antd';

const { Meta } = Card;

// Component for the story content
class StoryContent extends Component {
  render() {
    return (
        
      <div style={{ margin: '10px', maxWidth: '600px', textAlign: 'center', overflowY: 'auto' }}>
       
        <p>
          Chung’s father was born in Ohio, one of five siblings. When he was thirteen,
          his mother (Chung’s grandmother) was diagnosed with kidney failure and
          would soon be reliant on a home dialysis machine. This change called on all
          five children to take on greater roles of responsibility in the family. Not sure
          that college was a good fit for him, Chung’s father took an entry-level job at
          American Greetings. At the same time, he began taking a few night classes
          at the local community college.
        </p>
        <p>
          Chung’s mother was also born in Ohio and was similarly one of five
          children with significant responsibility at home. Chung’s mother hoped to
          become a nurse and enrolled at the same local community college. Chung’s
          mother and father met there and were quickly married. Chung’s mother
          applied to nursing school but was then offered a job in Alaska. There was no
          question that she would need to take this job.
        </p>
        <p>
          After working in Alaska for two years, Chung’s parents relocated to Seattle
          when her mother found work as a respiratory therapist. Here, Chung’s father
          began a restaurant-management certificate program. He was then offered a
          position to manage a pizza restaurant in Oregon, and they moved south.
          They were able to find a small home in town.
        </p>
      </div>
    );
  }
}

// Main Story Page Component
class StoryPage extends Component {
  render() {
    return (
        <div>
            
            <div style={{ marginLeft: '10px' }}>
          <Button type="primary" style={{ backgroundColor: 'red' }}>Annotation Off</Button>
        </div>
        <h2 style = {{justifyContent: "center",display: 'flex', }}>Story 1</h2>
      <div style={{ display: 'flex', height: '50vh', justifyContent: "center" }}>
        
          <StoryContent />
        
        
      </div>
      </div>
    );
  }
}

export default StoryPage;
