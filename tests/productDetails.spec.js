const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function');
    expect(Array.isArray(productDetails())).toEqual(true);
    expect(productDetails().length).toEqual(2);
    expect(typeof productDetails()[0]).toEqual('object');
    expect(typeof productDetails()[1]).toEqual('object');
    expect(productDetails()[0] === productDetails()[1]).toEqual(false);
  /* Acessando os valores da chave e do valor dos objetos para fazer o teste: */
    expect(productDetails()[0].details.productId.includes('123')).toEqual(true);
    expect(productDetails()[1].details.productId.includes('123')).toEqual(true);
  });
});
