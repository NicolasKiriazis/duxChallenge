"use client"

import React, { useEffect, useState } from "react";
import { getPersonal } from "../services/personalServices";

interface Personal {
        id: number;
        estado: string;
        sector: number;
        usuario: string;
  // Otros campos de la API...
}

const PersonalList: React.FC = () => {
        const [personal, setPersonal] = useState<Personal[]>([]);

        useEffect(() => {
                const fetchPersonal = async () => {
                const data = await getPersonal(1000, 100, 1);
                setPersonal(data);
                };
                fetchPersonal();
                }, []);

        return (
        <>
        <ul>
        {personal.map((person) => (
            <li key={person.id}>
            {person.usuario} - Sector: {person.sector}
            </li>
        ))}
        </ul>
    </>
    );
};

export default PersonalList;



