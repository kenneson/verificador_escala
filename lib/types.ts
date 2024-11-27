export type ShiftType = '12x24' | '12x36' | '24x72';

export interface ShiftConfig {
    type: ShiftType;
    cycleLength: number;
    workDays: number[];
}