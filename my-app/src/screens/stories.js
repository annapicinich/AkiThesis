import React, { Component } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Stack, Switch } from '@chakra-ui/react';


// Component for the story content
class Story1 extends Component {
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
class Story2 extends Component {
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
class Story3 extends Component {
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
  constructor(props) {
    super(props);
    this.state = {
      isAnnotationOnStory1: false,
      isAnnotationOnStory2: false,
      isAnnotationOnStory3: false,
    };
  }

  handleSwitchChange = (story) => {
    this.setState((prevState) => ({ [`isAnnotationOn${story}`]: !prevState[`isAnnotationOn${story}`] }));
  };

  render() {
    const { isAnnotationOnStory1, isAnnotationOnStory2, isAnnotationOnStory3 } = this.state;

    return (
      <Box display='flex' flexDirection='column' minHeight='100vh'>
        <Tabs variant='enclosed' isFitted>
          <TabList mb='1em'>
            <Tab>Story 1</Tab>
            <Tab>Story 2</Tab>
            <Tab>Story 3</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Stack direction='row' align='center' mb='4' ml='8'>
                <Switch
                  colorScheme={isAnnotationOnStory1 ? 'green' : 'red'}
                  isChecked={isAnnotationOnStory1}
                  onChange={() => this.handleSwitchChange('Story1')}
                />
                <span>Annotations</span>
              </Stack>
              <h2 style={{ justifyContent: 'center', display: 'flex' }}>Story 1</h2>
              <Box display='flex' height='50vh' justifyContent='center'>
                <Story1 />
              </Box>
            </TabPanel>
            <TabPanel>
              <Stack direction='row' align='center' mb='4' ml='8'>
                <Switch
                  colorScheme={isAnnotationOnStory2 ? 'green' : 'red'}
                  isChecked={isAnnotationOnStory2}
                  onChange={() => this.handleSwitchChange('Story2')}
                />
                <span>Annotations</span>
              </Stack>
              <h2 style={{ justifyContent: 'center', display: 'flex' }}>Story 2</h2>
              <Box display='flex' height='50vh' justifyContent='center'>
                <Story2 />
              </Box>
            </TabPanel>
            <TabPanel>
              <Stack direction='row' align='center' mb='4' ml='8'>
                <Switch
                  colorScheme={isAnnotationOnStory3 ? 'green' : 'red'}
                  isChecked={isAnnotationOnStory3}
                  onChange={() => this.handleSwitchChange('Story3')}
                />
                <span>Annotations</span>
              </Stack>
              <h2 style={{ justifyContent: 'center', display: 'flex' }}>Story 3</h2>
              <Box display='flex' height='50vh' justifyContent='center'>
                <Story3 />
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    );
  }
}



export default StoryPage;
