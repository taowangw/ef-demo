// import {
//   useEffect,
//   useState,
//   RefObject,
//   SetStateAction,
//   Dispatch,
// } from 'react';

// import { WidthCallback, Width } from './types';

// let animationFrameID: number;

// export const unObserveCreator = (resizeObserver: ResizeObserver) => () => {
//   resizeObserver.disconnect();
//   window.cancelAnimationFrame(animationFrameID);
// };

// export const resizeObserverCallbackCreator =
//   (setWidth: Dispatch<SetStateAction<Width>>, widthCallback?: WidthCallback) =>
//   (entries: ResizeObserverEntry[]) => {
//     animationFrameID = window.requestAnimationFrame(() => {
//       setWidth(entries[0].contentRect);
//       widthCallback?.(entries[0].contentRect);
//     });
//   };

// function useSize(ref: RefObject<HTMLElement>, widthCallback?: WidthCallback) {
//   const [width, setWidth] = useState({ width: 0 });

//   useEffect(() => {
//     const { current } = ref;
//     if (window.ResizeObserver) {
//       const resizeObserver = new window.ResizeObserver(
//         resizeObserverCallbackCreator(setWidth, widthCallback),
//       );
//       if (current) {
//         resizeObserver.observe(current);
//       }

//       return unObserveCreator(resizeObserver);
//     }

//     return undefined;
//   }, [ref, widthCallback]);

//   return width;
// }

// export default useSize;
