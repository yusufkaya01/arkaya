import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 100px 20px 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  color: #000;
  margin-bottom: 40px;
`;

const ProductCard = styled.div`
  background: white;
  border: 1px solid #ddd;
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
`;

const ProductsSimple = () => {
  return (
    <Container>
      <Title>Products</Title>
      <ProductCard>
        <h3>Katip Otomasyonu</h3>
        <p>Professional automation software for legal documentation.</p>
      </ProductCard>
      <ProductCard>
        <h3>Construction Management</h3>
        <p>Comprehensive construction project management solutions.</p>
      </ProductCard>
      <ProductCard>
        <h3>Technology Consulting</h3>
        <p>Expert technology consulting services for businesses.</p>
      </ProductCard>
    </Container>
  );
};

export default ProductsSimple;
