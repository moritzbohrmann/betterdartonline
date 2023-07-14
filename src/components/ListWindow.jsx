import React from "react";
import UIWindow from "./UIWindow";
import { useSelector } from "react-redux";

function ListWindow(props) {
   return (
      <UIWindow title={props.title} className="h-144">
         <List {...props} />
         {props.children}
      </UIWindow>
   );
}

const List = (props) => {
   let render = [];
   const filter = useSelector((state) => state.list.filter);

   let list = props.list;

   if (!list) return;

   if (filter === "") {
      list.forEach((element) => {
         render.push(<ListItem onClick={props.onClick} player={element} />);
      });
   } else {
      list
         .filter((player) => `${player.username} ${player.scoremode} ${player.gamemode} ${player.legamount}`.includes(filter))
         .forEach((element) => {
            render.push(<ListItem onClick={props.onClick} player={element} />);
         });
   }

   return <ul className="w-11/12 h-3/4 m-auto overflow-auto flex flex-col items-center">{render}</ul>;
};

const ListItem = ({ player, onClick }) => {
   return (
      <li
         onClick={() => onClick(player)}
         className="w-11/12 h-12 mt-4 px-8 bg-dark-background flex items-center justify-between font-primary font-bold text-white-default rounded-md hover:scale-105 hover:cursor-pointer transition-all">
         <h2>{player.username}</h2>
         <h2>{`${player.scoremode} ${player.gamemode} ${player.legamount}`}</h2>
      </li>
   );
};

export default ListWindow;
