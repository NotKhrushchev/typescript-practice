/**
 * Возможность определить несколько сигнатур одной функции с разными параметрами
 * и возвращаемыми типами, но с одним телом реализации.
 */

function head(value: string): string;
function head(value: number[]): number;
function head(value: boolean[]): boolean;

function head(value: any): any {
  return value[0];
}
