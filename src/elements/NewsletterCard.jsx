import Button from "../components/@ui/Button";
import React from "react";
import { toast } from "react-toastify";
import { Card, Title } from "../components/@ui/Card";
import { useTheme } from "../context/ThemeContext";

function NewsletterCard() {
   const mailRef = React.useRef(null);
   const [theme] = useTheme();

   const handleSubscribtion = (mail) => {
      if (!mail) return;

      toast.success("Successfully subscribed to our newsletter.");
   };

   const handleUnsubscribtion = (mail) => {
      if (!mail) return;

      toast.success("Successfully unsubscribed from our newsletter.");
   };

   return (
      <Card className="mt-4  xl:w-[74rem]">
         <Title title="Newsletter" subTitle="Subscribe to our newsletter so you don't miss an update!" />
         <div className="grid">
            <div className="m-auto flex flex-col items-center justify-between gap-4 xl:flex-row xl:gap-8">
               <div className="text-md">E-Mail</div>
               <input
                  ref={mailRef}
                  className={`h-8 w-48 flex-grow rounded-md border-[1px] border-zinc-900 ${theme.backgroundColor} px-4 outline-none`}
                  type="text"
                  placeholder="your e-mail address"
               />
               <div className="flex gap-4">
                  <Button className="bg-green-500" onClick={() => handleSubscribtion(mailRef.current?.value)}>
                     Subscribe
                  </Button>
                  <Button className="bg-red-500" onClick={() => handleUnsubscribtion(mailRef.current?.value)}>
                     Unsubscribe
                  </Button>
               </div>
            </div>
         </div>
      </Card>
   );
}

export default NewsletterCard;
