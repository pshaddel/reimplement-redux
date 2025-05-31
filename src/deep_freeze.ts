type DeepReadonly<T> = {
    readonly [P in keyof T]: DeepReadonly<T[P]>;
  };
  
export function deepFreeze<T extends {
    [key: string]: any
}>(obj: T): DeepReadonly<T> {
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        deepFreeze(obj[key]);
      }
    });
    return Object.freeze(obj);
}