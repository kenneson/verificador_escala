'use client';

import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { isWorkDay, getNextWorkDays, getNextDaysOff } from '@/lib/schedule';
import { Calendar as CalendarIcon } from 'lucide-react';
import { ShiftSelector } from '@/components/shift-selector';
import { NextShifts } from '@/components/next-shifts';
import { ShiftType } from '@/lib/types';

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [shiftType, setShiftType] = useState<ShiftType>('12x24');

  const getScheduleStatus = (selectedDate: Date | undefined) => {
    if (!selectedDate) return null;

    const isWork = isWorkDay(format(selectedDate, 'yyyy-MM-dd'), shiftType);
    return isWork ? 'Dia de Trabalho' : 'Dia de Folga';
  };

  const getStatusColor = (status: string | null) => {
    if (status === 'Dia de Trabalho') return 'destructive';
    if (status === 'Dia de Folga') return 'success';
    return 'secondary';
  };

  const nextWorkDays = date ? getNextWorkDays(date, 5, shiftType) : [];
  const nextDaysOff = date ? getNextDaysOff(date, 5, shiftType) : [];

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-4">
        <Card className="shadow-lg">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <CalendarIcon className="h-6 w-6" />
                <CardTitle className="text-2xl font-bold">Folguei</CardTitle>
              </div>
              <ShiftSelector value={shiftType} onChange={setShiftType} />
            </div>
            <p className="text-sm text-muted-foreground">
              Selecione uma data para verificar seu status
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                locale={ptBR}
                className="rounded-md border"
              />
            </div>

            {date && (
              <div className="space-y-2">
                <p className="text-center text-sm text-muted-foreground">
                  Data selecionada: {format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                </p>
                <div className="flex justify-center">
                  <Badge variant={getStatusColor(getScheduleStatus(date))} className="text-md px-4 py-1">
                    {getScheduleStatus(date)}
                  </Badge>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <NextShifts workDays={nextWorkDays} daysOff={nextDaysOff} />
      </div>
    </div>
  );
}