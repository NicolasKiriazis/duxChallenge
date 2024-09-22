import { IconField } from 'primereact/iconfield';
import Icons from '../../atoms/icons';
import DropDown from '../../atoms/dropDown';
import { useState } from 'react';
import React from 'react';


interface DropDownMoleculeProps{

    placeHolder: string

}

const DropDownMolecule:React.FC<DropDownMoleculeProps> = ({placeHolder}) => {

    const [searchEstado, setSearchEstado] = useState<string | null>(null); // Estado para la búsqueda por estado
    
    const estadoOptions = [
    { label: 'ACTIVO', value: 'ACTIVO' },
    { label: 'INACTIVO', value: 'INACTIVO' }
    ];

    const sectorOptions = [
    {label: '1000', value: '1000'}
    ]

    //Traer la lupa

    const valueTemplate = (option: any, props: any) => {
        if (!option) {
            return (
            <div className="dropdown-placeholder h-1rem flex flex-row align-items-center my-1">
                <i className="pi pi-search flex align-items-center"></i>
                <p className="flex align-items-center ml-2">{placeHolder}</p>
            </div>
        );
        }
        return option.label;
    };

    return<>

    <div className="dropdown-icon-container  md:w-4">
    
    <DropDown state={searchEstado} options={estadoOptions} setState={setSearchEstado} placeHolder='Seleccionar Sector' valueIcon={valueTemplate} className="h-3rem w-full" />
    
    </div>
    
    </>
}

export default DropDownMolecule