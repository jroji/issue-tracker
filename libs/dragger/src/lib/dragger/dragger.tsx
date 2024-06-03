import { useCallback, useContext, useEffect, useRef } from 'react';
import styles from './dragger.module.css';
import { DragContext } from '../dragContext/dragContext';

export interface DraggerProps {
  children: React.ReactNode;
  value: unknown;
}

export function Dragger({ value, children }: DraggerProps) {
  const { selectedCard, selectCard, dropCard } = useContext(DragContext);
  const ref = useRef(null);
   
    useEffect(() => {
      const handleMouse = () => {
        if (selectedCard) {
          dropCard();
        }
      };
      window.addEventListener('mouseup', handleMouse);
      return () => window.removeEventListener('mouseup', handleMouse)
    }, [selectedCard]);
  
    const handleMouse = useCallback(() => {
      if(!selectedCard && ref.current) {
        selectCard(value, ref.current);
      }
  }, [selectedCard, value])

  return (
    <div 
      className={`${styles['drag-element']} ${selectedCard && styles['dragging']}`}
      onMouseDown={handleMouse}
      ref={ref}
      >
      { children }
    </div>
  );
}

export default Dragger;
