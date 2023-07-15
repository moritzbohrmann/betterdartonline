import React from "react";
import UIWindow from "../components/UIWindow";
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

   return <ul className="m-auto flex h-3/4 w-11/12 flex-col items-center overflow-auto">{render}</ul>;
};

const ListItem = ({ player, onClick }) => {
   return (
      <li
         onClick={() => onClick(player)}
         className="mt-4 flex h-12 w-11/12 items-center justify-between rounded-md bg-dark-background px-8 font-primary font-bold text-white-default transition-all hover:scale-105 hover:cursor-pointer"
      >
         <h2>{player.username}</h2>
         <h2>{`${player.scoremode} ${player.gamemode} ${player.legamount}`}</h2>
      </li>
   );
};

export default ListWindow;
