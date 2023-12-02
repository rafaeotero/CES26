const initialState = {
    resultado: 0,
  };
  
  const calculadoraReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SOMAR':
        return { resultado: state.resultado + action.payload };
      case 'SUBTRAIR':
        return { resultado: state.resultado - action.payload };
      case 'MULTIPLICAR':
        return { resultado: state.resultado * action.payload };
      case 'DIVIDIR':
        return { resultado: state.resultado / action.payload };
      default:
        return state;
    }
  };
  
  export default calculadoraReducer;
  