import { immer } from "zustand/middleware/immer";
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "../constants";
import { create } from "zustand";


const useWindowStore = create(
    immer((set)=>({
        windows:WINDOW_CONFIG,
        nextZindex:INITIAL_Z_INDEX+1,

        openWindow:(windowKey , data=null)=>
            set((state)=>{
                const win =  state.windows[windowKey];
                if(!win) return;
                win.isOpen = true;
                win.ZIndex  = state.nextZindex ;
                win.data = data ?? win.data;
                state.nextZindex++;
            }),
            
        openWindow:(windowKey , data=null)=>
            set((state)=>{
                const win =  state.windows[windowKey];
                win.isOpen = true;
                win.ZIndex  = state.nextZindex ;
                win.data = data ?? win.data;
                state.nextZindex++;
            }),
        closeWindow:(windowKey , data=null)=>
            set((state)=>{
                const win =  state.windows[windowKey];
                win.isOpen = false;
                win.ZIndex  = INITIAL_Z_INDEX ;
                win.data = null;
            }),
        Windows:(windowKey , data=null)=>
            set((state)=>{
                const win =  state.windows[windowKey];
                state.nextZindex++;
            }),
    }))
)


export default useWindowStore;