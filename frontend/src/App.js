import React, { Component } from 'react';
import Button from './Button';
import './Calculator.css';
import Display from './Display';
import Keypad from './Keypad';
import axios from 'axios';
import request from 'superagent';



let aux = ''
let alv = []
var arreglo = new Array();
var prueba = new Array()
class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            data: '', operando1: '', operando1: '', simbolo: ' ', resultado: 0, fecha: ''
            , Operaciones: []
        }
    }

    GetOperaciones = async () => {
        await
            axios.get('http://localhost:7000/Operaciones')
                .then((response) => {
                    console.log("prueba2")
                    console.log(response);

                    const Operaciones = response.data.data.data







                    this.setState({

                        Operaciones: Operaciones
                    });





                });







    }

    submitHandler = async e => {
        e.preventDefault()
        console.log(this.state)
        const objeto = {
            fecha: this.state.fecha,

            operando1: this.state.operando1,
            operando2: this.state.operando2,
            resultado: this.state.resultado,
            simbolo: this.state.simbolo
        }

        console.log(objeto)
        await
            axios.post('http://localhost:7000/CrearOperacion', objeto)
                .then(response => {
                    console.log(response)
                });
    }
    componentDidMount() {
        this.GetOperaciones();

    }



    calculate = () => {
        try {
            const result = eval(this.state.data);

            var hoy = new Date();
            var fecha = hoy.getDate() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getFullYear();
            arreglo.push(fecha)
            this.state.fecha = fecha.toString()
            this.state.resultado = result
            console.log(this.state)

            arreglo = new Array()




            this.setState({ data: result })

        } catch (e) {
            this.setState({ data: 'error' })
        }
    }

    handleClick = e => {
        const value = e.target.getAttribute('data-value');


        switch (value) {
            case 'clear':
                this.setState({ data: '', operando1: ' ', operando2: '', simbolo: ' ', resultado: '' });
                break;
            case 'equal':
                this.calculate();
                this.state.operando2 = aux
                aux = ''
                break;
            case '+':
                this.state.operando1 = aux
                aux = ''
                this.setState({ simbolo: value });
                this.setState({ data: this.state.data + value });
                break;
            case '*':
                this.state.operando1 = aux
                aux = ''
                this.setState({ simbolo: value });
                this.setState({ data: this.state.data + value });
                break;
            case '-':
                this.state.operando1 = aux
                aux = ''
                this.setState({ simbolo: value });
                this.setState({ data: this.state.data + value });
                break;
            case '/':
                this.state.operando1 = aux
                aux = ''
                this.setState({ simbolo: value });

                this.setState({ data: this.state.data + value });
                break;

            default:
                aux += value
                this.setState({ data: this.state.data + value });
        }
    }
    render() {



        prueba = this.state.Operaciones
        console.log(prueba)



        var Ope = prueba.map((E, i) => {
            return <tr>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>






                <td class="table-light">{E.id}</td>
                <td class="table-light">{E.fecha}</td>
                <td class="table-light">{E.operando1}</td>
                <td class="table-light">{E.operando2}</td>
                <td class="table-light">{E.resultado}</td>
                <td class="table-light">{E.simbolo}</td>


            </tr>





        });

        return (
            <div>

                <  div class="row " align="left">
                    <div className="col-sm-6 text-center">
                        <div className="Calculator" >


                            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
                            <h1> <span class="badge bg-info text-dark">Calculadora </span></h1>
                            <Display data={this.state.data} />
                            <Keypad>
                                <Button onClick={this.handleClick} label="C" value="clear" />
                                <Button onClick={this.handleClick} label="7" value="7" />
                                <Button onClick={this.handleClick} label="4" value="4" />
                                <Button onClick={this.handleClick} label="1" value="1" />
                                <Button onClick={this.handleClick} label="0" value="0" />

                                <Button onClick={this.handleClick} label="/" value="/" />
                                <Button onClick={this.handleClick} label="8" value="8" />
                                <Button onClick={this.handleClick} label="5" value="5" />
                                <Button onClick={this.handleClick} label="2" value="2" />
                                <Button onClick={this.handleClick} label="." value="." />

                                <Button onClick={this.handleClick} label="*" value="*" />
                                <Button onClick={this.handleClick} label="9" value="9" />
                                <Button onClick={this.handleClick} label="6" value="6" />
                                <Button onClick={this.handleClick} label="3" value="3" />
                                <Button onClick={this.handleClick} label="" value="null" />

                                <Button onClick={this.handleClick} label="-" value="-" />
                                <Button onClick={this.handleClick} label="+" size="2" value="+" />
                                <Button onClick={this.handleClick} label="=" size="2" value="equal" />
                            </Keypad>



                            <form on onSubmit={this.submitHandler}>
                                <button type="submit" className="btn btn-info">Guardar </button>

                            </form>

                        </div >
                    </div>

                    <div className="col-sm-6 text-left">
                        <h1> <span class="badge bg-info text-dark">Operaciones </span></h1>
                        <table className="table table-info"> <thead>

                            <tr class="table-active">

                                <th scope="col">id</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Operando1</th>
                                <th scope="col">Operando2</th>
                                <th scope="col">Resultado</th>
                                <th scope="col">Simbolo</th>


                            </tr> </thead><tbody>  {Ope}  </tbody>  </table>



                    </div>
                </div >
            </div>
        );
    }
}

export default Calculator;