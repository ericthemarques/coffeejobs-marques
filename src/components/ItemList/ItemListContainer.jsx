import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
        try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const mockItems = [
          {
            name: 'Morango',
            price: 19.99,
            description: 'Fresco e vermelhinho',
          },
          {
            name: 'Café',
            price: 29.99,
            description: 'Cuidado do campo até sua casa',
          },
          {
            name: 'Chá',
            price: 39.99,
            description: 'Possui um mix de ervas',
          },
        ];

        setItems(mockItems);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar produtos', error);
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="item-list-container">
      {loading ? (
        <p>Carregando produtos da página...</p>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;