import React from "react";

export default function Index({ categories }: any) {
    return (
        <div>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Nombre</th>
                        <th className="px-4 py-2">Descripción</th>
                        <th className="px-4 py-2">Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {/*  <tr>
                        <td className="border px-4 py-2">
                            Intro a la Programación
                        </td>
                        <td className="border px-4 py-2">
                            Aprende los conceptos básicos de la programación
                        </td>
                        <td className="border px-4 py-2">
                            <a href="#" className="text-blue-400">
                                Editar
                            </a>
                            <a href="#" className="text-red-400">
                                Eliminar
                            </a>
                        </td>
                    </tr> */}

                    {categories.map((category: any) => (
                        <tr key={category.id}>
                            <td className="border px-4 py-2">
                                {category.name}
                            </td>
                            <td className="border px-4 py-2">
                                {category.description}
                            </td>
                            <td className="border px-4 py-2">
                                <a href="#" className="text-blue-400">
                                    Editar
                                </a>
                                <a href="#" className="text-red-400">
                                    Eliminar
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
