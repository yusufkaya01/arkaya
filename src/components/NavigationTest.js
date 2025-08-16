import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const TestContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 15px;
  border-radius: 8px;
  z-index: 10000;
  font-size: 12px;
  max-width: 200px;
`;

const TestButton = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  margin: 2px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 10px;
  
  &:hover {
    background: #0056b3;
  }
`;

const NavigationTest = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (!isMobile) return null; // Only show on mobile

  const testPaths = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <TestContainer>
      <div><strong>Nav Test</strong></div>
      <div>Current: {location.pathname}</div>
      <div>Screen: {window.innerWidth}x{window.innerHeight}</div>
      <div>
        {testPaths.map((item) => (
          <TestButton
            key={item.path}
            onClick={() => {
              console.log('Test button clicked:', item.path);
              navigate(item.path);
            }}
            style={{
              background: location.pathname === item.path ? '#28a745' : '#007bff'
            }}
          >
            {item.name}
          </TestButton>
        ))}
      </div>
    </TestContainer>
  );
};

export default NavigationTest;
