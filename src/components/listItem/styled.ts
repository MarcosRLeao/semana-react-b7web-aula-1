import styled from "styled-components";

type ContainerProps = {
    done: boolean
}

export const Container = styled.div(({ done }: ContainerProps) => (
    `
        display: flex;
        background-color: #20212c;
        padding: 10px;
        border-radius: 5px;
        margin: 0 0 10px;
        align-items: center;

        input{
            margin-right: 5px;
        }
        
        label{
            color: #ccc;
            text-decoration: ${done ? 'line-through' : 'initial'}
        }
    `
))

