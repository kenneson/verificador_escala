import { differenceInDays, parseISO, addDays, format } from 'date-fns';
import { ShiftType, ShiftConfig } from './types';

const SHIFT_CONFIGS: Record<ShiftType, ShiftConfig> = {
  '12x24': {
    type: '12x24',
    cycleLength: 2,
    workDays: [0]
  },
  '12x36': {
    type: '12x36',
    cycleLength: 2,
    workDays: [0]
  },
  '24x72': {
    type: '24x72',
    cycleLength: 4,
    workDays: [0]
  }
};

// Reference date when you worked (any known work day in the past)
const REFERENCE_WORK_DATE = '2024-03-25';

export function isWorkDay(dateString: string, shiftType: ShiftType = '12x24'): boolean {
  const targetDate = parseISO(dateString);
  const referenceDate = parseISO(REFERENCE_WORK_DATE);
  const config = SHIFT_CONFIGS[shiftType];

  const daysDifference = Math.abs(differenceInDays(targetDate, referenceDate));
  return config.workDays.includes(daysDifference % config.cycleLength);
}

export function getNextWorkDays(date: Date, count: number, shiftType: ShiftType = '12x24'): Date[] {
  const workDays: Date[] = [];
  let currentDate = date;

  while (workDays.length < count) {
    currentDate = addDays(currentDate, 1);
    if (isWorkDay(format(currentDate, 'yyyy-MM-dd'), shiftType)) {
      workDays.push(currentDate);
    }
  }

  return workDays;
}

export function getNextDaysOff(date: Date, count: number, shiftType: ShiftType = '12x24'): Date[] {
  const daysOff: Date[] = [];
  let currentDate = date;

  while (daysOff.length < count) {
    currentDate = addDays(currentDate, 1);
    if (!isWorkDay(format(currentDate, 'yyyy-MM-dd'), shiftType)) {
      daysOff.push(currentDate);
    }
  }

  return daysOff;
}