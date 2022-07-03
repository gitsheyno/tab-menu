import styled  from 'styled-components'

export const Wrapper = styled.main`

    width:90%;
    padding: 5rem 0;
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    align-items: flex-start;
    ul{
        list-style-type: none;
        margin-right: 20px;
        li{
            font-size: 1.3rem;
            padding:0 4.5rem;
            margin-bottom: 20px;
            font-weight: 900;
            &.active{
                color:aqua;
                border-left: 2px solid aqua;
            }
            cursor: pointer;
        }
    }
    .date{
        color:#666;
        font-size: 1.1rem;
    }
    .title{
        color:#555;
        font-size: 1.8rem;
        margin-bottom: 20px;
    }
    .name{
        padding: 0.5rem 0.9rem;
        background-color: lightgray;
        display: inline-flex;
        margin-bottom: 20px;
    }
    .info{
        font-size: 1.1rem;
        margin-top: 30px;
        display: flex;
        align-items: center;
        svg{
            margin-right:30px;
            color: aqua;
            font-size: 32px;
        }
    }
`