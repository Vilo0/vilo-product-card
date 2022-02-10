import * as React from 'react';
import rendered from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components/index';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('debe demostrar el componente correctamente con la imagen personalizada', () => { 
    
    const wrapper = rendered.create(
        <ProductImage img="./coffee-mug.png" />
    )
    expect(wrapper.toJSON()).toMatchSnapshot();

   });

   test('debe de mostrar el componente con la imagen del producto', () => { 

    const wrapper = rendered.create(
        <ProductCard product={product2}>
            {
                () => (
                    <ProductImage />
                )
            }
        </ProductCard>
    )
    expect(wrapper.toJSON()).toMatchSnapshot();

    })
});