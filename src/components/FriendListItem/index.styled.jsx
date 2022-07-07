import styled from "@emotion/styled";

export const FriendListItemBox = styled.li`
   width: 320px;
   max-width: 100%;
   margin: 0px auto 20px auto;
   background-color: #ffffff;
   box-shadow: 0px 0px 10px rgba(0,0,0,0.25);
   list-style-type: none;
   padding: 10px 20px;
   display: flex;
   align-items: center;
   
   :last-child {
      margin-bottom: 0px;
   }
`;

export const Status = styled.span`
   width: 20px;
   height: 20px;
   min-width: 20px;
   margin-right: 20px;
   border-radius: 100%;

   ${(props) => {
      if(props.status){
         return "background: green;";
      }else {
         return "background: red;";
      }
   }}
`;

export const Photo = styled.img`
   width: 60px;
   height: 60px;
   min-width: 60px;
   object-position: center top;
   object-fit: cover;
   display: block;
`;

export const Name = styled.p`
   font-size: 20px;
   font-weight: bold;
   margin: 0px 0px 0px 20px;
`;