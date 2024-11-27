'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ShiftType } from '@/lib/types';

interface ShiftSelectorProps {
    value: ShiftType;
    onChange: (value: ShiftType) => void;
}

export function ShiftSelector({ value, onChange }: ShiftSelectorProps) {
    return (
        <Select value={value} onValueChange={onChange as (value: string) => void}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Selecione a escala" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="12x24">12x24</SelectItem>
                <SelectItem value="12x36">12x36</SelectItem>
                <SelectItem value="24x72">24x72</SelectItem>
            </SelectContent>
        </Select>
    );
}