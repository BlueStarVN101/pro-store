"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart, UserIcon, Menu as MenuIcon } from "lucide-react";
import Link from "next/link";
import ModeToggle from "./mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-end gap-3 items-center">
      {/* Desktop Menu */}
      <nav className="hidden md:flex w-full max-w-xs gap-1 items-center">
        <ModeToggle />
        <Button asChild>
          <Link href="/cart" className="flex items-center gap-1">
            <ShoppingCart className="h-4 w-4" />
            <span>Cart</span>
          </Link>
        </Button>

        <Button asChild>
          <Link href="/sign-in" className="flex items-center gap-1">
            <UserIcon className="h-4 w-4" />
            <span>Sign In</span>
          </Link>
        </Button>
      </nav>

      {/* Mobile Hamburger Menu */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <MenuIcon className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="flex flex-col gap-4 mt-8">
            <div className="flex items-center gap-2 mb-4">
              <ModeToggle />
              <span className="text-sm font-medium">Theme</span>
            </div>
            <Button asChild className="justify-start" onClick={() => setOpen(false)}>
              <Link href="/cart" className="flex items-center gap-2">
                <ShoppingCart className="h-4 w-4" />
                <span>Cart</span>
              </Link>
            </Button>
            <Button asChild className="justify-start" onClick={() => setOpen(false)}>
              <Link href="/sign-in" className="flex items-center gap-2">
                <UserIcon className="h-4 w-4" />
                <span>Sign In</span>
              </Link>
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default Menu;
