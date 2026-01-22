# Data Models

Located in `src/app/models/`.

## `Product`

- `id: string`
- `name: string`
- `description: string`
- `price: number`
- `imageUrl: string`
- `rating: number` (average rating)
- `reviewCount: number`
- `inStock: boolean`
- `category: string` (e.g., `electronics`, `clothing`)
- `reviews: UserReview[]`

## `CartItem`

- `product: Product`
- `quantity: number`

## `Order`

- `id: string`
- `userId: string`
- `total: number`
- `items: CartItem[]`
- `paymentStatus: 'success' | 'failure'`

## `User`

- `id: string`
- `name: string`
- `email: string`
- `imageUrl?: string`

## `UserReview`

- `id: string`
- `productId: string`
- `userName: string`
- `userImageUrl?: string`
- `rating: number`
- `title: string`
- `comment: string`
- `reviewDate: Date`

Seed data is in `src/app/constant.ts` and demonstrates realistic values.