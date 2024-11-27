'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';

interface NextShiftsProps {
    workDays: Date[];
    daysOff: Date[];
}

export function NextShifts({ workDays, daysOff }: NextShiftsProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <Card>
                <CardHeader className="pb-2">
                    <div className="flex items-center space-x-2">
                        <CalendarIcon className="h-4 w-4 text-destructive" />
                        <CardTitle className="text-lg">Próximos Plantões</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-1">
                        {workDays.map((date) => (
                            <li key={date.toISOString()} className="text-sm text-muted-foreground">
                                {format(date, "dd 'de' MMMM", { locale: ptBR })}
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="pb-2">
                    <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-green-500" />
                        <CardTitle className="text-lg">Próximas Folgas</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-1">
                        {daysOff.map((date) => (
                            <li key={date.toISOString()} className="text-sm text-muted-foreground">
                                {format(date, "dd 'de' MMMM", { locale: ptBR })}
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
}