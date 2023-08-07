import React from "react";
import { toast } from "react-toastify";
import { Button } from "../components/@ui/Button";
import { Card, Title } from "../components/@ui/Card";
import { Input } from "../components/@ui/Input";
import { Text } from "../components/@ui/Text";
import { useTheme } from "../context/ThemeContext";

function NewsletterCard() {
   const mailRef = React.useRef(null);
   const [theme] = useTheme();

   const handleSubscribtion = () => {
      if (mailRef.current.value.length === 0) return;

      toast.success("Successfully subscribed to our newsletter.");
   };

   const handleUnsubscribtion = () => {
      if (mailRef.current.value.length === 0) return;

      toast.success("Successfully unsubscribed from our newsletter.");
   };

   return (
      <Card size="fill">
         <Title title="Newsletter" subTitle="Subscribe to our newsletter so you don't miss an update!" />
         <div>
            <div className="m-auto flex flex-wrap items-center justify-center gap-4 xl:gap-8">
               <Text>E-Mail</Text>
               <Input ref={mailRef} size="xl" placeholder="your e-mail address" />
               <div className="flex gap-4">
                  <Button variant="positive" onClick={handleSubscribtion}>
                     Subscribe
                  </Button>
                  <Button variant="negative" onClick={handleUnsubscribtion}>
                     Unsubscribe
                  </Button>
               </div>
            </div>
         </div>
      </Card>
   );
}

export default NewsletterCard;
