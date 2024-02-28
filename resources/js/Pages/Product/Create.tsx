import { useForm } from "@inertiajs/react";

export default function Create({ categories }: any) {
    const { data, setData, post, errors } = useForm({
        name: "",
        price: "",
        image: null as File | null,
        description: "",
        category_id: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        /*  console.log(data); */

        post("/product");
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="grid gap-4 w-1/2 mx-auto py-16"
            >
                <select
                    name="category_id"
                    value={data.category_id}
                    onChange={(e) => setData("category_id", e.target.value)}
                >
                    <option value="">Seleccione una categoría</option>
                    {categories.map((category: any) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>

                <input
                    type="text"
                    name="name"
                    value={data.name}
                    placeholder="Nombre del Producto"
                    onChange={(e) => setData("name", e.target.value)}
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
                <input
                    type="number"
                    name="price"
                    value={data.price}
                    onChange={(e) => setData("price", e.target.value)}
                    placeholder="Precio del Producto"
                />
                {errors.price && <p className="text-red-500">{errors.price}</p>}
                <input
                    type="file"
                    name="image"
                    onChange={(e) => setData("image", e.target.files![0])}
                    accept="image/*"
                />
                {errors.image && <p className="text-red-500">{errors.image}</p>}
                <textarea
                    name="description"
                    value={data.description}
                    onChange={(e) => setData("description", e.target.value)}
                    placeholder="Descripción del Producto"
                />
                {errors.description && (
                    <p className="text-red-500">{errors.description}</p>
                )}
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                    Guardar
                </button>
            </form>
        </div>
    );
}
