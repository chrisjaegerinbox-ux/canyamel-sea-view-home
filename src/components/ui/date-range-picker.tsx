import { useState, useRef, useEffect } from 'react';
import {
  format, addMonths, subMonths, startOfMonth, endOfMonth,
  startOfWeek, endOfWeek, addDays, isSameDay, isSameMonth, isToday, differenceInCalendarMonths,
} from 'date-fns';
import { de } from 'date-fns/locale';
import { Calendar, ChevronLeft, ChevronRight, X, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DateRangePickerProps {
  startDate: string;
  endDate: string;
  onStartChange: (date: string) => void;
  onEndChange: (date: string) => void;
  startLabel?: string;
  endLabel?: string;
  minStayMonths?: number;
  className?: string;
}

const WEEKDAYS = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];

const toLocalDate = (str: string): Date | null => {
  if (!str) return null;
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, m - 1, d);
};

const toDateStr = (d: Date): string => format(d, 'yyyy-MM-dd');

const displayDate = (str: string): string =>
  format(toLocalDate(str)!, 'd. MMM yyyy', { locale: de });

export function DateRangePicker({
  startDate,
  endDate,
  onStartChange,
  onEndChange,
  startLabel = 'Einzugsdatum',
  endLabel = 'Auszugsdatum',
  minStayMonths = 0,
  className,
}: DateRangePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(() => {
    const d = toLocalDate(startDate);
    return d ? new Date(d.getFullYear(), d.getMonth(), 1) : new Date();
  });
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  const [phase, setPhase] = useState<'start' | 'end'>('start');
  const containerRef = useRef<HTMLDivElement>(null);

  const start = toLocalDate(startDate);
  const end = toLocalDate(endDate);

  // Minimum valid end date
  const minEndDate = start && minStayMonths > 0 ? addMonths(start, minStayMonths) : null;

  // Is the selected duration too short?
  const isTooShort =
    !!(start && end && minEndDate && differenceInCalendarMonths(end, start) < minStayMonths);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Build calendar grid (Mon–Sun weeks)
  const days: Date[] = [];
  {
    let d = startOfWeek(startOfMonth(currentMonth), { weekStartsOn: 1 });
    const last = endOfWeek(endOfMonth(currentMonth), { weekStartsOn: 1 });
    while (d <= last) {
      days.push(d);
      d = addDays(d, 1);
    }
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handleDayClick = (day: Date) => {
    if (phase === 'start') {
      onStartChange(toDateStr(day));
      onEndChange('');
      setPhase('end');
    } else {
      if (start && day < start) {
        onStartChange(toDateStr(day));
        onEndChange(toDateStr(start));
      } else {
        onEndChange(toDateStr(day));
      }
      setPhase('start');
      setIsOpen(false);
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onStartChange('');
    onEndChange('');
    setPhase('start');
  };

  const isInRange = (day: Date): boolean => {
    const s = start;
    const e2 = end ?? (phase === 'end' && hoverDate ? hoverDate : null);
    if (!s || !e2) return false;
    const lo = s <= e2 ? s : e2;
    const hi = s <= e2 ? e2 : s;
    return day >= lo && day <= hi;
  };

  // Days before minEndDate (excluding start) when picking end — visually "too early"
  const isTooEarlyEnd = (day: Date): boolean => {
    if (phase !== 'end' || !start || !minEndDate) return false;
    return day > start && day < minEndDate;
  };

  // The exact minimum end date — gets a special marker
  const isMinEndMarker = (day: Date): boolean =>
    !!(phase === 'end' && minEndDate && isSameDay(day, minEndDate));

  const triggerLabel = () => {
    if (startDate && endDate) return `${displayDate(startDate)}  –  ${displayDate(endDate)}`;
    if (startDate) return `${displayDate(startDate)}  –  ?`;
    return null;
  };

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      {/* Two-column labels */}
      <div className="grid grid-cols-2 gap-4 mb-1.5">
        <span className="block text-sm font-medium font-sans text-foreground">{startLabel}</span>
        <span className="block text-sm font-medium font-sans text-foreground">{endLabel}</span>
      </div>

      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setIsOpen(v => !v)}
        className={cn(
          'w-full px-4 py-3 border rounded text-sm font-sans bg-white text-left',
          'flex items-center justify-between gap-3 transition-colors duration-200 outline-none',
          isTooShort
            ? 'border-terracotta/60 ring-2 ring-terracotta/15'
            : isOpen
              ? 'border-azure ring-2 ring-azure/20'
              : 'border-border hover:border-azure/50',
        )}
      >
        <span className={cn('flex items-center gap-2.5 flex-1 min-w-0', !triggerLabel() && 'text-muted-foreground')}>
          <Calendar className={cn('w-4 h-4 flex-shrink-0', isTooShort ? 'text-terracotta' : 'text-terracotta')} />
          <span className="truncate">{triggerLabel() ?? 'Zeitraum wählen…'}</span>
        </span>
        {(startDate || endDate) && (
          <span
            onClick={handleClear}
            className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
          >
            <X className="w-3.5 h-3.5" />
          </span>
        )}
      </button>

      {/* Minimum stay warning */}
      {isTooShort && (
        <div className="mt-2 flex items-start gap-2 bg-terracotta/8 border border-terracotta/25 rounded-lg px-3 py-2.5">
          <AlertCircle className="w-4 h-4 text-terracotta flex-shrink-0 mt-0.5" />
          <p className="text-xs font-sans text-terracotta/90 leading-relaxed">
            Die Mindestmietdauer beträgt <strong>{minStayMonths} Monate</strong>.
            Frühestmöglicher Auszug: <strong>{format(minEndDate!, 'd. MMMM yyyy', { locale: de })}</strong>.
          </p>
        </div>
      )}

      {/* Calendar dropdown */}
      {isOpen && (
        <div className="absolute top-[calc(100%+6px)] left-0 z-50 bg-white rounded-xl border border-border shadow-warm p-4 w-72">
          {/* Month navigation */}
          <div className="flex items-center justify-between mb-3">
            <button
              type="button"
              onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
              className="w-7 h-7 flex items-center justify-center rounded hover:bg-muted/60 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-muted-foreground" />
            </button>
            <span className="font-display text-sm font-semibold text-foreground capitalize">
              {format(currentMonth, 'MMMM yyyy', { locale: de })}
            </span>
            <button
              type="button"
              onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
              className="w-7 h-7 flex items-center justify-center rounded hover:bg-muted/60 transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>

          {/* Weekday headers */}
          <div className="grid grid-cols-7 mb-1">
            {WEEKDAYS.map(d => (
              <div
                key={d}
                className="text-center text-[9px] font-semibold text-muted-foreground uppercase tracking-widest py-1"
              >
                {d}
              </div>
            ))}
          </div>

          {/* Day cells */}
          <div className="grid grid-cols-7">
            {days.map((day, i) => {
              const isStart = !!(start && isSameDay(day, start));
              const isEnd = !!(end && isSameDay(day, end));
              const inRange = isInRange(day);
              const inMonth = isSameMonth(day, currentMonth);
              const todayDay = isToday(day);
              const isPast = day < today;
              const isSelected = isStart || isEnd;
              const tooEarly = isTooEarlyEnd(day);
              const isMinEnd = isMinEndMarker(day);

              return (
                <div
                  key={i}
                  className={cn(
                    'relative h-9 flex items-center justify-center',
                    inRange && 'bg-azure/10',
                    inRange && isStart && 'rounded-l-full',
                    inRange && isEnd && 'rounded-r-full',
                    inRange && isStart && isEnd && 'rounded-full',
                  )}
                  onMouseEnter={() => setHoverDate(day)}
                  onMouseLeave={() => setHoverDate(null)}
                  onClick={() => inMonth && !isPast && handleDayClick(day)}
                >
                  <div
                    className={cn(
                      'w-8 h-8 flex items-center justify-center rounded-full text-sm select-none transition-colors',
                      inMonth && !isPast ? 'cursor-pointer' : 'cursor-default',
                      !inMonth && 'text-muted-foreground/20',
                      inMonth && !isSelected && !isPast && !tooEarly && 'hover:bg-azure/20 hover:text-azure',
                      inMonth && !isSelected && !isPast && tooEarly && 'opacity-40 hover:opacity-60',
                      isSelected && 'bg-azure text-white font-semibold shadow-sm',
                      isMinEnd && !isSelected && 'ring-2 ring-terracotta/60 text-terracotta font-semibold',
                      todayDay && !isSelected && !isMinEnd && 'ring-1 ring-terracotta text-terracotta',
                      isPast && inMonth && !isSelected && 'opacity-30',
                    )}
                  >
                    {format(day, 'd')}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Status hint */}
          <div className="mt-3 pt-3 border-t border-border/50 text-center">
            <p className="text-xs text-muted-foreground font-sans">
              {phase === 'start'
                ? 'Einzugsdatum wählen'
                : minStayMonths > 0
                  ? `Auszugsdatum wählen (mind. ${minStayMonths} Monate)`
                  : 'Auszugsdatum wählen'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
