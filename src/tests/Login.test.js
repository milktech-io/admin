import React from 'react'
import { fireEvent, render, screen } from "@testing-library/react";
import { Login } from "../pages/Login"
import { BrowserRouter } from 'react-router-dom';

describe('Renders Login screen', ()=>{
        
        /**
         * @jest-environment jsdom
         */
        test('Use jsdom in this test file', () => {
            const element = document.createElement('div');
            expect(element).not.toBeNull();
        });

        const mockedUsedNavigate = jest.fn();
        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useNavigate: () => mockedUsedNavigate,
            }));


        test('Show "Quiero ser parte de EON" text', () => {
            
            render(
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            
            );

            const linkElement = screen.getByText(/Quiero ser parte de EON/i);
            expect(linkElement).toBeInTheDocument();
        })

        test('Show "Ingresar" button', () => {
            render(
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            );

            const linkElement = screen.getByText(/Ingresar/i);
            expect(linkElement).toBeInTheDocument();
        })

        test('It can click the button', () => {
            render(
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            );

            fireEvent.click(screen.getByRole("button", { name: /Ingresar/i }));
            expect(screen.getByRole("button", { name: /Ingresar/i })).toBeTruthy();
        })
})