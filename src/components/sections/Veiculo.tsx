import React from "react";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export function Veiculo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="moto">
        <TabsList>
          <TabsTrigger value="moto">Moto</TabsTrigger>
          <TabsTrigger value="carro">Carro</TabsTrigger>
        </TabsList>
        <TabsContent value="moto">
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 h-full">
            <CardHeader>
              <CardTitle>Moto</CardTitle>
              <CardDescription>
                Make changes to your moto here. Click save when you&apos;re
                done.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-name">Name</Label>
                <Input id="tabs-demo-name" defaultValue="Pedro Duarte" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-username">Username</Label>
                <Input id="tabs-demo-username" defaultValue="@peduarte" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </div>
        </TabsContent>
        <TabsContent value="carro">
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 h-full">
            <CardHeader>
              <CardTitle>Carro</CardTitle>
              <CardDescription>
                Change your carro here. After saving, you&apos;ll be logged
                out.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
                <h1>conteudo</h1>
            </CardContent>
            <CardFooter>
              <Button>Save carro</Button>
            </CardFooter>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
