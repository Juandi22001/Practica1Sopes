import React, { Component } from 'react';
import Button from './Button';
import './Calculator.css';
import Display from './Display';
import Keypad from './Keypad';
import axios from 'axios';
import request from 'superagent';

let var1
let var2
let simbolo

let aux =''
let cont
var arreglo = new Array();
class Calculator extends Component {
    constructor() {
        super();
        this.state = { data: '', operando1: '', operando2: '', simbolo: ' ', resultado: '' ,fecha:''}
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:3200/AsignarActividad', arreglo)
            .then(response => {
                console.log(response)
            });
    }

    calculate = () => {
        try {
            const result = eval(this.state.data);

            var hoy = new Date();
            var fecha = hoy.getDate() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getFullYear();
            arreglo.push(fecha)
            this.state.fecha=fecha
            this.state.resultado=result
            console.log(this.state)

            arreglo = new Array()



            this.setState({ data: result })

        } catch (e) {
            this.setState({ data: 'error' })
        }
    }

    handleClick = e => {
        const value = e.target.getAttribute('data-value');

            console.log(arreglo)

        switch (value) {
            case 'clear':
                this.setState({ data: '', operando1: ' ', operando2: '', simbolo: ' ', resultado: '' });
                break;
            case 'equal':
                this.calculate();
                this.state.operando2=aux
                aux=''
                break;
            case '+':
                this.state.operando1=aux
                aux=''
                this.setState({ simbolo: value });
                this.setState({ data: this.state.data + value });
                break;
            case '*':
                this.state.operando1=aux
                aux=''
                this.setState({ simbolo: value });
                this.setState({ data: this.state.data + value });
                break;
            case '-':
                this.state.operando1=aux
                aux=''
                this.setState({ simbolo: value });
                this.setState({ data: this.state.data + value });
                break;
            case '/':
                this.state.operando1=aux
                aux=''
                this.setState({ simbolo: value });

                this.setState({ data: this.state.data + value });
                break;

            default:
                aux += value
                this.setState({ data: this.state.data + value });
        }
    }
    render() {
        return (
            <div className="Calculator">
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
            </div>
        );
    }
}

export default Calculator;