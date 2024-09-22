import { IconField } from 'primereact/iconfield';
import Icons from '../../atoms/icons';
import DropDown from '../../atoms/dropDown';
import { useState } from 'react';
import React from 'react';
import {Options} from "../../../types/type"


interface DropDownMoleculeProps{

    placeHolder: string

    state: string
    setState: (state:string) => void

    options: Options[]

}

const DropDownMolecule:React.FC<DropDownMoleculeProps> = ({placeHolder, state, setState, options}) => {


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

    <div className="dropdown-icon-container  md:w-4 mr-2">
    
    <DropDown state={state} options={options} setState={setState} placeHolder='Seleccionar Sector' valueIcon={valueTemplate} className="h-3rem w-full" />
    
    </div>
    
    </>
}

export default DropDownMolecule