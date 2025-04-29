

export default function useDebounce(functionToDebounce: Function, limit: number){
    let timer: ReturnType<typeof setTimeout>;

    return [function(...args: any[]){
        clearTimeout(timer);
   
        timer = setTimeout(()=> {
          
            functionToDebounce(args)
        }, limit);
    }];
}