import styled from "styled-components";


export const Container=styled.div`
position: absolute;
display:flex;
height: 100vh;

width:73vw;
max-width: 100%;
margin: 0 10%; 
flex-direction: row-reverse;
align-items: center;
justify-content: flex-start;

@media ${(props) => props.theme.breakpoints.sm} {
   padding: ${(props) => props.nopadding ? "0" : "16px 16px 0" } ;

   height: 50vh;
   flex-direction: row;
   justify-content:center;
   align-items: flex-end;
 }
`

export const Img=styled.div`
position: absolute;
opacity: 0.4;

`

export const Ring=styled.div`
z-index:-1;
position:relative;
width:500px;    
height:500px;
margin:-30px;
border-radius:50%;
border:4px solid transparent;
border-top:4px solid #24ecff;
animation: animate 4s linear infinite;

@keyframes animate
{
 0%
 {
    transform:rotate(0deg);
 }
  100%
 {
    transform:rotate(360deg);
 }
}

&::before
{
 content:'';
 position:absolute;
 top:65px;
 right:65px;
 border-radius:50%;
 width:15px;
 height:15px;
 background:#24ecff;
 box-shadow:0 0 5px #24ecff33,
 0 0 0 10px #24ecff22,
 0 0 0 20px #24ecff11,
 0 0 20px   #24ecff,
 0 0 20px   #24ecff;
        }
`