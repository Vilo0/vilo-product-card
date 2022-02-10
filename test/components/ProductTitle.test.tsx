import * as React from 'react';
import rendered from 'react-test-renderer';
import { ProductCard, ProductTitle } from '../../src/components/index';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
  test('debe demostrar el componente correctamente con el título personalizado', () => { 
    
    const wrapper = rendered.create(
        <ProductTitle title="Custom Product" />
    )
    expect(wrapper.toJSON()).toMatchSnapshot();

   });

   test('debe de mostrar el componente con el nombre de producto', () => { 

    const wrapper = rendered.create(
        <ProductCard product={product1}>
            {
                () => (
                    <ProductTitle />
                )
            }
        </ProductCard>
    )
    expect(wrapper.toJSON()).toMatchSnapshot();

    })
});