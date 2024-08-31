function operacion(a,b,signo)
{
    switch(signo)
    {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return "Error: Operador no válido.";
    }
}




console.log(operacion(10, 6, '+') );