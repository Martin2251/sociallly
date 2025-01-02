import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
<div className="m-4">
<SignedOut>
            <SignInButton mode="modal" >
              <Button>sign in</Button>
            </SignInButton>
          </SignedOut>
          <ModeToggle  />
          <SignedIn>
            <UserButton />
          </SignedIn>
          <Button variant={"secondary"}>Click me</Button>
</div>
  );
}
