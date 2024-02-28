import { useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, errors } = useForm({
        name: "",
        description: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post("/category");
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="grid gap-4 w-1/2 mx-auto py-16"
            >
                <input
                    type="text"
                    name="name"
                    value={data.name}
                    placeholder="Nombre de la Categoría"
                    onChange={(e) => setData("name", e.target.value)}
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}

                <textarea
                    name="description"
                    value={data.description}
                    onChange={(e) => setData("description", e.target.value)}
                    placeholder="Descripción de la Categoría"
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
