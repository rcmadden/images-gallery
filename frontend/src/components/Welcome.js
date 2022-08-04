import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Welcome = () => (
  <Container>
    <div class="bg-light p-5 rounded-lg m-3">
      <h1 class="display-4">Images Gallery</h1>
      <p class="lead">
        This is a simple application using photos using Unsplash API. In order
        to start enter any search term in the input
      </p>
      <hr class="my-4" />
      <p>
        <Button variant="primary" href="https://unsplash.com" target="_blank">
          Learn more
        </Button>
      </p>
    </div>
  </Container>
);

export default Welcome;
