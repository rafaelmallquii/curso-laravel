import { router } from "@inertiajs/react";
import React from "react";

export default function Index({ products, categories }: any) {
    console.log(products);

    return (
        <div>
            <select onChange={(e) => router.get(`/product/${e.target.value}`)}>
                <option value="">Seleccione una categoría</option>
                {categories.map((category: any) => (
                    <option key={category.id} value={category.name}>
                        {category.name}
                    </option>
                ))}
            </select>
            {products.length > 0 ? (
                <div className="grid grid-cols-4 gap-4">
                    {products.map((product: any) => (
                        <div className="shadow p-4 rounded-xl" key={product.id}>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full object-cover object-center"
                            />

                            <h4 className="text-center text-xl font-bold">
                                {product.name}
                            </h4>
                            <p>Precio: {product.price}</p>
                            <p>{product.description}</p>
                            <p>{product.category.name}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No hay productos</p>
            )}
        </div>
    );
}
