import React, { useCallback, useEffect, useState } from 'react';
import api from '../api/client';

interface Product {
    id: string;
    name: string;
    price: number;
    description?: string | null;
}

// Decode JWT payload without verification (for display purposes only)
const decodeToken = (token: string): { userId: string; role: string } | null => {
    try {
        const payload = token.split('.')[1];
        return JSON.parse(atob(payload));
    } catch {
        return null;
    }
};

const DashboardPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [cart, setCart] = useState<Product[]>([]);

    const token = localStorage.getItem('token');
    const userInfo = token ? decodeToken(token) : null;
    const isAdmin = userInfo?.role === 'ADMIN';

    const fetchProducts = useCallback(async () => {
        setLoading(true);
        try {
            const res = await api.get('/products');
            setProducts(
                res.data.map((product: any) => {
                    const numericPrice = Number(product.price);
                    return {
                        ...product,
                        price: Number.isFinite(numericPrice) ? numericPrice : 0,
                    } as Product;
                })
            );
            setError(null);
        } catch (error: any) {
            const message = error.response?.data?.message ?? 'Failed to load products';
            setError(message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        const numericPrice = Number(price);
        if (!name.trim() || Number.isNaN(numericPrice)) {
            alert('Please provide a valid product name and price.');
            return;
        }

        try {
            await api.post('/products', { name: name.trim(), price: numericPrice });
            setName('');
            setPrice('');
            await fetchProducts();
        } catch (error: any) {
            alert(error.response?.data?.message || 'Failed to create product');
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await api.delete(`/products/${id}`);
            await fetchProducts();
        } catch (error: any) {
            alert(error.response?.data?.message || 'Failed to delete (Admin only?)');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    const handleAddToCart = (product: Product) => {
        setCart((prev) => [...prev, product]);
        alert(`${product.name} added to cart!`);
    };

    if (loading) return <div className="p-8">Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
                </div>

                {isAdmin && (
                    <div className="bg-white p-6 rounded shadow mb-8">
                        <h2 className="text-xl font-semibold mb-4">Add Product</h2>
                        <form onSubmit={handleCreate} className="flex gap-4">
                            <input
                                type="text"
                                placeholder="Product Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="border p-2 rounded flex-1"
                                required
                            />
                            <input
                                type="number"
                                placeholder="Price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="border p-2 rounded w-32"
                                required
                            />
                            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Add</button>
                        </form>
                    </div>
                )}

                {!isAdmin && cart.length > 0 && (
                    <div className="bg-white p-6 rounded shadow mb-8">
                        <h2 className="text-xl font-semibold mb-4">Cart ({cart.length} items)</h2>
                        <div className="space-y-2">
                            {cart.map((item, index) => (
                                <div key={index} className="flex justify-between text-sm">
                                    <span>{item.name}</span>
                                    <span>${item.price.toFixed(2)}</span>
                                </div>
                            ))}
                            <div className="border-t pt-2 font-bold flex justify-between">
                                <span>Total:</span>
                                <span>${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                )}

                <div className="bg-white p-6 rounded shadow">
                    <h2 className="text-xl font-semibold mb-4">Products</h2>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <div className="space-y-4">
                        {products.map((product) => (
                            <div key={product.id} className="border-b pb-4 flex justify-between items-center">
                                <div>
                                    <h3 className="font-bold">{product.name}</h3>
                                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                                </div>
                                {isAdmin ? (
                                    <button
                                        onClick={() => handleDelete(product.id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Delete
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
                                    >
                                        Add to Cart
                                    </button>
                                )}
                            </div>
                        ))}
                        {products.length === 0 && <p className="text-gray-500">No products found.</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
