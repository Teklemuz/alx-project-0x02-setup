import React from 'react';
import Button from '..@/components/common/Button'; 
import Header from '..@/components/layout/Header'; 

const AboutPage: React.FC = () => (
  <div>
    <Header /> 
    <div className="p-6">
      <h1 className="text-3xl mb-6">About Page</h1>
      <div className="space-y-4">
        <Button size="small" shape="rounded-sm">Small Rounded</Button>
        <Button size="medium" shape="rounded-md">Medium Rounded</Button>
        <Button size="large" shape="rounded-full">Large Rounded</Button>
      </div>
    </div>
  </div>
);

export default AboutPage;
