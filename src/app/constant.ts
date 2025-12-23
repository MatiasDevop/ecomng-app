import { Product } from './models/product';

export const products: Product[] = [
  //Electpronics
  {
    id: '1',
    name: 'Smartphone XYZ',
    description: 'A high-quality smartphone with advanced features.',
    price: 699.99,
    imageUrl:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
    rating: 4.5,
    reviewCount: 120,
    inStock: true,
    category: 'electronics',
    reviews: [
      {
        id: 'r-1-1',
        productId: '1',
        userName: 'Alice W.',
        userImageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&h=64&fit=crop',
        rating: 5,
        title: 'Great performance!',
        comment:
          'Fast, smooth, and the camera is excellent for everyday shots.',
        reviewDate: new Date('2025-07-12'),
      },
      {
        id: 'r-1-2',
        productId: '1',
        userName: 'Mark D.',
        userImageUrl:
          'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=64&h=64&fit=crop',
        rating: 4,
        title: 'Solid phone, minor gripes',
        comment:
          'Battery life is decent but could be better. Overall very good.',
        reviewDate: new Date('2025-08-03'),
      },
    ],
  },
  {
    id: '2',
    name: 'Wireless Headphones ABC',
    description:
      'Noise-cancelling wireless headphones with superior sound quality.',
    price: 199.99,
    imageUrl:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    rating: 4.7,
    reviewCount: 85,
    inStock: false,
    category: 'electronics',
    reviews: [
      {
        id: 'r-2-1',
        productId: '2',
        userName: 'Priya S.',
        userImageUrl:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop',
        rating: 5,
        title: 'Amazing noise cancellation',
        comment:
          'Blocks out office chatter completely. Comfortable for long sessions.',
        reviewDate: new Date('2025-06-21'),
      },
      {
        id: 'r-2-2',
        productId: '2',
        userName: 'Leo G.',
        userImageUrl:
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&h=64&fit=crop',
        rating: 4,
        title: 'Great sound, wish for stock',
        comment: 'Sound quality is excellent. Waiting for it to be restocked.',
        reviewDate: new Date('2025-05-10'),
      },
    ],
  },
  {
    id: '3',
    name: '4K Ultra HD TV',
    description:
      'Experience stunning visuals with this 4K Ultra HD television.',
    price: 999.99,
    imageUrl:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
    rating: 4.8,
    reviewCount: 60,
    inStock: true,
    category: 'electronics',
    reviews: [
      {
        id: 'r-3-1',
        productId: '3',
        userName: 'Sofia R.',
        userImageUrl:
          'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=64&h=64&fit=crop',
        rating: 5,
        title: 'Cinema-like picture',
        comment: 'HDR looks fantastic. Gaming in 4K is buttery smooth.',
        reviewDate: new Date('2025-04-18'),
      },
      {
        id: 'r-3-2',
        productId: '3',
        userName: 'Tom K.',
        userImageUrl:
          'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?w=64&h=64&fit=crop',
        rating: 4,
        title: 'Excellent value',
        comment:
          'Great colors and contrast. Speakers are fine, but I use a soundbar.',
        reviewDate: new Date('2025-03-02'),
      },
    ],
  },
  //Clothing
  {
    id: '4',
    name: "Men's Casual Shirt",
    description: 'A comfortable and stylish casual shirt for everyday wear.',
    price: 29.99,
    imageUrl:
      'https://images.unsplash.com/photo-1521334884684-d80222895322?w=400',
    rating: 4.3,
    reviewCount: 45,
    inStock: true,
    category: 'clothing',
    reviews: [
      {
        id: 'r-4-1',
        productId: '4',
        userName: 'Daniel P.',
        userImageUrl:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop',
        rating: 4,
        title: 'Comfortable fit',
        comment: 'Soft fabric and the fit is true to size.',
        reviewDate: new Date('2025-08-27'),
      },
      {
        id: 'r-4-2',
        productId: '4',
        userName: 'Ethan L.',
        userImageUrl:
          'https://images.unsplash.com/photo-1542168796-76b3c3c910b3?w=64&h=64&fit=crop',
        rating: 5,
        title: 'Great everyday shirt',
        comment: 'Good quality for the price. Bought two colors.',
        reviewDate: new Date('2025-09-05'),
      },
    ],
  },
  {
    id: '5',
    name: "Women's Summer Dress",
    description: 'A light and breezy summer dress perfect for warm weather.',
    price: 49.99,
    imageUrl:
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400',
    rating: 4.6,
    reviewCount: 70,
    inStock: true,
    category: 'clothing',
    reviews: [
      {
        id: 'r-5-1',
        productId: '5',
        userName: 'Mia T.',
        userImageUrl:
          'https://images.unsplash.com/photo-1525134477000-2e33a3b61eda?w=64&h=64&fit=crop',
        rating: 5,
        title: 'Perfect for summer',
        comment: 'Light, airy, and looks great. Got compliments!',
        reviewDate: new Date('2025-06-30'),
      },
      {
        id: 'r-5-2',
        productId: '5',
        userName: 'Grace C.',
        userImageUrl:
          'https://images.unsplash.com/photo-1544005313-6f1e737a3a10?w=64&h=64&fit=crop',
        rating: 4,
        title: 'Lovely dress',
        comment: 'Fabric is comfortable. Slightly longer than expected.',
        reviewDate: new Date('2025-07-15'),
      },
    ],
  },
];
