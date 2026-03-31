"use client";

import React from "react";
import { List } from "lucide-react";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader } from "@/components/ui/drawer";
import { TableOfContents } from "@/components/table-of-contents";
import { PromoContent } from "@/components/promo-content";

export function MobileTableOfContents() {
  return (
    <Drawer>
      <DrawerTrigger className="lg:hidden fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors">
        <List size={20} />
      </DrawerTrigger>

      <DrawerContent className="lg:hidden">
        <DrawerHeader>
          <h3 className="font-semibold">Table of Contents</h3>
        </DrawerHeader>
        <div className="p-4 overflow-y-auto flex-1">
          <TableOfContents />
        </div>
        <div className="border-t border-border">
          <PromoContent variant="mobile" />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
