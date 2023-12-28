"use client";

import * as React from "react";
import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import { ptBR } from "date-fns/locale";

export function DatePicker() {
    const [date, setDate] = useState<Date>();
    //const [useTodayDate, setUseTodayDate] = useState<boolean>(true);

    // function handleUseTodayDate(e: FormEvent<HTMLInputElement>) {
    //     setUseTodayDate((prev) => !prev);
    //     setDate(new Date());

    //     console.log(useTodayDate);

    //     console.log("log");

    //     console.log(useTodayDate);
    //     console.log(date);

    //     console.log(e.target.);
    // }

    return (
        <>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground",
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? (
                            format(date, "PPP", { locale: ptBR })
                        ) : (
                            <span>Selecione uma data</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        locale={ptBR}
                    />
                </PopoverContent>
            </Popover>
            {/* <div className="pt-4 flex items-center gap-2">
                <Checkbox
                    id="today-date"
                    onChange={(e) => handleUseTodayDate(e)}
                />
                <label htmlFor="today-date" className="text-sm text-gray-400">
                    Use a data de hoje
                </label>
            </div> */}
        </>
    );
}
