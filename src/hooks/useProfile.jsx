import { useLocalStorage } from "./useLocalStorage";

export function useProfile() {
   const [profile, setProfile] = useLocalStorage("profile", {
      id: crypto.randomUUID(),
      username: "",
      gamemode: "firstto",
      scoremode: "501",
      legamount: "5",
   });

   return [profile, setProfile];
}
