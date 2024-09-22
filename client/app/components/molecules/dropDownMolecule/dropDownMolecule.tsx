import { IconField } from 'primereact/iconfield';
import Icons from '../../atoms/icons';
import DropDown from '../../atoms/dropDown';
import { useState } from 'react';


const DropDownMolecule = () => {

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
            <div className="dropdown-placeholder">
                <i className="pi pi-search" style={{ marginRight: '8px' }}></i>
            </div>
        );
        }
        return option.label;
    };

    return<>

    <div className="dropdown-icon-container bg-pink-500">
    
    <DropDown state={searchEstado} options={estadoOptions} setState={setSearchEstado} placeHolder='Seleccionar Sector' valueIcon={valueTemplate} />
    
    </div>
    
    </>
}

export default DropDownMolecule