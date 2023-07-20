import React from "react";
import UIWindowTitle from "../components/UIWindowTitle";
import UIWindow from "../components/UIWindow";
import InputField from "../components/InputField";

function CorrectionPopup() {
   return (
      <UIWindow id="corwin" title="Korrektur" className="fixed top-80 hidden h-64 bg-dark-background">
         <InputField className="m-auto" placeholder="Korrektur hier eingeben" onSubmit={(value) => alert(value)} />
      </UIWindow>
   );
}

export default CorrectionPopup;
