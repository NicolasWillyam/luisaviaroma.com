"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MenuSection, newsList, brandsList } from "@/lib/data";
import ProductCard from "./product-card";

const navbarMenuList: { title: string; sections: MenuSection[] }[] = [
  { title: "What's New", sections: newsList },
  { title: "Brand", sections: newsList },
  { title: "What's New", sections: newsList },
  { title: "What's New", sections: newsList },
  { title: "What's New", sections: newsList },
];

console.log(brandsList);

export function NavBarMenu({ width }: any) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navbarMenuList.map((item, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div style={{ width: width }} className="flex px-8 py-6">
                <div className="row w-2/5 grid grid-cols-3">
                  {item.sections.map((section, index) => (
                    <div key={index} className="col">
                      <p className="text-xs font-semibold mb-2">
                        {section.title}
                      </p>
                      <ul>
                        {section.items.map((item, idx) => (
                          <ListItem
                            key={idx}
                            title={item.title}
                            href={item.href}
                          ></ListItem>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="w-3/5">
                  <p className="text-xs font-semibold mb-4 uppercase">
                    latest arrivals
                  </p>
                  <div className="grid grid-cols-4 gap-2.5">
                    <MenuProductCard />
                    <MenuProductCard />
                    <MenuProductCard />
                    <MenuProductCard />
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md py-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-[11px] font-medium leading-none hover:underline underline-offset-4">
            {title}
          </div>
          <p className="line-clamp-2 text-[11px] leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const MenuProductCard = () => {
  return (
    <div>
      <div className="w-full h-[270px] bg-gray-200 p-2.5"></div>
      <div className="mt-3">
        <p className="text-light-black text-xs font-bold uppercase">
          BOTTEGA VENETA
        </p>
        <p className="text-light-black font-normal text-xs my-1 mb-2">
          Mini Hop leather cross-body bag
        </p>
        <p className="text-light-black text-sm uppercase font-semibold">$200</p>
      </div>
    </div>
  );
};
