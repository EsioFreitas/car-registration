const inputs = {
    marca: {
        label: "Marca",
        type: 'input',
        config: {
            type: 'text',
            placeholder: 'Honda'
        },
        value: '',
    },
    modelo: {
        label: "Modelo",
        type: 'input',
        config: {
            type: 'text',
            placeholder: 'Fit EXL 1.5 Flex 16V 5p Mec'
        },
        value: '',
    },
    ano: {
        label: "Ano",
        type: 'input',
        config: {
            type: 'number',
            placeholder: '2009'
        },
        value: '',
    },
    renavam: {
        label: "Renavam",
        type: 'input',
        config: {
            type: 'text',
            placeholder: '69047446258'
        },
        value: '',
    },
    placa: {
        label: "Placa",
        type: 'input',
        config: {
            type: 'text',
            placeholder: 'MZS-2703'
        },
        value: '',
    },
    Cor: {
        label: "Cor",
        type: 'input',
        config: {
            type: 'text',
            placeholder: 'Verde'
        },
        value: '',
    },
    obs: {
        label: "Observações",
        type: 'textarea',
        config: {
            type: 'text',
            placeholder: 'Coloque detalhes inportantes sobre seu veículo',
            min: '1000',
            max: '2020'
        },
        value: '',
    }
}

export default inputs