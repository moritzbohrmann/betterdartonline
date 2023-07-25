import React from "react";
import UIWindow from "../components/UIWindow";
import InputField from "../components/InputField";
import { useSocket } from "../context/SocketContext";
import $ from "jquery";
import UIButton from "../components/UIButton";
import { removeBlur } from "../utils/StyleUtils";

function CorrectionPopup() {
   const socket = useSocket();
   const correctionRef = React.useRef(null);

   const handleSubmit = () => {
      socket.emit("score-edit", Number(correctionRef.current?.value));

      handleAbort();
   };
   const handleAbort = () => {
      correctionRef.current.value = "";

      $("#corwin").addClass("hidden");
      removeBlur("#matchuicontrolbar, #matchuihead, #matchuitable");
   };

   React.useEffect(() => {
      correctionRef.current.focus();
   });

   return (
      <UIWindow id="corwin" title="Korrektur" className="fixed top-80 hidden h-64 bg-dark-background">
         <InputField className="m-auto" placeholder="Korrektur hier eingeben" innerRef={correctionRef} onSubmit={handleSubmit} />
         <div className="flex gap-4">
            <UIButton onClick={handleAbort} className="bg-red-500">
               ✗
            </UIButton>
            <UIButton onClick={handleSubmit} className="bg-green-500">
               ✓
            </UIButton>
         </div>
      </UIWindow>
   );
}

export default CorrectionPopup;
