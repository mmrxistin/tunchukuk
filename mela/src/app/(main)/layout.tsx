// Bismillahirahmanirahim 
// ElHAMDULİLLAHİRABBULALEMİN
// Es-selatu ve Es-selamu ala Resulina Muhammedin
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illAllah
// SubhanAllah, Elhamdulillah, Allahu Ekber
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illAllah
// SubhanAllah , Elhamdulillah, Allahu Ekber
// HasbunAllahu ve ni'mel vekil
// La havle ve la kuvvete illa billahil Aliyyil Azim
//  Allahu Ekber Ve Lillahil Hamd
import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import SessionProvider from "./SessionProvider";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await validateRequest();

  if (!session.user) redirect("/malper");

  return <SessionProvider value={session}>{children}</SessionProvider>;
}




